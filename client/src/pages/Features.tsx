import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import {
  BarChart3,
  TrendingUp,
  Users,
  Lightbulb,
  LineChart,
  Building2,
  DollarSign,
  Mail,
  Clock,
  Globe,
  ArrowRight,
} from "lucide-react";

export default function Features() {
  const agents = [
    {
      icon: BarChart3,
      title: "Market Analyst",
      description: "Umfassende Marktanalysen mit Wettbewerbsvergleich und Marktanteilen",
      features: [
        "Detaillierte Wettbewerbsanalyse",
        "Marktanteilsberechnung",
        "SWOT-Analyse",
        "Branchenstruktur-Analyse",
      ],
    },
    {
      icon: TrendingUp,
      title: "Trend Scout",
      description: "Identifizierung von Branchentrends und Zukunftsprognosen",
      features: [
        "Trendidentifikation in Echtzeit",
        "Technologie-Radar",
        "Zukunftsprognosen",
        "Disruptive Innovationen",
      ],
    },
    {
      icon: Users,
      title: "Survey Assistant",
      description: "Automatisierte Umfragenerstellung und Auswertung",
      features: [
        "KI-gestützte Fragebogenerstellung",
        "Automatische Auswertung",
        "Statistische Analysen",
        "Visualisierung der Ergebnisse",
      ],
    },
    {
      icon: Lightbulb,
      title: "Strategy Consultant",
      description: "Strategische Beratung für Marktpositionierung und Wachstum",
      features: [
        "Strategische Empfehlungen",
        "Go-to-Market Strategien",
        "Positionierungsanalyse",
        "Wachstumschancen",
      ],
    },
    {
      icon: LineChart,
      title: "Demand Forecasting",
      description: "Präzise Nachfrageprognosen basierend auf Marktdaten",
      features: [
        "Nachfrageprognosen",
        "Saisonalitätsanalyse",
        "Predictive Analytics",
        "Absatzplanung",
      ],
    },
    {
      icon: Building2,
      title: "Project Intelligence",
      description: "Analyse von Bauprojekten und Marktchancen",
      features: [
        "Bauprojekt-Monitoring",
        "Ausschreibungsanalyse",
        "Projektvolumen-Schätzung",
        "Marktchancen-Identifikation",
      ],
    },
    {
      icon: DollarSign,
      title: "Pricing Strategy",
      description: "Optimale Preisstrategie basierend auf Wettbewerb und Nachfrage",
      features: [
        "Wettbewerbspreisanalyse",
        "Preisoptimierung",
        "Elastizitätsanalyse",
        "Dynamische Preisgestaltung",
      ],
    },
  ];

  const briefingFeatures = [
    {
      icon: Mail,
      title: "Daily Briefings",
      description: "Täglich die wichtigsten Markt-Updates, Rohstoffpreise und Branchennachrichten in Ihrem Postfach.",
    },
    {
      icon: Clock,
      title: "Weekly Briefings",
      description: "Wöchentliche Zusammenfassungen mit Trendanalysen, Börsenindizes und strategischen Insights.",
    },
    {
      icon: Globe,
      title: "Personalisiert",
      description: "Individuell auf Ihre Branche und Interessen zugeschnitten – nur relevante Informationen.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              7 KI-Agenten für Ihre Marktforschung
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Jeder Agent ist spezialisiert auf einen Bereich der Marktforschung und liefert präzise, branchenspezifische Analysen für die Bauzulieferindustrie.
            </p>
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="space-y-12">
            {agents.map((agent, index) => {
              const Icon = agent.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`flex flex-col ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 items-center`}
                >
                  <div className="flex-1">
                    <Card className="border-2 hover:border-primary/50 transition-colors h-full">
                      <CardHeader>
                        <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="text-2xl">{agent.title}</CardTitle>
                        <CardDescription className="text-base">{agent.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {agent.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              <span className="text-sm text-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="flex-1">
                    <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center">
                      <Icon className="h-24 w-24 text-muted-foreground/20" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Automated Briefings */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Automatisierte Briefings
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bleiben Sie immer auf dem Laufenden mit automatisierten Daily und Weekly Briefings – personalisiert auf Ihre Branche.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {briefingFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-background">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Was ist enthalten?</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-sm">Markt-Updates und Branchennews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-sm">Rohstoffpreise (Zement, Stahl, Holz)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-sm">Börsenindizes und Aktienentwicklung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-sm">Neue Bauprojekte und Ausschreibungen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-sm">Technologie-Trends und Innovationen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-sm">Regulatorische Änderungen</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Bereit, Mi42 auszuprobieren?
            </h2>
            <p className="text-lg text-muted-foreground">
              Starten Sie jetzt kostenlos und erhalten Sie 7 Analysen plus 5.000 Credits.
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
