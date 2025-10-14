import { Link, useLocation } from "react-router-dom";
import { Shield, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const location = useLocation();
  const { isAuthenticated, user } = useAuth();
  
  const links = [
    { name: "Home", path: "/" },
    { name: "Learn", path: "/learn" },
    { name: "Quiz", path: "/quiz" },
    { name: "Tips", path: "/tips" },
    { name: "Report Incident", path: "/report" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Shield className="h-7 w-7 text-primary group-hover:text-accent transition-colors" />
            <span className="text-xl font-bold text-foreground">Cyber Secure</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          {isAuthenticated ? (
            <Link to="/dashboard">
              <Button variant="default" size="sm" className="hidden md:inline-flex">
                <User className="mr-2 h-4 w-4" />
                {user?.name || "Dashboard"}
              </Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button variant="default" size="sm" className="hidden md:inline-flex">
                Login
              </Button>
            </Link>
          )}

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden">
            Menu
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
