import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts, categoryLabels } from "@/data/blogPosts";

const BlogPreviewSection = () => {
  const featured = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-2 block">
            Блог
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Полезные материалы
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Статьи для фермеров, инвесторов и экологов — конкретные цифры, кейсы и практические руководства.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {featured.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group rounded-xl border border-border bg-card p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{post.image}</div>
              <span className="text-xs font-medium text-primary bg-secondary px-2 py-1 rounded-full">
                {categoryLabels[post.category]}
              </span>
              <h3 className="font-display font-semibold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" className="group">
            <Link to="/blog">
              Все статьи
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
