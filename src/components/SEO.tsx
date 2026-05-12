import { Helmet } from "react-helmet-async";

const SITE_URL = "https://chlorella-delo.ru";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string;
  noindex?: boolean;
  publishedTime?: string;
  jsonLd?: object | object[];
}

const SEO = ({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  keywords,
  noindex = false,
  publishedTime,
  jsonLd,
}: SEOProps) => {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.length > 60 ? title.slice(0, 57) + "..." : title;
  const fullDescription = description.length > 160 ? description.slice(0, 157) + "..." : description;
  const ldArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1"} />
      <meta name="yandex" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:site_name" content="Chlorella Delo" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />

      {ldArray.map((ld, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(ld)}</script>
      ))}
    </Helmet>
  );
};

export default SEO;
