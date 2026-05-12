import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts, categoryLabels, type BlogPost } from "@/data/blogPosts";

const categories = ["all", "farmers", "investors", "ecology"] as const;
const categoryNames: Record<string, string> = {
  all: "Все",
  farmers: "Для фермеров",
  investors: "Для инвесторов",
  ecology: "Экология",
};

const Blog = () => {
  const [filter, setFilter] = useState<string>("all");
  const filtered = filter === "all" ? blogPosts : blogPosts.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Блог о хлорелле — статьи об АПК, инвестициях и экологии"
        description="Аналитика, кейсы и руководства о производстве живой хлореллы: для фермеров, инвесторов и экологии. Реальные цифры и опыт франчайзи."
        path="/blog"
        keywords="блог хлорелла, статьи о хлорелле, кейсы хлорелла, инвестиции в хлореллу, биотехнологии новости"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Блог Chlorella Delo",
          "url": "https://chlorella-delo.ru/blog",
          "description": "Статьи о производстве живой хлореллы, франшизе и применении в АПК",
        }}
      />
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> На главную
          </Link>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Блог Chlorella Green
          </h1>
          <p className="text-muted-foreground max-w-2xl mb-8">
            Аналитика рынка, кейсы клиентов и практические руководства по бизнесу на микроводорослях.
          </p>

          <div className="flex gap-2 mb-10 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${
                  filter === c
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {categoryNames[c]}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group rounded-xl border border-border bg-card p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{post.image}</div>
                <span className="text-xs font-medium text-primary bg-secondary px-2 py-1 rounded-full">
                  {categoryLabels[post.category]}
                </span>
                <h2 className="font-display font-semibold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                  <span>{new Date(post.date).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
