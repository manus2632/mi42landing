import { useState } from "react";
import { Link } from "wouter";
import { useABTest, trackEvent } from "@/hooks/useABTest";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  TrendingUp,
  Search,
  Users,
  Lightbulb,
  BarChart3,
  Target,
  DollarSign,
  CheckCircle2,
  XCircle,
  Clock,
  AlertCircle,
  Zap,
  Shield,
  Award,
  ArrowRight,
  Star,
} from "lucide-react";

export default function Home() {
  // A/B Test mit localStorage-Persistenz
  const { variant } = useABTest();

  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const quizQuestions = [
    {
      question: "Wie oft scheitern deine Marktstudien an ungenauen Daten?",
      options: ["Nie", "Selten", "Manchmal", "Oft", "Immer"],
    },
    {
      question: "Wie viel gibst du durchschnittlich für eine Marktstudie aus?",
      options: ["< 1.000 €", "1.000-5.000 €", "5.000-10.000 €", "10.000-50.000 €", "> 50.000 €"],
    },
    {
      question: "Wie lange wartest du normalerweise auf Ergebnisse?",
      options: ["< 1 Woche", "1-2 Wochen", "2-4 Wochen", "1-3 Monate", "> 3 Monate"],
    },
    {
      question: "Wie oft passen die Ergebnisse nicht zu deinem Business?",
      options: ["Nie", "Selten", "Manchmal", "Oft", "Immer"],
    },
    {
      question: "Wie wichtig ist dir schnelle, präzise Marktforschung?",
      options: ["Unwichtig", "Wenig wichtig", "Wichtig", "Sehr wichtig", "Kritisch"],
    },
  ];

  const handleQuizAnswer = (answerIndex: number) => {
    const newAnswers = [...quizAnswers, answerIndex];
    setQuizAnswers(newAnswers);

    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    const total = quizAnswers.reduce((sum, answer) => sum + answer, 0);
    const maxScore = quizQuestions.length * 4;
    return Math.round((total / maxScore) * 10);
  };

  const getScoreMessage = (score: number) => {
    if (score <= 3) return { title: "Kritisch", message: "Deine Marktforschung hat massive Probleme. Sofortiger Handlungsbedarf!", color: "text-red-600" };
    if (score <= 6) return { title: "Verbesserungswürdig", message: "Du verlierst Zeit und Geld mit ineffizienten Prozessen.", color: "text-orange-600" };
    return { title: "Gut, aber...", message: "Es gibt noch Potenzial für Optimierung und Kosteneinsparung.", color: "text-yellow-600" };
  };

  return (
    <>
      <SEO
        title="Market Research Agents - KI-basierte Marktforschung"
        description="Revolutioniere deine Marktforschung mit KI-Präzision. Spare 70% Zeit und Kosten gegenüber traditionellen Studien."
      />


      <main className="min-h-screen">
        {/* Hero Section mit A/B-Test-Varianten */}
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              {variant === "frustration" ? (
                <>
                  <Badge className="mb-6 bg-destructive/10 text-destructive hover:bg-destructive/20">
                    <AlertCircle className="mr-2 h-4 w-4" />
                    Problem erkannt?
                  </Badge>
                  <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                    Hast du genug{" "}
                    <span className="text-destructive">schlechte Marktstudien</span>{" "}
                    gekauft?
                  </h1>
                  <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
                    Entdecke, warum 80% der Studien scheitern – und wie du das änderst.
                  </p>
                </>
              ) : (
                <>
                  <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
                    <Zap className="mr-2 h-4 w-4" />
                    Bereit für die Zukunft?
                  </Badge>
                  <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                    Bist du bereit für die{" "}
                    <span className="text-destructive">besten Market Research Agents</span>{" "}
                    aller Zeiten?
                  </h1>
                  <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
                    Revolutioniere deine Marktforschung mit KI-Präzision – sofort ready nach Anmeldung.
                  </p>
                </>
              )}

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" className="text-lg" asChild>
                  <a href="#quiz">
                    <span className="hidden sm:inline">Starte dein kostenloses Research-Assessment</span>
                    <span className="sm:hidden">Start Free Assessment</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>

              <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Keine Kreditkarte nötig</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Ergebnisse in 5 Minuten</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem-Amplification Section */}
        <section className="border-t bg-muted/30 py-20">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
                Kennst du diese Frustrationen?
              </h2>
              <p className="mb-12 text-center text-lg text-muted-foreground">
                Stell dir vor, du investierst 5.000 € und bekommst nutzlose Empfehlungen...
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-destructive/20">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-destructive/10 p-3">
                        <DollarSign className="h-6 w-6 text-destructive" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Teure Studien ohne echte Insights</CardTitle>
                        <CardDescription className="mt-2">
                          Traditionelle Agenturen verlangen 10.000-50.000 € für generische Reports,
                          die nicht zu deinem Business passen.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="border-destructive/20">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-destructive/10 p-3">
                        <Clock className="h-6 w-6 text-destructive" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Wochenlange Wartezeiten</CardTitle>
                        <CardDescription className="mt-2">
                          Während du 4-12 Wochen auf Ergebnisse wartest, hat sich der Markt
                          bereits verändert. Deine Konkurrenz ist schneller.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="border-destructive/20">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-destructive/10 p-3">
                        <XCircle className="h-6 w-6 text-destructive" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Ungenaue, veraltete Daten</CardTitle>
                        <CardDescription className="mt-2">
                          Studien basieren oft auf Umfragen von vor Monaten. Die Realität sieht
                          heute völlig anders aus.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="border-destructive/20">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-destructive/10 p-3">
                        <AlertCircle className="h-6 w-6 text-destructive" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Keine Handlungsempfehlungen</CardTitle>
                        <CardDescription className="mt-2">
                          Du bekommst 100 Seiten Theorie, aber keine konkreten Schritte, wie du
                          dein Business verbessern kannst.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Quiz/Scorecard Section */}
        <section id="quiz" className="border-t py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Wie steht es um deine Marktforschung?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Beantworte 5 kurze Fragen und erhalte deine persönliche Bewertung + 3 schnelle Fixes
                </p>
              </div>

              {!showResults ? (
                <Card>
                  <CardHeader>
                    <div className="mb-4">
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          Frage {quizStep + 1} von {quizQuestions.length}
                        </span>
                        <span className="font-medium">
                          {Math.round(((quizStep + 1) / quizQuestions.length) * 100)}%
                        </span>
                      </div>
                      <Progress value={((quizStep + 1) / quizQuestions.length) * 100} />
                    </div>
                    <CardTitle className="text-2xl">
                      {quizQuestions[quizStep].question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      {quizQuestions[quizStep].options.map((option, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className="h-auto justify-start py-4 text-left"
                          onClick={() => handleQuizAnswer(index)}
                        >
                          <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-sm font-medium">
                            {index + 1}
                          </span>
                          {option}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-primary">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-4xl font-bold text-primary">{calculateScore()}</span>
                      <span className="text-lg text-muted-foreground">/10</span>
                    </div>
                    <CardTitle className={`text-3xl ${getScoreMessage(calculateScore()).color}`}>
                      {getScoreMessage(calculateScore()).title}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {getScoreMessage(calculateScore()).message}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Deine 3 schnellen Fixes:</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 rounded-lg bg-primary/5 p-4">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <p className="font-medium">Automatisiere deine Analysen</p>
                            <p className="text-sm text-muted-foreground">
                              Nutze KI-Agenten statt manueller Recherche – spare 70% Zeit
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 rounded-lg bg-primary/5 p-4">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <p className="font-medium">Echtzeit-Daten statt veralteter Reports</p>
                            <p className="text-sm text-muted-foreground">
                              Greife auf aktuelle Marktdaten zu, nicht auf 3 Monate alte Umfragen
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 rounded-lg bg-primary/5 p-4">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <p className="font-medium">Konkrete Handlungsempfehlungen</p>
                            <p className="text-sm text-muted-foreground">
                              Erhalte sofort umsetzbare Strategien für dein Business
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t">
                        <Button size="lg" className="w-full" asChild>
                          <Link href="/register">
                            Jetzt kostenlos starten
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Solution & Benefits Section */}
        <section className="border-t bg-muted/30 py-20">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="mb-16 text-center">
                <Badge className="mb-4">Die Lösung</Badge>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Market Research Agents
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  KI-Agenten, die in Minuten tiefe Insights liefern – präzise, aktuell und
                  handlungsorientiert
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3 mb-16">
                <Card>
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Automatisierte Analysen</CardTitle>
                    <CardDescription>
                      7 spezialisierte KI-Agenten analysieren Märkte, Trends und Wettbewerber
                      automatisch
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      <CheckCircle2 className="h-4 w-4" />
                      Spare 70% Zeit und Kosten
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Echtzeit-Insights</CardTitle>
                    <CardDescription>
                      Aktuelle Marktdaten statt veralteter Umfragen – immer auf dem neuesten Stand
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      <CheckCircle2 className="h-4 w-4" />
                      Ergebnisse in Minuten
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Handlungsempfehlungen</CardTitle>
                    <CardDescription>
                      Konkrete Strategien und nächste Schritte – kein theoretisches Blabla
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      <CheckCircle2 className="h-4 w-4" />
                      Sofort umsetzbar
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* How it Works */}
              <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-12">
                <h3 className="mb-8 text-center text-2xl font-bold">So funktioniert's</h3>
                <div className="grid gap-6 md:grid-cols-4">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      1
                    </div>
                    <h4 className="mb-2 font-semibold">Registrieren</h4>
                    <p className="text-sm text-muted-foreground">
                      Kostenloses Konto erstellen – keine Kreditkarte nötig
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      2
                    </div>
                    <h4 className="mb-2 font-semibold">Agent wählen</h4>
                    <p className="text-sm text-muted-foreground">
                      Wähle aus 7 spezialisierten Agenten für deine Analyse
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      3
                    </div>
                    <h4 className="mb-2 font-semibold">Analyse starten</h4>
                    <p className="text-sm text-muted-foreground">
                      KI analysiert Markt, Trends und Wettbewerber automatisch
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      4
                    </div>
                    <h4 className="mb-2 font-semibold">Insights nutzen</h4>
                    <p className="text-sm text-muted-foreground">
                      Erhalte handlungsorientierte Empfehlungen in Minuten
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="border-t py-20">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="mb-16 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Was unsere Kunden sagen
                </h2>
                <p className="text-lg text-muted-foreground">
                  Über 500 Unternehmen vertrauen uns
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3 mb-12">
                <Card>
                  <CardHeader>
                    <div className="mb-4 flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <CardDescription className="text-base">
                      "Dank Market Research Agents haben wir unseren Umsatz um 40% gesteigert.
                      Die Insights sind präzise und sofort umsetzbar."
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold">
                        MS
                      </div>
                      <div>
                        <p className="font-semibold">Michael Schmidt</p>
                        <p className="text-sm text-muted-foreground">CEO, HeidelbergCement GmbH</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-4 flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <CardDescription className="text-base">
                      "Wir sparen jetzt 15.000 € pro Quartal und bekommen bessere Ergebnisse
                      als von traditionellen Agenturen. Absolute Empfehlung!"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold">
                        AM
                      </div>
                      <div>
                        <p className="font-semibold">Anna Müller</p>
                        <p className="text-sm text-muted-foreground">Head of Marketing, Bayer AG</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-4 flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <CardDescription className="text-base">
                      "Die Geschwindigkeit ist unglaublich. Wir bekommen in 10 Minuten, wofür
                      andere Agenturen 6 Wochen brauchen."
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold">
                        TW
                      </div>
                      <div>
                        <p className="font-semibold">Thomas Weber</p>
                        <p className="text-sm text-muted-foreground">Strategy Director, Siemens</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
                <div className="text-2xl font-bold">HeidelbergCement</div>
                <div className="text-2xl font-bold">Bayer</div>
                <div className="text-2xl font-bold">Siemens</div>
                <div className="text-2xl font-bold">BASF</div>
                <div className="text-2xl font-bold">Volkswagen</div>
              </div>
            </div>
          </div>
        </section>

        {/* Offer & Urgency Section */}
        <section className="border-t bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <Card className="border-primary shadow-xl">
                <CardHeader className="text-center">
                  <Badge className="mb-4 mx-auto bg-destructive text-destructive-foreground">
                    <Clock className="mr-2 h-4 w-4" />
                    Limitiertes Angebot
                  </Badge>
                  <CardTitle className="text-3xl md:text-4xl">
                    Jetzt starten: Erstes Assessment gratis
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Nur für die nächsten 100 Besucher – danach regulärer Preis
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="rounded-lg bg-muted p-6">
                    <div className="mb-4 flex items-baseline gap-2">
                      <span className="text-4xl font-bold">99 €</span>
                      <span className="text-muted-foreground">/Monat</span>
                      <Badge variant="outline" className="ml-auto">Freemium verfügbar</Badge>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>2 kostenlose Analysen pro Monat</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>Zugriff auf alle 7 KI-Agenten</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>Echtzeit-Marktdaten</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>Handlungsempfehlungen</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center gap-4 rounded-lg bg-primary/5 p-4">
                    <Shield className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-semibold">100% Money-Back Garantie</p>
                      <p className="text-sm text-muted-foreground">
                        Nicht zufrieden? Geld zurück – ohne Fragen
                      </p>
                    </div>
                  </div>

                  <Button size="lg" className="w-full text-lg" asChild>
                    <Link href="/register">
                      Jetzt kostenlos starten
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    Keine Kreditkarte erforderlich • Jederzeit kündbar
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="border-t py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              {variant === "frustration" ? (
                <>
                  <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                    Schluss mit schlechten Marktstudien
                  </h2>
                  <p className="mb-8 text-lg text-muted-foreground">
                    Starte jetzt mit KI-basierter Marktforschung und spare Zeit, Geld und Nerven
                  </p>
                </>
              ) : (
                <>
                  <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                    Bereit? Jetzt loslegen!
                  </h2>
                  <p className="mb-8 text-lg text-muted-foreground">
                    Werde Teil der 500+ Unternehmen, die bereits mit Market Research Agents arbeiten
                  </p>
                </>
              )}

              <Button 
                size="lg" 
                className="text-lg" 
                asChild
                onClick={() => trackEvent(variant, "cta_click")}
              >
                <Link href="/register">
                  Erste Analyse in 5 Minuten starten
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
