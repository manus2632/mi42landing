import { useEffect, useState } from "react";

export type ABVariant = "frustration" | "readiness";

interface ABTestEvent {
  variant: ABVariant;
  event: "impression" | "cta_click" | "register_click" | "quiz_complete";
  timestamp: number;
}

export function useABTest() {
  const [variant, setVariant] = useState<ABVariant>("frustration");

  useEffect(() => {
    // Hole oder erstelle Variante
    let storedVariant = localStorage.getItem("ab_variant") as ABVariant | null;
    
    if (!storedVariant) {
      storedVariant = Math.random() > 0.5 ? "frustration" : "readiness";
      localStorage.setItem("ab_variant", storedVariant);
    }
    
    setVariant(storedVariant);

    // Tracke Impression
    trackEvent(storedVariant, "impression");
  }, []);

  return { variant, trackEvent };
}

export function trackEvent(variant: ABVariant, event: ABTestEvent["event"]) {
  const events: ABTestEvent[] = JSON.parse(localStorage.getItem("ab_events") || "[]");
  
  events.push({
    variant,
    event,
    timestamp: Date.now(),
  });
  
  localStorage.setItem("ab_events", JSON.stringify(events));
}

export function getABTestStats() {
  const events: ABTestEvent[] = JSON.parse(localStorage.getItem("ab_events") || "[]");
  
  const stats = {
    frustration: {
      impressions: 0,
      cta_clicks: 0,
      register_clicks: 0,
      quiz_completes: 0,
    },
    readiness: {
      impressions: 0,
      cta_clicks: 0,
      register_clicks: 0,
      quiz_completes: 0,
    },
  };

  events.forEach((e) => {
    if (e.event === "impression") stats[e.variant].impressions++;
    if (e.event === "cta_click") stats[e.variant].cta_clicks++;
    if (e.event === "register_click") stats[e.variant].register_clicks++;
    if (e.event === "quiz_complete") stats[e.variant].quiz_completes++;
  });

  return stats;
}
