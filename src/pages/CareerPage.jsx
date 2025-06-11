import React from 'react';

const careers = [
  {
    id: 1,
    position: "Graphic Designer",
    location: "Jakarta, Indonesia",
    type: "Full Time",
    description:
      "Membuat konten visual kreatif untuk promosi produk fashion kami.",
  },
  {
    id: 2,
    position: "Fashion Copywriter",
    location: "Bandung, Indonesia",
    type: "Remote",
    description:
      "Menulis deskripsi produk dan konten promosi yang menarik dan branding-friendly.",
  },
  {
    id: 3,
    position: "Social Media Specialist",
    location: "Yogyakarta, Indonesia",
    type: "Part Time",
    description:
      "Meningkatkan visibilitas merek di media sosial dengan strategi konten.",
  },
];

export default function CareerPage() {
  return (
    <div className="w-full px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Karier di Perusahaan Kami</h1>
        <p className="text-gray-600 mb-12">
          Bergabunglah bersama tim kami dan tumbuh bersama di industri fashion!
        </p>
      </div>

      {/* Card Horizontal */}
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {careers.map((job) => (
          <div
            key={job.id}
            className="flex flex-col md:flex-row items-center justify-between bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition text-left"
          >
            <div className="flex-1 space-y-2">
              <h2 className="text-2xl font-semibold">{job.position}</h2>
              <p className="text-gray-600">{job.location}</p>
              <p className="text-gray-700">{job.description}</p>
              <span className="inline-block mt-2 text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                {job.type}
              </span>
            </div>
            <div className="mt-4 md:mt-0 md:ml-6">
              <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition">
                Lamar Sekarang
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
