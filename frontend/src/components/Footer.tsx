import { Shield, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-foreground">Cyber Secure</span>
            </div>
            <p className="text-sm text-muted-foreground">
              An interactive platform to understand digital threats and protect yourself online.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Learn
                </Link>
              </li>
              <li>
                <Link to="/tips" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Tips
                </Link>
              </li>
              <li>
                <Link to="/report" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Report Incident
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                support@cybersecure.com
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                +91 1800-123-4567
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Mumbai, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Cyber Secure. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
