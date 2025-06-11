import React from 'react';

const photos = [
  {
    id: 1,
    title: "Lookbook Summer 2025",
    url: "https://source.unsplash.com/600x400/?fashion,model",
  },
  {
    id: 2,
    title: "Studio Shoot Collection",
    url: "https://source.unsplash.com/600x400/?fashion,photoshoot",
  },
  {
    id: 3,
    title: "Outdoor Street Style",
    url: "https://source.unsplash.com/600x400/?street,fashion",
  },
];

const videos = [
  {
    id: 1,
    title: "Behind The Scenes - Summer Collection",
    url: "https://www.youtube.com/embed/ysz5S6PUM-U",
  },
  {
    id: 2,
    title: "Fashion Campaign 2025",
    url: "https://www.youtube.com/embed/oUFJJNQGwhk",
  },
];

export default function MediaPage() {
  return (
    <div className="w-full px-6 py-12 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Katalog Media</h1>
        <p className="text-gray-600">Jelajahi galeri video & foto dari koleksi dan aktivitas kami.</p>
      </div>

      {/* Foto Galeri */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-left">Galeri Foto</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="rounded-xl overflow-hidden shadow-md">
              <img src={photo.url} alt={photo.title} className="w-full h-64 object-cover" />
              <div className="p-4 bg-gray-50">
                <p className="text-lg font-medium">{photo.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Galeri */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-left">Galeri Video</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="rounded-xl overflow-hidden shadow-md">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 bg-gray-50">
                <p className="text-lg font-medium">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
