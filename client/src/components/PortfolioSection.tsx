import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@assets/generated_images/Portfolio_project_screenshot_1_aa5c9f69.png";
import project2 from "@assets/generated_images/Portfolio_project_screenshot_2_7cb50fd4.png";

export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "智慧任務管理系統",
      description: "一個基於 React 和 Node.js 開發的任務管理應用，支援即時協作、智慧提醒和數據分析功能。",
      image: project1,
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 2,
      title: "個人作品集網站",
      description: "使用 Next.js 和 Tailwind CSS 打造的響應式作品集網站，具有深色模式和流暢動畫效果。",
      image: project2,
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 3,
      title: "校園活動平台",
      description: "整合活動發布、報名管理和即時通知的校園活動平台，提升學生參與度和資訊流通效率。",
      image: project1,
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      demoUrl: "#",
      codeUrl: "#",
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center" data-testid="text-portfolio-title">
          作品集
        </h2>
        <p className="text-muted-foreground text-center mb-12 font-mono uppercase tracking-wider text-sm" data-testid="text-portfolio-subtitle">
          Portfolio
        </p>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden hover-elevate"
              data-testid={`card-project-${project.id}`}
            >
              <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`aspect-video md:aspect-auto ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    data-testid={`img-project-${project.id}`}
                  />
                </div>
                <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="text-2xl font-bold mb-4" data-testid={`text-project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6" data-testid={`text-project-description-${project.id}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" data-testid={`badge-tech-${project.id}-${techIndex}`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button className="gap-2" data-testid={`button-demo-${project.id}`}>
                      <ExternalLink className="h-4 w-4" />
                      查看 Demo
                    </Button>
                    <Button variant="outline" className="gap-2" data-testid={`button-code-${project.id}`}>
                      <Github className="h-4 w-4" />
                      原始碼
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
