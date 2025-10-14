import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Brain, CheckCircle2, XCircle, Loader2, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";

const API_BASE_URL = "http://localhost:8000";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct_answer: number;
}

interface QuizData {
  id: number;
  title: string;
  questions: Question[];
}

const Quiz = () => {
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, user, token } = useAuth();

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/quizzes`);
      setQuizData(response.data);
    } catch (error) {
      console.error("Error fetching quiz:", error);
      toast.error("Failed to load quiz. Using sample questions.");
      // Mock data fallback
      setQuizData({
        id: 1,
        title: "Cybersecurity Basics Quiz",
        questions: [
          {
            id: 1,
            question: "What does HTTPS stand for?",
            options: [
              "HyperText Transfer Protocol Secure",
              "High Transfer Protocol System",
              "HyperText Technical Protocol Security",
              "Home Transfer Protocol Secure"
            ],
            correct_answer: 0,
          },
          {
            id: 2,
            question: "Which of the following is the strongest password?",
            options: [
              "password123",
              "P@ssw0rd!2024#Secure",
              "12345678",
              "qwerty"
            ],
            correct_answer: 1,
          },
          {
            id: 3,
            question: "What is phishing?",
            options: [
              "A type of malware",
              "A fraudulent attempt to obtain sensitive information",
              "A computer virus",
              "A hacking technique"
            ],
            correct_answer: 1,
          },
          {
            id: 4,
            question: "What does 2FA stand for?",
            options: [
              "Two-Factor Authentication",
              "Two-File Access",
              "Transfer File Authentication",
              "Two-Form Authorization"
            ],
            correct_answer: 0,
          },
          {
            id: 5,
            question: "Which of these is NOT safe to do on public Wi-Fi?",
            options: [
              "Browsing news websites",
              "Checking weather",
              "Online banking",
              "Watching videos"
            ],
            correct_answer: 2,
          },
        ],
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (answeredQuestions.includes(currentQuestionIndex)) {
      return; // Already answered
    }
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null || !quizData) return;

    const currentQuestion = quizData.questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correct_answer;

    if (isCorrect) {
      setScore(score + 1);
    }

    setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);

    // Check if this is the last question
    if (currentQuestionIndex === quizData.questions.length - 1) {
      setIsComplete(true);
      submitQuizScore(isCorrect ? score + 1 : score);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    }
  };

  const submitQuizScore = async (finalScore: number) => {
    if (!isAuthenticated || !user || !token) {
      toast.info("Sign in to save your quiz results!");
      return;
    }

    setSubmitting(true);

    try {
      await axios.post(
        `${API_BASE_URL}/submit_quiz`,
        {
          quiz_id: quizData?.id || 1,
          user_id: user.id,
          score: finalScore,
          total_questions: quizData?.questions.length || 0,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Quiz results saved!");
    } catch (error) {
      console.error("Error submitting quiz:", error);
      toast.error("Failed to save quiz results");
    } finally {
      setSubmitting(false);
    }
  };

  const getMotivationalMessage = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage === 100) return "Perfect score! 🎉 You're a cybersecurity expert!";
    if (percentage >= 80) return "Excellent work! 🌟 You really know your stuff!";
    if (percentage >= 60) return "Great job! 💪 You're on the right track!";
    if (percentage >= 40) return "Good effort! 📚 Keep learning and improving!";
    return "Keep going! 🚀 Every quiz makes you stronger!";
  };

  const getScoreColor = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-primary";
    if (percentage >= 40) return "text-yellow-600";
    return "text-orange-600";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-20 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">Loading quiz...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!quizData) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-20 container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Quiz Not Available</h1>
          <Button onClick={() => navigate("/")}>Go Home</Button>
        </div>
      </div>
    );
  }

  if (isComplete) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-20">
          <div className="container mx-auto px-4 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-4xl mb-2">Quiz Complete!</CardTitle>
                  <CardDescription className="text-lg">
                    {getMotivationalMessage(score, quizData.questions.length)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="text-muted-foreground mb-2">Your Score</p>
                    <p className={`text-6xl font-bold ${getScoreColor(score, quizData.questions.length)}`}>
                      {score}/{quizData.questions.length}
                    </p>
                    <p className="text-muted-foreground mt-2">
                      {Math.round((score / quizData.questions.length) * 100)}% Correct
                    </p>
                  </div>

                  {submitting && (
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Saving results...</span>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={() => navigate("/learn")}>
                      Continue Learning
                    </Button>
                    <Button variant="outline" onClick={() => window.location.reload()}>
                      Retake Quiz
                    </Button>
                    {isAuthenticated && (
                      <Button variant="outline" onClick={() => navigate("/dashboard")}>
                        View Dashboard
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const currentQuestion = quizData.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizData.questions.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Brain className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">{quizData.title}</h1>
            <p className="text-muted-foreground">
              Question {currentQuestionIndex + 1} of {quizData.questions.length}
            </p>
          </motion.div>

          {/* Progress Bar */}
          <div className="mb-8">
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{currentQuestion.question}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {currentQuestion.options.map((option, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswerSelect(index)}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                        selectedAnswer === index
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50 hover:bg-muted"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          selectedAnswer === index
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-muted-foreground"
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className="font-medium">{option}</span>
                      </div>
                    </motion.button>
                  ))}

                  <Button
                    onClick={handleNextQuestion}
                    disabled={selectedAnswer === null}
                    className="w-full mt-6"
                    size="lg"
                  >
                    {currentQuestionIndex === quizData.questions.length - 1
                      ? "Finish Quiz"
                      : "Next Question"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Score Display */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-center"
          >
            <p className="text-muted-foreground">
              Current Score: <span className="font-bold text-primary">{score}</span>
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Quiz;
