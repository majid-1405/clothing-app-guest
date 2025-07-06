import React, { useState } from 'react';
import { MessageCircle, Star, User, ChevronRight } from 'lucide-react';
import reviews from "./Reviews.json";

const allReviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786",
    content: "Kualitas produk sangat bagus dan pengiriman cepat. Saya sangat puas dengan pelayanan yang diberikan. Recommended!",
    rating: 5
  },
  {
    id: 2,
    name: "Ahmad Rahman",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    content: "Desain bajunya trendy dan ukurannya pas. Customer service juga responsif dalam menjawab pertanyaan. Will order again!",
    rating: 4
  },
  {
    id: 3,
    name: "Maya Sari",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    content: "Harga terjangkau dengan kualitas yang tidak mengecewakan. Packaging juga rapi dan aman. Terima kasih!",
    rating: 5
  },
  {
    id: 4,
    name: "Dewi Anggraini",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    content: "Pengiriman sangat cepat dan customer service-nya sangat ramah!",
    rating: 4
  },
  {
    id: 5,
    name: "Budi Santoso",
    avatar: "https://images.unsplash.com/photo-1502767089025-6572583495b4",
    content: "Saya suka bahannya, adem dan nyaman dipakai sehari-hari.",
    rating: 5
  },
  {
    id: 6,
    name: "Siti Nurhaliza",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    content: "Harga bersaing dan kualitasnya sebanding. Good job!",
    rating: 4
  },
];

const StarRating = ({ count }) => (
  <div className="flex space-x-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < count ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ))}
  </div>
);

export default function ReviewPage() {
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleReviews = reviews.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-6">
            <MessageCircle className="w-8 h-8 text-gray-700" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-integral">Testimoni & Reviews</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Lihat apa yang pelanggan kami katakan tentang produk dan layanan kami
          </p>
          <div className="mt-6 flex justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>4.8/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-gray-400" />
              <span>200+ Reviews</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="space-y-6">
          {visibleReviews.map((review, index) => (
            <div
              key={review.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:scale-[1.02]"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="relative">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-gray-200 group-hover:border-gray-300 transition-colors duration-300"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                          {review.name}
                        </h3>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          Verified Purchase
                        </span>
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                        "{review.content}"
                      </p>

                      <a
                        href={`/Reviewpage/${review.id}`}
                        className="inline-flex items-center space-x-2 text-gray-700 hover:text-black font-medium text-sm transition-colors duration-200 group"
                      >
                        <span>View & Reply</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </a>
                    </div>
                  </div>

                  <div className="text-right ml-6">
                    <StarRating count={review.rating} />
                    <div className="mt-2 text-xs text-gray-500">{review.rating}.0/5</div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < allReviews.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount(visibleCount + 3)}
              className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Load More Reviews
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
