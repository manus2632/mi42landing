import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Target, Users, Zap, ArrowRight } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Präzision",
      description: "Wir liefern präzise, datengetriebene Analysen, auf die Sie sich verlassen können.",
    },
    {
      icon: Users,
      title: "Kundenorientierung",
      description: "Ihre Bedürfnisse stehen im Mittelpunkt. Wir entwickeln Lösungen, die echten Mehrwert schaffen.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Wir nutzen modernste KI-Technologie, um Marktforschung zu revolutionieren.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Über Mi42
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Wir revolutionieren Marktforschung für die Bauzulieferindustrie mit KI-gestützten Analysen und automatisierten Briefings.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Unsere Mission
              </h2>
            </div>
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2">
              <CardContent className="pt-6">
                <p className="text-lg text-foreground leading-relaxed">
                  Mi42 wurde gegründet, um Marktforschung in der Bauzulieferindustrie zu demokratisieren. Wir glauben, dass jedes Unternehmen – unabhängig von Größe oder Budget – Zugang zu präzisen, datengetriebenen Marktanalysen haben sollte.
                </p>
                <p className="text-lg text-foreground leading-relaxed mt-4">
                  Durch den Einsatz modernster KI-Technologie automatisieren wir zeitaufwändige Recherchen und liefern Ihnen die Insights, die Sie für strategische Entscheidungen benötigen – schnell, präzise und kostengünstig.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Unsere Werte
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="bg-background border-2">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Unsere Geschichte
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Mi42 entstand aus der Erkenntnis, dass traditionelle Marktforschung in der Bauzulieferindustrie zu langsam, zu teuer und zu unflexibel ist. Führungskräfte benötigen schnelle, präzise Insights, um in einem dynamischen Marktumfeld wettbewerbsfähig zu bleiben.
              </p>
              <p>
                Unser Team aus Branchenexperten, Datenwissenschaftlern und KI-Ingenieuren hat eine Plattform entwickelt, die Marktforschung neu definiert. Mit 7 spezialisierten KI-Agenten und automatisierten Briefings bieten wir eine Lösung, die sowohl für kleine Unternehmen als auch für große Konzerne funktioniert.
              </p>
              <p>
                Heute vertrauen führende Unternehmen der Bauzulieferindustrie auf Mi42, um Märkte zu analysieren, Trends zu identifizieren und strategische Entscheidungen zu treffen. Wir sind stolz darauf, Teil ihrer Erfolgsgeschichte zu sein.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Unser Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ein interdisziplinäres Team aus Branchenexperten, Datenwissenschaftlern und KI-Ingenieuren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((_, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="pt-6">
                  <div className="aspect-square bg-muted/30 rounded-lg mb-4 flex items-center justify-center">
                    <Users className="h-16 w-16 text-muted-foreground/20" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-foreground">Team Member</h3>
                  <p className="text-sm text-muted-foreground mb-2">Position</p>
                  <p className="text-sm text-muted-foreground">
                    Kurze Beschreibung der Expertise und Rolle im Team.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Werden Sie Teil unserer Community
            </h2>
            <p className="text-lg text-muted-foreground">
              Starten Sie jetzt kostenlos und erleben Sie, wie Mi42 Ihre Marktforschung transformiert.
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
