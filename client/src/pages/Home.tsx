import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import {
  BarChart3,
  TrendingUp,
  Users,
  Lightbulb,
  LineChart,
  Building2,
  DollarSign,
  Mail,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const agents = [
    {
      icon: BarChart3,
      title: "Market Analyst",
      description: "Umfassende Marktanalysen mit Wettbewerbsvergleich und Marktanteilen",
    },
    {
      icon: TrendingUp,
      title: "Trend Scout",
      description: "Identifizierung von Branchentrends und Zukunftsprognosen",
    },
    {
      icon: Users,
      title: "Survey Assistant",
      description: "Automatisierte Umfragenerstellung und Auswertung",
    },
    {
      icon: Lightbulb,
      title: "Strategy Consultant",
      description: "Strategische Beratung für Marktpositionierung und Wachstum",
    },
    {
      icon: LineChart,
      title: "Demand Forecasting",
      description: "Präzise Nachfrageprognosen basierend auf Marktdaten",
    },
    {
      icon: Building2,
      title: "Project Intelligence",
      description: "Analyse von Bauprojekten und Marktchancen",
    },
    {
      icon: DollarSign,
      title: "Pricing Strategy",
      description: "Optimale Preisstrategie basierend auf Wettbewerb und Nachfrage",
    },
  ];

  const features = [
    {
      icon: Mail,
      title: "Automatisierte Briefings",
      description: "Täglich oder wöchentlich: Markt-Updates, Rohstoffpreise, Börsenindizes und Branchennachrichten direkt in Ihr Postfach",
    },
    {
      icon: CheckCircle2,
      title: "7 kostenlose Analysen",
      description: "Jeder Freemium-User erhält 7 vorgefertigte Analysen aller Agenten plus 5.000 Credits",
    },
    {
      icon: TrendingUp,
      title: "Branchenspezifisch",
      description: "Spezialisiert auf Bauzulieferindustrie: Zement, Beton, Stahl, Holz, Dämmstoffe und mehr",
    },
  ];

  const testimonials = [
    {
      quote: "Mi42 hat unsere Marktforschung revolutioniert. Wir sparen 80% Zeit bei Analysen.",
      author: "Dr. Michael Schmidt",
      role: "Head of Strategy",
      company: "HeidelbergCement AG",
    },
    {
      quote: "Die automatisierten Briefings halten uns täglich auf dem Laufenden. Unverzichtbar!",
      author: "Anna Müller",
      role: "Market Intelligence Manager",
      company: "Holcim Deutschland",
    },
    {
      quote: "Präzise Nachfrageprognosen, die uns bei strategischen Entscheidungen helfen.",
      author: "Thomas Weber",
      role: "VP Sales & Marketing",
      company: "Knauf Gips KG",
    },
  ];

  const faqs = [
    {
      question: "Was ist das Freemium-Modell?",
      answer: "Pro Firma sind 2 kostenlose Registrierungen erlaubt. Jeder Freemium-User erhält 7 kostenlose Analysen (alle Agenten) plus 5.000 Credits. Der 3. User muss sich kostenpflichtig registrieren.",
    },
    {
      question: "Welche Agenten sind verfügbar?",
      answer: "Mi42 bietet 7 spezialisierte KI-Agenten: Market Analyst, Trend Scout, Survey Assistant, Strategy Consultant, Demand Forecasting, Project Intelligence und Pricing Strategy.",
    },
    {
      question: "Wie funktionieren die automatisierten Briefings?",
      answer: "Sie erhalten täglich oder wöchentlich personalisierte Briefings mit Markt-Updates, Rohstoffpreisen, Börsenindizes und Branchennachrichten direkt per Email.",
    },
    {
      question: "Kann ich jederzeit upgraden?",
      answer: "Ja, Sie können jederzeit von Freemium zu einem kostenpflichtigen Plan wechseln und erhalten sofort Zugriff auf unbegrenzte Analysen.",
    },
    {
      question: "Welche Branchen werden unterstützt?",
      answer: "Mi42 ist spezialisiert auf die Bauzulieferindustrie: Zement, Beton, Stahl, Holz, Dämmstoffe, Fassadensysteme und weitere Baumaterialien.",
    },
  ];

  return (
    <>
      <SEO />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Marktforschung für die Bauzulieferindustrie –{" "}
              <span className="text-primary">automatisiert</span>,{" "}
              <span className="text-secondary">KI-gestützt</span>,{" "}
              <span className="text-accent">präzise</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              7 spezialisierte KI-Agenten analysieren Märkte, Trends und Wettbewerber. Täglich automatisierte Briefings mit Rohstoffpreisen, Börsenindizes und Branchennachrichten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/register">
                <Button size="lg" className="text-lg px-8">
                  Jetzt kostenlos starten
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/features">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Features entdecken
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              ✓ 7 kostenlose Analysen • ✓ 5.000 Credits • ✓ Keine Kreditkarte erforderlich
            </p>
          </div>
        </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              7 KI-Agenten für Ihre Marktforschung
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jeder Agent ist spezialisiert auf einen Bereich der Marktforschung und liefert präzise, branchenspezifische Analysen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent, index) => {
              const Icon = agent.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{agent.title}</CardTitle>
                    <CardDescription>{agent.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-muted/30">
                  <CardHeader>
                    <Icon className="h-8 w-8 text-accent mb-2" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Transparent und fair
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Starten Sie kostenlos mit unserem Freemium-Modell. Upgraden Sie jederzeit für unbegrenzte Analysen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Freemium */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Freemium</CardTitle>
                <CardDescription>Perfekt zum Einstieg</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">0€</span>
                  <span className="text-muted-foreground ml-2">/ User</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>7 kostenlose Analysen (alle Agenten)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>5.000 Credits inklusive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Automatisierte Briefings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>2 User pro Firma</span>
                  </li>
                </ul>
                <Link href="/register">
                  <Button className="w-full">Jetzt starten</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Professional */}
            <Card className="border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Beliebt
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Professional</CardTitle>
                <CardDescription>Für Teams und Unternehmen</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">99€</span>
                  <span className="text-muted-foreground ml-2">/ Monat</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Unbegrenzte Analysen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>50.000 Credits / Monat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Prioritäts-Support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Team-Kollaboration</span>
                  </li>
                </ul>
                <Link href="/register">
                  <Button className="w-full">Jetzt upgraden</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Enterprise */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <CardDescription>Für große Organisationen</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Unbegrenzte User</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Dedizierter Account Manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Custom Integrationen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>SLA & On-Premise Option</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Kontakt aufnehmen</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/pricing">
              <Button variant="link" className="text-primary">
                Alle Preisoptionen ansehen →
              </Button>
            </Link>
          </div>
        </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Was unsere Kunden sagen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-muted/30">
                <CardContent className="pt-6">
                  <p className="text-lg mb-6 italic text-foreground">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Häufig gestellte Fragen
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Bereit für datengetriebene Entscheidungen?
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
    </>
  );
}
