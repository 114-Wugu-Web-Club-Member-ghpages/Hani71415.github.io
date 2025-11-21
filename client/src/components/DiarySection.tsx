import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

export default function DiarySection() {
  const diaryEntries = [
    {
      id: 1,
      title: "開始我的前端學習之旅",
      excerpt: "今天開始學習 React，發現組件化開發真的很有趣。雖然一開始有些概念不太理解，但慢慢摸索後越來越上手...",
      date: "2024-11-05",
      readTime: "3 分鐘",
      tags: ["學習", "React", "前端"],
    },
    {
      id: 2,
      title: "參加黑客松的心得",
      excerpt: "週末參加了學校舉辦的黑客松活動，與團隊成員合作開發了一個智慧校園應用。雖然時間緊迫，但大家都很投入...",
      date: "2024-11-01",
      readTime: "5 分鐘",
      tags: ["活動", "團隊", "開發"],
    },
    {
      id: 3,
      title: "Tailwind CSS 使用心得",
      excerpt: "最近開始使用 Tailwind CSS，utility-first 的開發方式讓我的開發速度提升了不少。特別是 dark mode 的支援非常方便...",
      date: "2024-10-28",
      readTime: "4 分鐘",
      tags: ["CSS", "設計", "工具"],
    },
  ];

  return (
    <section id="diary" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center" data-testid="text-diary-title">
          學習日記
        </h2>
        <p className="text-muted-foreground text-center mb-12 font-mono uppercase tracking-wider text-sm" data-testid="text-diary-subtitle">
          Learning Diary
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {diaryEntries.map((entry) => (
            <Card key={entry.id} className="hover-elevate cursor-pointer" data-testid={`card-diary-${entry.id}`}>
              <CardHeader className="gap-2">
                <h3 className="text-2xl font-bold" data-testid={`text-diary-title-${entry.id}`}>{entry.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1 font-mono" data-testid={`text-diary-date-${entry.id}`}>
                    <Calendar className="h-4 w-4" />
                    {entry.date}
                  </span>
                  <span className="flex items-center gap-1 font-mono" data-testid={`text-diary-readtime-${entry.id}`}>
                    <Clock className="h-4 w-4" />
                    {entry.readTime}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-diary-excerpt-${entry.id}`}>
                  {entry.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs" data-testid={`badge-diary-tag-${entry.id}-${index}`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
