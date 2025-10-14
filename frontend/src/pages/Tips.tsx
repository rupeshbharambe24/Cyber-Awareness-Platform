import { motion } from "framer-motion";
import { Key, Globe, Share2, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface TipSection {
  title: string;
  icon: any;
  tips: string[];
}

const Tips = () => {
  const tipSections: TipSection[] = [
    {
      title: "Password Hygiene",
      icon: Key,
      tips: [
        "Use a unique password for each account - never reuse passwords",
        "Create passwords with at least 12 characters including uppercase, lowercase, numbers, and symbols",
        "Consider using a password manager to generate and store complex passwords securely",
        "Enable two-factor authentication (2FA) wherever possible",
        "Change passwords immediately if you suspect a breach",
        "Avoid using personal information like birthdays or names in passwords",
      ],
    },
    {
      title: "Safe Browsing",
      icon: Globe,
      tips: [
        "Always check for HTTPS in the URL before entering sensitive information",
        "Keep your browser and extensions updated to the latest versions",
        "Be cautious of pop-ups and never download suspicious files",
        "Use reputable antivirus software and keep it updated",
        "Clear your browsing history and cookies regularly",
        "Avoid using public Wi-Fi for sensitive transactions - use a VPN if necessary",
      ],
    },
    {
      title: "Social Media Safety",
      icon: Share2,
      tips: [
        "Review and adjust your privacy settings regularly on all platforms",
        "Be selective about what personal information you share publicly",
        "Think before you post - information online can be permanent",
        "Verify friend requests before accepting - beware of fake profiles",
        "Be cautious of links and attachments shared by others",
        "Report suspicious accounts or content to the platform",
      ],
    },
    {
      title: "Device Protection",
      icon: Smartphone,
      tips: [
        "Keep all devices updated with the latest security patches",
        "Install apps only from official app stores",
        "Use device encryption and screen locks",
        "Enable remote wipe capabilities in case of theft",
        "Regularly backup important data to secure cloud storage",
        "Be careful when connecting to public USB charging stations",
      ],
    },
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Cybersecurity Tips
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Essential practices to keep you safe in the digital world
            </p>
          </motion.div>

          {/* Tips Sections */}
          <div className="space-y-8">
            {tipSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <section.icon className="h-6 w-6 text-primary" />
                      </div>
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-4">
                      {section.tips.map((tip, tipIndex) => (
                        <motion.li
                          key={tipIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (tipIndex * 0.05) }}
                          className="flex gap-3 items-start"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-foreground leading-relaxed">{tip}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tips;
