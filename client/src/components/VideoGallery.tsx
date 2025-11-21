import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { useState } from "react";

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 1,
      title: "我的程式學習旅程",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "5:42",
    },
    {
      id: 2,
      title: "專案開發過程記錄",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "8:15",
    },
    {
      id: 3,
      title: "校園生活 Vlog",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "6:30",
    },
  ];

  return (
    <section id="videos" className="py-24 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center" data-testid="text-videos-title">
          影片分享
        </h2>
        <p className="text-muted-foreground text-center mb-12 font-mono uppercase tracking-wider text-sm" data-testid="text-videos-subtitle">
          Video Gallery
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="overflow-hidden hover-elevate cursor-pointer group"
              onClick={() => {
                console.log(`Playing video: ${video.title}`);
                setSelectedVideo(video.url);
              }}
              data-testid={`card-video-${video.id}`}
            >
              <div className="aspect-video relative overflow-hidden bg-muted">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  data-testid={`img-video-thumbnail-${video.id}`}
                />
                <div className="absolute inset-0 bg-background/50 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                    <Play className="h-8 w-8 text-primary-foreground ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-background/90 px-2 py-1 rounded text-xs font-mono" data-testid={`text-video-duration-${video.id}`}>
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg" data-testid={`text-video-title-${video.id}`}>{video.title}</h3>
              </div>
            </Card>
          ))}
        </div>

        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
            data-testid="modal-video"
          >
            <div
              className="w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={selectedVideo}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                data-testid="iframe-video-player"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
