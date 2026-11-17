import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BookOpen, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

interface Article {
  id: number;
  title: string;
  description: string;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000";

const Learn = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/articles`);
      setArticles(response.data);
    } catch (error) {
      console.error("Error fetching articles:", error);
      toast({
        title: "Error",
        description: "Failed to load articles. Using mock data instead.",
        variant: "destructive",
      });
      // Mock data fallback
      setArticles([
        {
          id: 1,
          title: "Understanding Phishing Attacks",
          description: "Learn how to identify and protect yourself from phishing attempts that try to steal your personal information.",
        },
        {
          id: 2,
          title: "Creating Strong Passwords",
          description: "Discover best practices for creating secure passwords and managing them effectively across all your accounts.",
        },
        {
          id: 3,
          title: "Two-Factor Authentication Guide",
          description: "Learn why 2FA is essential and how to set it up on your most important accounts for added security.",
        },
        {
          id: 4,
          title: "Safe Online Shopping",
          description: "Tips for shopping online safely, identifying secure websites, and protecting your payment information.",
        },
        {
          id: 5,
          title: "Social Media Privacy",
          description: "Best practices for protecting your privacy on social media platforms and avoiding common security pitfalls.",
        },
        {
          id: 6,
          title: "Ransomware Protection",
          description: "Understand what ransomware is and learn how to protect your devices and data from this growing threat.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleReadMore = (articleId: number) => {
    navigate(`/articles/${articleId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Learn About Cybersecurity
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of articles to stay informed and protected in the digital world
            </p>
          </motion.div>

          {/* Articles Grid */}
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto" />
              <p className="text-muted-foreground mt-4">Loading articles...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all cursor-pointer group">
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {article.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        variant="ghost"
                        className="group/button"
                        onClick={() => handleReadMore(article.id)}
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Learn;
