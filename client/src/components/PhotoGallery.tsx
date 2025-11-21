import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import workspacePhoto from "@assets/generated_images/Workspace_photo_for_gallery_7fc56b8e.png";
import campusPhoto from "@assets/generated_images/Campus_life_photo_ade94f0b.png";

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["全部", "校園", "工作", "生活"];
  const categoryIds = ["all", "campus", "workspace", "life"];

  const photos = [
    { id: 1, src: workspacePhoto, title: "我的工作空間", category: "workspace", date: "2024-01" },
    { id: 2, src: campusPhoto, title: "校園時光", category: "campus", date: "2024-02" },
    { id: 3, src: workspacePhoto, title: "程式學習", category: "workspace", date: "2024-03" },
    { id: 4, src: campusPhoto, title: "團隊合作", category: "campus", date: "2024-03" },
  ];

  const filteredPhotos = selectedCategory === "all" 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <section id="photos" className="py-24 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center" data-testid="text-photos-title">
          照片牆
        </h2>
        <p className="text-muted-foreground text-center mb-12 font-mono uppercase tracking-wider text-sm" data-testid="text-photos-subtitle">
          Photo Gallery
        </p>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category, index) => (
            <Button
              key={categoryIds[index]}
              variant={selectedCategory === categoryIds[index] ? "default" : "outline"}
              onClick={() => setSelectedCategory(categoryIds[index])}
              data-testid={`button-category-${categoryIds[index]}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPhotos.map((photo) => (
            <Card
              key={photo.id}
              className="overflow-hidden hover-elevate cursor-pointer group"
              data-testid={`card-photo-${photo.id}`}
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  data-testid={`img-photo-${photo.id}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-semibold text-sm" data-testid={`text-photo-title-${photo.id}`}>{photo.title}</p>
                    <p className="text-xs text-muted-foreground font-mono" data-testid={`text-photo-date-${photo.id}`}>{photo.date}</p>
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
