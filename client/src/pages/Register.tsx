import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { api, handleAPIError } from "@/lib/api";
import { toast } from "sonner";

export default function Register() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    companyName: "",
    acceptPrivacy: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [freemiumWarning, setFreemiumWarning] = useState<{
    available: boolean;
    usedSlots: number;
    limit: number;
  } | null>(null);

  // Email domain extraction
  const extractDomain = (email: string): string => {
    const parts = email.split("@");
    return parts.length === 2 ? parts[1] : "";
  };

  // Freemail detection
  const isFreemailAddress = (email: string): boolean => {
    const freemailDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
      "web.de",
      "gmx.de",
      "gmx.net",
      "t-online.de",
      "freenet.de",
    ];
    const domain = extractDomain(email);
    return freemailDomains.includes(domain.toLowerCase());
  };

  // Validation
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email-Adresse ist erforderlich";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ungültige Email-Adresse";
    } else if (isFreemailAddress(formData.email)) {
      newErrors.email = "Bitte verwenden Sie Ihre geschäftliche Email-Adresse. Freemail-Adressen sind nicht erlaubt.";
    }

    // Name validation
    if (!formData.name) {
      newErrors.name = "Name ist erforderlich";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name muss mindestens 2 Zeichen lang sein";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Passwort ist erforderlich";
    } else if (formData.password.length < 8) {
      newErrors.password = "Passwort muss mindestens 8 Zeichen lang sein";
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = "Passwort muss mindestens einen Großbuchstaben enthalten";
    } else if (!/[a-z]/.test(formData.password)) {
      newErrors.password = "Passwort muss mindestens einen Kleinbuchstaben enthalten";
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password = "Passwort muss mindestens eine Zahl enthalten";
    }

    // Company name validation
    if (!formData.companyName) {
      newErrors.companyName = "Firmenname ist erforderlich";
    } else if (formData.companyName.length < 2) {
      newErrors.companyName = "Firmenname muss mindestens 2 Zeichen lang sein";
    }

    // Privacy acceptance validation
    if (!formData.acceptPrivacy) {
      newErrors.acceptPrivacy = "Sie müssen die Datenschutzerklärung und AGB akzeptieren";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Check freemium availability
  const checkFreemiumAvailability = async (email: string): Promise<boolean> => {
    try {
      const result = await api.checkFreemiumAvailability(email);
      
      if (!result.available) {
        setFreemiumWarning(result);
        // Redirect to exhausted page
        const domain = extractDomain(email);
        setLocation(`/register/exhausted?domain=${domain}`);
        return false;
      }

      setFreemiumWarning(result);
      return true;
    } catch (error) {
      console.error("Freemium check error:", error);
      // In case of error, allow registration to continue
      return true;
    }
  };

  // Handle email blur (check freemium on blur)
  const handleEmailBlur = async () => {
    if (formData.email && !isFreemailAddress(formData.email)) {
      await checkFreemiumAvailability(formData.email);
    }
  };

  // Handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Check freemium availability one more time
      const isAvailable = await checkFreemiumAvailability(formData.email);
      
      if (!isAvailable) {
        setLoading(false);
        return;
      }

      // API call to register
      const result = await api.register({
        email: formData.email,
        password: formData.password,
        name: formData.name,
        companyName: formData.companyName,
        acceptPrivacy: formData.acceptPrivacy,
      });

      if (result.success) {
        // Show success message and redirect to email verification info
        toast.success("Registrierung erfolgreich! Bitte überprüfen Sie Ihre Email-Adresse.");
        setLocation("/verify-email");
      } else {
        throw new Error(result.message || "Registrierung fehlgeschlagen");
      }
    } catch (error) {
      console.error("Registration error:", error);
      const errorMessage = handleAPIError(error);
      setErrors({
        submit: errorMessage,
      });
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
      <div className="container">
        <div className="max-w-md mx-auto">
          <Card className="border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Kostenlos registrieren</CardTitle>
              <CardDescription className="text-base">
                Starten Sie jetzt und erhalten Sie 7 kostenlose Analysen plus 5.000 Credits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email-Adresse *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="max.mustermann@firma.de"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onBlur={handleEmailBlur}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive flex items-center gap-2">
                      <AlertCircle className="h-4 w-4" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Freemium Warning */}
                {freemiumWarning && freemiumWarning.available && (
                  <Alert className="bg-accent/10 border-accent">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <AlertDescription>
                      Freemium verfügbar: {freemiumWarning.usedSlots}/{freemiumWarning.limit} Slots belegt
                    </AlertDescription>
                  </Alert>
                )}

                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Vollständiger Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Max Mustermann"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive flex items-center gap-2">
                      <AlertCircle className="h-4 w-4" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password">Passwort * (mind. 8 Zeichen)</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className={errors.password ? "border-destructive" : ""}
                  />
                  {errors.password && (
                    <p className="text-sm text-destructive flex items-center gap-2">
                      <AlertCircle className="h-4 w-4" />
                      {errors.password}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Mind. 1 Großbuchstabe, 1 Kleinbuchstabe, 1 Zahl
                  </p>
                </div>

                {/* Company Name */}
                <div className="space-y-2">
                  <Label htmlFor="companyName">Firmenname *</Label>
                  <Input
                    id="companyName"
                    type="text"
                    placeholder="Ihre Firma GmbH"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className={errors.companyName ? "border-destructive" : ""}
                  />
                  {errors.companyName && (
                    <p className="text-sm text-destructive flex items-center gap-2">
                      <AlertCircle className="h-4 w-4" />
                      {errors.companyName}
                    </p>
                  )}
                </div>

                {/* Privacy Checkbox */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="acceptPrivacy"
                      checked={formData.acceptPrivacy}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, acceptPrivacy: checked as boolean })
                      }
                      className={errors.acceptPrivacy ? "border-destructive" : ""}
                    />
                    <Label
                      htmlFor="acceptPrivacy"
                      className="text-sm font-normal leading-tight cursor-pointer"
                    >
                      Ich akzeptiere die{" "}
                      <a href="#" className="text-primary hover:underline">
                        Datenschutzerklärung
                      </a>{" "}
                      und{" "}
                      <a href="#" className="text-primary hover:underline">
                        AGB
                      </a>
                    </Label>
                  </div>
                  {errors.acceptPrivacy && (
                    <p className="text-sm text-destructive flex items-center gap-2">
                      <AlertCircle className="h-4 w-4" />
                      {errors.acceptPrivacy}
                    </p>
                  )}
                </div>

                {/* Submit Error */}
                {errors.submit && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{errors.submit}</AlertDescription>
                  </Alert>
                )}

                {/* Submit Button */}
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Registrierung läuft...
                    </>
                  ) : (
                    "Jetzt kostenlos registrieren"
                  )}
                </Button>

                {/* Login Link */}
                <div className="text-center text-sm text-muted-foreground">
                  Bereits registriert?{" "}
                  <Link href="/login">
                    <a className="text-primary hover:underline">Hier anmelden</a>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="mt-8 space-y-3">
            <p className="text-center text-sm font-semibold text-foreground">
              Was Sie erhalten:
            </p>
            <div className="grid grid-cols-1 gap-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                <span>7 kostenlose Analysen (alle Agenten mit vorausgefüllten Prompts)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                <span>5.000 Credits für weitere Analysen</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                <span>Automatisierte Daily/Weekly Briefings</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                <span>Keine Kreditkarte erforderlich</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
