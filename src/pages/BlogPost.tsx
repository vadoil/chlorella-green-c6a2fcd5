import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import { blogPosts, categoryLabels } from "@/data/blogPosts";

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) return <Navigate to="/blog" replace />;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Chlorella Delo" },
    publisher: {
      "@type": "Organization",
      name: "Chlorella Delo",
      logo: { "@type": "ImageObject", url: "https://chlorella-delo.ru/favicon.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://chlorella-delo.ru/blog/${post.id}` },
    articleSection: categoryLabels[post.category],
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://chlorella-delo.ru/" },
      { "@type": "ListItem", position: 2, name: "Блог", item: "https://chlorella-delo.ru/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://chlorella-delo.ru/blog/${post.id}` },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.id}`}
        type="article"
        publishedTime={post.date}
        jsonLd={[articleLd, breadcrumbLd]}
      />
      <Navbar />
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Все статьи
          </Link>

          <span className="text-xs font-medium text-primary bg-secondary px-2 py-1 rounded-full">
            {categoryLabels[post.category]}
          </span>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10">
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{post.readTime}</span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-foreground/85 leading-relaxed mb-5">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
      <LeadMagnetSection />
      <Footer />
    </div>
  );
};

export default BlogPostPage;
