import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Pricing() {
  const subscriptions = [
    {
      name: "Freemium",
      price: "0€",
      period: "/ User",
      description: "Perfekt zum Einstieg",
      features: [
        "7 kostenlose Analysen (alle Agenten)",
        "5.000 Credits inklusive",
        "Automatisierte Briefings",
        "2 User pro Firma",
        "Email-Support",
      ],
      cta: "Jetzt starten",
      href: "/register",
      popular: false,
    },
    {
      name: "Professional",
      price: "99€",
      period: "/ Monat",
      description: "Für Teams und Unternehmen",
      features: [
        "Unbegrenzte Analysen",
        "50.000 Credits / Monat",
        "Prioritäts-Support",
        "Team-Kollaboration",
        "Erweiterte Analytics",
        "API-Zugriff",
      ],
      cta: "Jetzt upgraden",
      href: "/register",
      popular: true,
    },
    {
      name: "Business",
      price: "499€",
      period: "/ Monat",
      description: "Für wachsende Organisationen",
      features: [
        "Unbegrenzte Analysen",
        "250.000 Credits / Monat",
        "Dedizierter Account Manager",
        "Custom Integrationen",
        "Erweiterte Sicherheit",
        "SLA-Garantie",
        "Onboarding-Support",
      ],
      cta: "Jetzt upgraden",
      href: "/register",
      popular: false,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Für große Organisationen",
      features: [
        "Unbegrenzte User & Analysen",
        "Custom Credits",
        "On-Premise Option",
        "White-Label Lösung",
        "24/7 Premium Support",
        "Custom SLA",
        "Persönlicher Success Manager",
      ],
      cta: "Kontakt aufnehmen",
      href: "#contact",
      popular: false,
    },
  ];

  const creditPackages = [
    {
      name: "Starter",
      credits: "10.000",
      price: "80€",
      pricePerCredit: "0,008€",
      features: ["Einmalige Zahlung", "Credits verfallen nicht", "Sofort verfügbar"],
    },
    {
      name: "Growth",
      credits: "50.000",
      price: "350€",
      pricePerCredit: "0,007€",
      features: ["Einmalige Zahlung", "Credits verfallen nicht", "Sofort verfügbar", "12% Ersparnis"],
      popular: true,
    },
    {
      name: "Scale",
      credits: "100.000",
      price: "600€",
      pricePerCredit: "0,006€",
      features: ["Einmalige Zahlung", "Credits verfallen nicht", "Sofort verfügbar", "25% Ersparnis"],
    },
    {
      name: "Enterprise",
      credits: "200.000",
      price: "1.000€",
      pricePerCredit: "0,005€",
      features: ["Einmalige Zahlung", "Credits verfallen nicht", "Sofort verfügbar", "37% Ersparnis"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Transparent und fair
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Starten Sie kostenlos mit unserem Freemium-Modell. Upgraden Sie jederzeit für unbegrenzte Analysen oder kaufen Sie Credit-Pakete nach Bedarf.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tabs */}
      <section className="py-20 bg-background">
        <div className="container">
          <Tabs defaultValue="subscriptions" className="max-w-7xl mx-auto">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
              <TabsTrigger value="credits">Credit-Pakete</TabsTrigger>
            </TabsList>

            {/* Subscriptions */}
            <TabsContent value="subscriptions">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {subscriptions.map((plan, index) => (
                  <Card
                    key={index}
                    className={`relative ${
                      plan.popular ? "border-2 border-primary shadow-lg" : "border-2"
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        Beliebt
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                        {plan.period && (
                          <span className="text-muted-foreground ml-2">{plan.period}</span>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href={plan.href}>
                        <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                          {plan.cta}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-16 max-w-3xl mx-auto">
                <Card className="bg-muted/30">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      Alle Pläne beinhalten:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">7 spezialisierte KI-Agenten</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Automatisierte Briefings</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Branchenspezifische Analysen</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Regelmäßige Updates</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Sichere Datenverschlüsselung</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">DSGVO-konform</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Credit Packages */}
            <TabsContent value="credits">
              <div className="mb-12 text-center max-w-3xl mx-auto">
                <p className="text-lg text-muted-foreground">
                  Kaufen Sie Credits nach Bedarf. Credits verfallen nicht und können für alle Agenten verwendet werden.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {creditPackages.map((pkg, index) => (
                  <Card
                    key={index}
                    className={`relative ${
                      pkg.popular ? "border-2 border-secondary shadow-lg" : "border-2"
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        Bester Wert
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                      <div className="mt-2">
                        <span className="text-3xl font-bold text-foreground">{pkg.credits}</span>
                        <span className="text-muted-foreground ml-2">Credits</span>
                      </div>
                      <div className="mt-2">
                        <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {pkg.pricePerCredit} / Credit
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-3">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                        Credits kaufen
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-16 max-w-3xl mx-auto">
                <Card className="bg-gradient-to-br from-secondary/5 to-accent/5 border-2">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      Wie funktionieren Credits?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Credits werden für jede Agent-Ausführung verbraucht. Die Anzahl der Credits hängt von der Komplexität der Analyse ab:
                      </p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                          <span className="text-sm">Einfache Analyse: ~500-1.000 Credits</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                          <span className="text-sm">Mittlere Analyse: ~1.000-2.500 Credits</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                          <span className="text-sm">Komplexe Analyse: ~2.500-5.000 Credits</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Bereit zu starten?
            </h2>
            <p className="text-lg text-muted-foreground">
              Registrieren Sie sich jetzt kostenlos und erhalten Sie 7 Analysen plus 5.000 Credits.
            </p>
            <Link href="/register">
              <Button size="lg" className="text-lg px-8">
                Jetzt kostenlos starten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
