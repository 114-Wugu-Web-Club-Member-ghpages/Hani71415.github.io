import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t py-12 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent" data-testid="text-footer-brand">
              TechBlog
            </h3>
            <p className="text-muted-foreground text-sm" data-testid="text-footer-description">
              記錄學習旅程，分享科技創意
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-nav-title">快速連結</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-footer-about">
                關於我
              </a>
              <a href="#photos" className="block text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-footer-photos">
                照片牆
              </a>
              <a href="#diary" className="block text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-footer-diary">
                學習日記
              </a>
              <a href="#portfolio" className="block text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-footer-portfolio">
                作品集
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-connect-title">聯絡方式</h4>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" data-testid="button-footer-github">
                <Github className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="button-footer-linkedin">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="button-footer-email">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p data-testid="text-footer-copyright">
            © 2024 TechBlog. All rights reserved.
          </p>
          <p className="flex items-center gap-1" data-testid="text-footer-made-with">
            Made with <Heart className="h-4 w-4 text-destructive fill-destructive" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
