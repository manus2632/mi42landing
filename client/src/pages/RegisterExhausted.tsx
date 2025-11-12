import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { AlertCircle, Calendar, Mail, ArrowRight } from "lucide-react";

interface FreemiumUser {
  email: string;
  name: string;
  registeredAt: string;
}

export default function RegisterExhausted() {
  const [location] = useLocation();
  const [domain, setDomain] = useState<string>("");
  const [users, setUsers] = useState<FreemiumUser[]>([]);
  const [resetDate, setResetDate] = useState<string>("");
  const [showContacts, setShowContacts] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Extract domain from URL params
    const params = new URLSearchParams(window.location.search);
    const domainParam = params.get("domain");
    
    if (domainParam) {
      setDomain(domainParam);
      fetchFreemiumUsers(domainParam);
    } else {
      setLoading(false);
    }
  }, [location]);

  const fetchFreemiumUsers = async (domain: string) => {
    try {
      const response = await fetch(
        `http://46.224.9.190:3001/api/auth/freemium-users?domain=${domain}`
      );

      if (!response.ok) {
        throw new Error("Fehler beim Laden der Freemium-User");
      }

      const data = await response.json();
      setUsers(data.users || []);
      setResetDate(data.resetDate || "");
    } catch (error) {
      console.error("Error fetching freemium users:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string): string => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 flex items-center justify-center">
        <p className="text-muted-foreground">Lade Daten...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
      <div className="container">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Warning Card */}
          <Card className="border-2 border-destructive/50">
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="h-8 w-8 text-destructive" />
              </div>
              <CardTitle className="text-3xl">Freemium-Kontingent erschöpft</CardTitle>
              <CardDescription className="text-base">
                Ihre Firma ({domain}) hat bereits 2 Freemium-Registrierungen genutzt.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Existing Users */}
          {users.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Folgende Kollegen haben sich bereits registriert:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {users.map((user, index) => (
                  <div
                    key={index}
                    className="p-4 bg-muted/30 rounded-lg border border-border"
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <p className="font-semibold text-foreground">
                          {index + 1}. {user.name || "Unbekannt"}
                        </p>
                        {showContacts && (
                          <p className="text-sm text-muted-foreground flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            {user.email}
                          </p>
                        )}
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Registriert am: {formatDate(user.registeredAt)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Möchten Sie diese Kollegen kontaktieren?
                  </p>
                  <div className="flex gap-4">
                    <Button
                      variant={showContacts ? "outline" : "default"}
                      onClick={() => setShowContacts(!showContacts)}
                    >
                      {showContacts ? "Kontaktdaten verbergen" : "Ja, zeige mir ihre Kontaktdaten"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Upgrade Option */}
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Oder registrieren Sie sich als zahlender Kunde</CardTitle>
              <CardDescription className="text-base">
                Erhalten Sie sofortigen Zugriff auf alle Features ohne Einschränkungen
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-sm">Alle 7 Agenten unbegrenzt nutzen</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-sm">Automatisierte Daily/Weekly Briefings</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-sm">Team-Kollaboration</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-sm">Prioritäts-Support</span>
                </div>
              </div>

              <Link href="/register">
                <Button size="lg" className="w-full">
                  Jetzt kostenpflichtig registrieren
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <div className="text-center">
                <Link href="/pricing">
                  <a className="text-sm text-primary hover:underline">
                    Alle Preisoptionen ansehen →
                  </a>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Reset Information */}
          {resetDate && (
            <Alert className="bg-muted/30">
              <Calendar className="h-4 w-4" />
              <AlertDescription>
                <strong>Oder warten Sie bis: {formatDate(resetDate)}</strong>
                <br />
                Nach 12 Monaten seit der ersten Registrierung stehen erneut 2 Freemium-Slots zur Verfügung.
              </AlertDescription>
            </Alert>
          )}

          {/* Back to Home */}
          <div className="text-center">
            <Link href="/">
              <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                ← Zurück zur Startseite
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
