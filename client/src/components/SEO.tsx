import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
}

export default function SEO({
  title = "Mi42 - KI-gestützte Marktforschung für die Bauzulieferindustrie",
  description = "7 spezialisierte KI-Agenten für Marktanalyse, Trendforschung und strategische Insights. Automatisierte Briefings mit Rohstoffpreisen und Branchennachrichten. Jetzt kostenlos starten!",
  keywords = "Marktforschung, Bauzulieferindustrie, KI-Agenten, Marktanalyse, Trendforschung, Bau, Zement, Beton, Stahl, Holz, Dämmstoffe",
  ogImage = "/og-image.png",
  ogType = "website",
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="German" />
      <meta name="author" content="Mi42" />
    </Helmet>
  );
}
