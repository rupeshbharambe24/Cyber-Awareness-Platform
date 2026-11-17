import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { User, Trophy, LogOut, Loader2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000";

interface QuizScore {
  id: number;
  quiz_id: number;
  score: number;
  total_questions: number;
  date: string;
  quiz_title?: string;
}

const Dashboard = () => {
  const [scores, setScores] = useState<QuizScore[]>([]);
  const [loading, setLoading] = useState(true);
  const { user, logout, isAuthenticated, token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    fetchScores();
  }, [isAuthenticated, navigate]);

  const fetchScores = async () => {
    if (!user || !token) return;

    try {
      const response = await axios.get(`${API_BASE_URL}/scores/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setScores(response.data);
    } catch (error) {
      console.error("Error fetching scores:", error);
      toast.error("Failed to load quiz scores");
      // Mock data fallback
      setScores([
        {
          id: 1,
          quiz_id: 1,
          score: 4,
          total_questions: 5,
          date: new Date().toISOString(),
          quiz_title: "Cybersecurity Basics Quiz",
        },
        {
          id: 2,
          quiz_id: 1,
          score: 5,
          total_questions: 5,
          date: new Date(Date.now() - 86400000).toISOString(),
          quiz_title: "Cybersecurity Basics Quiz",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/");
  };

  const getScorePercentage = (score: number, total: number) => {
    return Math.round((score / total) * 100);
  };

  const getScoreBadgeColor = (percentage: number) => {
    if (percentage >= 80) return "bg-green-100 text-green-700 border-green-200";
    if (percentage >= 60) return "bg-blue-100 text-blue-700 border-blue-200";
    if (percentage >= 40) return "bg-yellow-100 text-yellow-700 border-yellow-200";
    return "bg-orange-100 text-orange-700 border-orange-200";
  };

  const calculateAverageScore = () => {
    if (scores.length === 0) return 0;
    const total = scores.reduce((sum, score) => sum + getScorePercentage(score.score, score.total_questions), 0);
    return Math.round(total / scores.length);
  };

  if (!isAuthenticated || !user) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold text-foreground">
                        Welcome back, {user.name}!
                      </h1>
                      <p className="text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <Button variant="destructive" onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid md:grid-cols-2 gap-6 mb-8"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Total Quizzes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-foreground">{scores.length}</p>
                <p className="text-sm text-muted-foreground mt-1">Completed</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Average Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-foreground">{calculateAverageScore()}%</p>
                <p className="text-sm text-muted-foreground mt-1">Overall Performance</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quiz Scores */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Quiz History</CardTitle>
                <CardDescription>Your past quiz results and scores</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="text-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">Loading scores...</p>
                  </div>
                ) : scores.length === 0 ? (
                  <div className="text-center py-8">
                    <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">No quiz results yet</p>
                    <Button onClick={() => navigate("/quiz")}>Take Your First Quiz</Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {scores.map((score) => {
                      const percentage = getScorePercentage(score.score, score.total_questions);
                      return (
                        <div
                          key={score.id}
                          className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground mb-1">
                              {score.quiz_title || `Quiz #${score.quiz_id}`}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {new Date(score.date).toLocaleDateString()} at{" "}
                              {new Date(score.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <p className="text-2xl font-bold text-foreground">
                                {score.score}/{score.total_questions}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {percentage}%
                              </p>
                            </div>
                            <div
                              className={`px-3 py-1 rounded-full text-sm font-medium border ${getScoreBadgeColor(percentage)}`}
                            >
                              {percentage >= 80 ? "Excellent" : percentage >= 60 ? "Good" : percentage >= 40 ? "Fair" : "Needs Work"}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button onClick={() => navigate("/quiz")} size="lg">
              Take Another Quiz
            </Button>
            <Button onClick={() => navigate("/learn")} variant="outline" size="lg">
              Continue Learning
            </Button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
