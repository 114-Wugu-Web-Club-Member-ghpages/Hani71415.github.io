import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "關於我", id: "about" },
    { label: "照片", id: "photos" },
    { label: "日記", id: "diary" },
    { label: "影片", id: "videos" },
    { label: "作品", id: "portfolio" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent"
            data-testid="button-logo"
          >
            TechBlog
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                data-testid={`button-nav-${item.id}`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button size="icon" variant="ghost" data-testid="button-github">
              <Github className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" data-testid="button-linkedin">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" data-testid="button-email">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-menu-toggle"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className="w-full justify-start"
                onClick={() => scrollToSection(item.id)}
                data-testid={`button-mobile-nav-${item.id}`}
              >
                {item.label}
              </Button>
            ))}
            <div className="flex gap-2 pt-2">
              <Button size="icon" variant="ghost" data-testid="button-mobile-github">
                <Github className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="button-mobile-linkedin">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="button-mobile-email">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
