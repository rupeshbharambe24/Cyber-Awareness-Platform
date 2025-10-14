import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Fish, UserX, Database, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Incident {
  title: string;
  description: string;
  icon: any;
  howToReport: string[];
  reportLinks: { name: string; url: string }[];
}

const Report = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const incidents: Incident[] = [
    {
      title: "Phishing Attack",
      description: "Fraudulent attempts to obtain sensitive information through fake emails, messages, or websites that appear legitimate.",
      icon: Fish,
      howToReport: [
        "Do not click on any links or download attachments from the suspicious message",
        "Forward the phishing email to your email provider's reporting address",
        "Report to the Anti-Phishing Working Group at reportphishing@apwg.org",
        "File a complaint with the Cybercrime portal",
        "Notify your bank or financial institution if financial information was compromised",
        "Take screenshots of the phishing attempt as evidence",
      ],
      reportLinks: [
        { name: "Cybercrime Portal India", url: "https://cybercrime.gov.in/" },
        { name: "CERT-IN", url: "https://www.cert-in.org.in/" },
      ],
    },
    {
      title: "Identity Theft",
      description: "Unauthorized use of your personal information, such as name, social security number, or credit card details for fraudulent purposes.",
      icon: UserX,
      howToReport: [
        "Contact your bank and credit card companies immediately",
        "Place a fraud alert on your credit reports",
        "File a report with your local police",
        "Report to the Cybercrime portal with all relevant evidence",
        "Change passwords for all online accounts",
        "Monitor your financial statements and credit reports closely",
      ],
      reportLinks: [
        { name: "Cybercrime Portal India", url: "https://cybercrime.gov.in/" },
        { name: "National Cyber Crime Reporting Portal", url: "https://cybercrime.gov.in/Webform/crimelogin.aspx" },
      ],
    },
    {
      title: "Data Breach",
      description: "Unauthorized access to or disclosure of personal, financial, or sensitive information from databases or systems.",
      icon: Database,
      howToReport: [
        "Document what data was potentially compromised",
        "Notify affected individuals if you are responsible for the data",
        "Report to CERT-IN within 6 hours of detection (for organizations)",
        "File a complaint with the Cybercrime portal",
        "Contact legal counsel to understand your obligations",
        "Implement immediate security measures to prevent further breaches",
      ],
      reportLinks: [
        { name: "CERT-IN Incident Reporting", url: "https://www.cert-in.org.in/incidents.jsp" },
        { name: "Cybercrime Portal India", url: "https://cybercrime.gov.in/" },
      ],
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
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
            <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Report a Cyber Incident
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn about common cyber incidents and how to report them to the appropriate authorities
            </p>
          </motion.div>

          {/* Incident Cards */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {incidents.map((incident, index) => (
              <motion.div
                key={incident.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-card">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <incident.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{incident.title}</CardTitle>
                        <CardDescription className="text-base">
                          {incident.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-6">
                    {/* How to Report Toggle */}
                    <Button
                      variant="outline"
                      className="w-full justify-between mb-4"
                      onClick={() => toggleExpand(index)}
                    >
                      <span className="font-semibold">How to Report</span>
                      {expandedIndex === index ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </Button>

                    {/* Expandable Content */}
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4 mb-6"
                      >
                        <ul className="space-y-3">
                          {incident.howToReport.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex gap-3 items-start">
                              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-semibold text-primary">{stepIndex + 1}</span>
                              </div>
                              <span className="text-foreground leading-relaxed">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {/* Report Links */}
                    <div className="space-y-3">
                      <p className="font-semibold text-sm text-muted-foreground">Official Reporting Portals:</p>
                      {incident.reportLinks.map((link) => (
                        <Button
                          key={link.name}
                          variant="default"
                          className="w-full justify-between"
                          asChild
                        >
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.name}
                            <ExternalLink className="h-4 w-4 ml-2" />
                          </a>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Emergency Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Need Immediate Help?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    For urgent cyber incidents, contact the National Cyber Crime Helpline
                  </p>
                  <p className="text-2xl font-bold text-primary">1930</p>
                  <p className="text-sm text-muted-foreground mt-2">Available 24x7</p>
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

export default Report;
