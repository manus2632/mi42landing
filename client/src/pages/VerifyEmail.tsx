import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useEffect, useState } from "react";
import { Mail, CheckCircle2, Loader2, AlertCircle, ArrowRight } from "lucide-react";

export default function VerifyEmail() {
  const [token, setToken] = useState<string>("");
  const [status, setStatus] = useState<"pending" | "verifying" | "success" | "error">("pending");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [redirectUrl, setRedirectUrl] = useState<string>("");
  const [countdown, setCountdown] = useState<number>(5);

  useEffect(() => {
    // Extract token from URL params
    const params = new URLSearchParams(window.location.search);
    const tokenParam = params.get("token");
    
    if (tokenParam) {
      setToken(tokenParam);
      verifyEmail(tokenParam);
    }
  }, []);

  useEffect(() => {
    // Countdown and redirect after successful verification
    if (status === "success" && redirectUrl && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (status === "success" && redirectUrl && countdown === 0) {
      window.location.href = redirectUrl;
    }
  }, [status, redirectUrl, countdown]);

  const verifyEmail = async (verificationToken: string) => {
    setStatus("verifying");

    try {
      const response = await fetch("http://46.224.9.190:3001/api/auth/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: verificationToken }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Verifizierung fehlgeschlagen");
      }

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setRedirectUrl(data.redirectUrl || "http://46.224.9.190:3001/onboarding");
      } else {
        throw new Error(data.message || "Verifizierung fehlgeschlagen");
      }
    } catch (error) {
      console.error("Verification error:", error);
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Der Bestätigungs-Link ist ungültig oder abgelaufen."
      );
    }
  };

  const handleResendEmail = async () => {
    // Mock resend functionality
    alert("Eine neue Bestätigungs-Email wurde versendet.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
      <div className="container">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Pending State */}
          {status === "pending" && (
            <Card className="border-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl">Email-Bestätigung erforderlich</CardTitle>
                <CardDescription className="text-base">
                  Wir haben Ihnen eine Bestätigungs-Email gesendet. Bitte klicken Sie auf den Link in der Email, um Ihr Konto zu aktivieren.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert className="bg-accent/10 border-accent">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <AlertDescription>
                    <strong>Was passiert als Nächstes?</strong>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>1. Öffnen Sie Ihr Email-Postfach</li>
                      <li>2. Klicken Sie auf den Bestätigungs-Link</li>
                      <li>3. Wir erstellen Ihre personalisierten Analysen (3-5 Minuten)</li>
                      <li>4. Sie werden automatisch zum Dashboard weitergeleitet</li>
                    </ul>
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center">
                    Keine Email erhalten? Überprüfen Sie Ihren Spam-Ordner.
                  </p>
                  <Button variant="outline" className="w-full" onClick={handleResendEmail}>
                    Bestätigungs-Email erneut senden
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Verifying State */}
          {status === "verifying" && (
            <Card className="border-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Loader2 className="h-8 w-8 text-primary animate-spin" />
                </div>
                <CardTitle className="text-3xl">Email-Adresse wird bestätigt...</CardTitle>
                <CardDescription className="text-base">
                  Bitte warten Sie einen Moment.
                </CardDescription>
              </CardHeader>
            </Card>
          )}

          {/* Success State */}
          {status === "success" && (
            <Card className="border-2 border-accent">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-3xl">Email-Adresse bestätigt!</CardTitle>
                <CardDescription className="text-base">
                  Ihr Account wurde erfolgreich aktiviert.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert className="bg-accent/10 border-accent">
                  <Loader2 className="h-4 w-4 text-accent animate-spin" />
                  <AlertDescription>
                    <strong>Wir erstellen jetzt Ihre personalisierten Analysen...</strong>
                    <br />
                    Dauer: ca. 3-5 Minuten
                    <br />
                    <br />
                    Sie erhalten:
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>✓ 7 kostenlose Analysen (alle Agenten mit vorausgefüllten Prompts)</li>
                      <li>✓ 5.000 Credits für weitere Analysen</li>
                      <li>✓ Zugriff auf automatisierte Daily/Weekly Briefings</li>
                    </ul>
                  </AlertDescription>
                </Alert>

                {redirectUrl && (
                  <div className="text-center space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Sie werden in {countdown} Sekunden automatisch weitergeleitet...
                    </p>
                    <Button size="lg" className="w-full" onClick={() => window.location.href = redirectUrl}>
                      Weiter zum Dashboard
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Error State */}
          {status === "error" && (
            <Card className="border-2 border-destructive">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="h-8 w-8 text-destructive" />
                </div>
                <CardTitle className="text-3xl">Verifizierung fehlgeschlagen</CardTitle>
                <CardDescription className="text-base">{errorMessage}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Mögliche Ursachen:</strong>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• Der Bestätigungs-Link ist abgelaufen (24 Stunden Gültigkeit)</li>
                      <li>• Der Link wurde bereits verwendet</li>
                      <li>• Der Link ist ungültig</li>
                    </ul>
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <Button variant="outline" className="w-full" onClick={handleResendEmail}>
                    Neue Bestätigungs-Email anfordern
                  </Button>
                  <div className="text-center">
                    <a href="/register" className="text-sm text-primary hover:underline">
                      Zurück zur Registrierung
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
