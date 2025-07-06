import { AiFillStar } from "react-icons/ai";
import { useParams, useNavigate } from "react-router-dom";
import reviews from "./Reviews.json";

export default function ReviewDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const review = reviews.find((r) => r.id === parseInt(id));

  if (!review) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops!</h2>
          <p className="text-xl text-gray-600 mb-6">Review tidak ditemukan.</p>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Kembali ke daftar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gray-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gray-50 rounded-full blur-3xl opacity-30"></div>
      
      <div className="max-w-2xl mx-auto relative">
        <button
          onClick={() => navigate(-1)}
          className="group mb-6 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 border border-gray-200"
        >
          <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Kembali
        </button>

        <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-2xl hover:shadow-3xl transition-all duration-300">
          {/* Header Section */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gray-50 rounded-3xl blur-xl opacity-50"></div>
            <div className="relative flex items-center space-x-6">
              <div className="relative">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-20 h-20 rounded-3xl object-cover shadow-2xl ring-4 ring-gray-100 border-2 border-gray-200"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{review.name}</h3>
                <div className="flex items-center space-x-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <AiFillStar key={i} className="w-6 h-6 text-yellow-400 drop-shadow-lg" />
                  ))}
                  <span className="ml-3 text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                    {review.rating}/5
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Section */}
          <div className="mb-8 p-6 bg-gray-50 rounded-3xl border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Produk</p>
                <p className="text-lg font-semibold text-gray-900">{review.purchaseItem}</p>
              </div>
            </div>
          </div>

          {/* Review Content */}
          <div className="relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-gray-300 rounded-full"></div>
            <div className="pl-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Review
              </h4>
              <p className="text-gray-700 leading-relaxed text-lg font-medium">{review.content}</p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-gray-100 rounded-full blur-2xl opacity-50"></div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gray-50 rounded-full blur-xl opacity-30"></div>
        </div>
      </div>
    </div>
  );
}