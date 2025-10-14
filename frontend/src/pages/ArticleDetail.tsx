import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { ArrowLeft, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

interface ArticleDetail {
  id: number;
  title: string;
  content: string;
  author?: string;
  date?: string;
}

const API_BASE_URL = "http://localhost:8000";

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [article, setArticle] = useState<ArticleDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticle();
  }, [id]);

  const fetchArticle = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/articles/${id}`);
      setArticle(response.data);
    } catch (error) {
      console.error("Error fetching article:", error);
      toast({
        title: "Error",
        description: "Failed to load article. Using mock data instead.",
        variant: "destructive",
      });
      // Mock data fallback
      const mockArticles: Record<string, ArticleDetail> = {
        "1": {
          id: 1,
          title: "Understanding Phishing Attacks",
          content: `Phishing is one of the most common cyber threats today. It involves fraudulent attempts to obtain sensitive information such as usernames, passwords, and credit card details by disguising as a trustworthy entity in electronic communication.

**Common Types of Phishing:**

1. **Email Phishing** - Fake emails that appear to be from legitimate companies
2. **Spear Phishing** - Targeted attacks aimed at specific individuals or companies
3. **Whaling** - Attacks that target high-profile executives
4. **Smishing** - Phishing conducted via SMS messages
5. **Vishing** - Voice phishing conducted over phone calls

**How to Identify Phishing Attempts:**

- Check the sender's email address carefully
- Look for spelling and grammar mistakes
- Be suspicious of urgent or threatening language
- Hover over links before clicking to see the actual URL
- Verify requests through official channels
- Be cautious of unexpected attachments

**Protection Strategies:**

- Enable multi-factor authentication on all accounts
- Use email filters and spam protection
- Keep software and browsers updated
- Verify requests through alternative communication channels
- Report suspected phishing attempts to the appropriate authorities
- Educate yourself and others about the latest phishing tactics

Remember: Legitimate companies will never ask for sensitive information via email. When in doubt, contact the company directly using official contact information.`,
          author: "Security Team",
          date: "2024-01-15",
        },
      };
      setArticle(mockArticles[id || "1"] || mockArticles["1"]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-20 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto" />
            <p className="text-muted-foreground mt-4">Loading article...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-20 container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
          <Button onClick={() => navigate("/learn")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button variant="ghost" onClick={() => navigate("/learn")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Button>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardContent className="pt-8">
                <h1 className="text-4xl font-bold text-foreground mb-6">
                  {article.title}
                </h1>
                
                {/* Meta Information */}
                <div className="flex flex-wrap gap-4 mb-8 text-sm text-muted-foreground">
                  {article.author && (
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {article.author}
                    </div>
                  )}
                  {article.date && (
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                  )}
                </div>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  {article.content.split('\n').map((paragraph, index) => {
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return (
                        <h3 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">
                          {paragraph.replace(/\*\*/g, '')}
                        </h3>
                      );
                    }
                    if (paragraph.trim().startsWith('-')) {
                      return (
                        <li key={index} className="text-foreground mb-2 ml-6">
                          {paragraph.replace(/^-\s*/, '')}
                        </li>
                      );
                    }
                    if (paragraph.match(/^\d+\./)) {
                      return (
                        <li key={index} className="text-foreground mb-2 ml-6 list-decimal">
                          {paragraph.replace(/^\d+\.\s*/, '')}
                        </li>
                      );
                    }
                    if (paragraph.trim()) {
                      return (
                        <p key={index} className="text-foreground mb-4 leading-relaxed">
                          {paragraph}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArticleDetail;
