import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Key, UserX } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InfoCard from "@/components/InfoCard";
import heroImage from "@/assets/hero-cyber.jpg";

const Home = () => {
  const infoCards = [
    {
      title: "Phishing Attacks",
      description: "Learn to identify and avoid phishing emails, messages, and fake websites that try to steal your personal information.",
      icon: Shield,
    },
    {
      title: "Identity Theft",
      description: "Understand how identity theft happens and discover practical steps to protect your personal data from cybercriminals.",
      icon: UserX,
    },
    {
      title: "Safe Passwords",
      description: "Master the art of creating strong, unique passwords and learn about password managers to keep your accounts secure.",
      icon: Key,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/90 to-background z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Cyber Secure
              <span className="block text-primary mt-2">Learn to Stay Safe Online</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              An interactive platform to understand digital threats and protect yourself in the ever-evolving cyber landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/learn">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Learning
                </Button>
              </Link>
              <Link to="/quiz">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Take a Quiz
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What You'll Learn
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore essential cybersecurity topics to protect yourself and your digital life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {infoCards.map((card, index) => (
              <InfoCard
                key={card.title}
                title={card.title}
                description={card.description}
                icon={card.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
