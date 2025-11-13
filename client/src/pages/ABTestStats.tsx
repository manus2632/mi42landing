import { useEffect, useState } from "react";
import { getABTestStats } from "@/hooks/useABTest";

import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ABTestStats() {
  const [stats, setStats] = useState(getABTestStats());

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(getABTestStats());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const calculateCTR = (clicks: number, impressions: number) => {
    return impressions > 0 ? ((clicks / impressions) * 100).toFixed(2) : "0.00";
  };

  return (
    <>

      <main className="min-h-screen bg-background py-12">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">A/B Test Statistiken</h1>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Frustration Variante */}
            <Card>
              <CardHeader>
                <CardTitle>Frustration Variante</CardTitle>
                <CardDescription>
                  "Hast du genug schlechte Marktstudien gekauft?"
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Impressions:</span>
                  <span className="font-semibold">{stats.frustration.impressions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">CTA Klicks:</span>
                  <span className="font-semibold">{stats.frustration.cta_clicks}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">CTR:</span>
                  <span className="font-semibold">
                    {calculateCTR(stats.frustration.cta_clicks, stats.frustration.impressions)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Quiz Abschlüsse:</span>
                  <span className="font-semibold">{stats.frustration.quiz_completes}</span>
                </div>
              </CardContent>
            </Card>

            {/* Readiness Variante */}
            <Card>
              <CardHeader>
                <CardTitle>Readiness Variante</CardTitle>
                <CardDescription>
                  "Bist du bereit für die besten Market Research Agents?"
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Impressions:</span>
                  <span className="font-semibold">{stats.readiness.impressions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">CTA Klicks:</span>
                  <span className="font-semibold">{stats.readiness.cta_clicks}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">CTR:</span>
                  <span className="font-semibold">
                    {calculateCTR(stats.readiness.cta_clicks, stats.readiness.impressions)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Quiz Abschlüsse:</span>
                  <span className="font-semibold">{stats.readiness.quiz_completes}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Hinweise</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>• Daten werden im localStorage gespeichert (pro Browser/Gerät)</p>
              <p>• CTR = Click-Through-Rate (CTA Klicks / Impressions)</p>
              <p>• Für produktive Auswertung Google Analytics oder Plausible nutzen</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  if (confirm("Alle A/B-Test-Daten löschen?")) {
                    localStorage.removeItem("ab_events");
                    localStorage.removeItem("ab_variant");
                    setStats(getABTestStats());
                  }
                }}
              >
                Daten zurücksetzen
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
