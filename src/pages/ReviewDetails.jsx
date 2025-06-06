import { AiFillStar } from "react-icons/ai"; 
import { useParams, useNavigate } from "react-router-dom";
import  reviews  from "./Reviews.json";



export default function ReviewDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const review = reviews.find((r) => r.id === parseInt(id));

  if (!review) {
    return (
      <div className="text-center mt-20">
        <p className="text-xl text-gray-700">Review tidak ditemukan.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 text-blue-600 hover:underline"
        >
          Kembali ke daftar
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:underline text-sm"
      >
        ← Kembali
      </button>
      <div className="bg-white shadow-md rounded-xl p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold">{review.name}</h3>
            <div className="flex text-yellow-400">
              {Array.from({ length: review.rating }).map((_, i) => (
                <AiFillStar key={i} className="w-4 h-4 fill-yellow-400" />
                
              ))}
            </div>
          </div>
        </div>
        <p className="mb-2 text-gray-800">
          <span className="font-medium">Produk:</span> {review.purchaseItem}
        </p>
        <p className="text-gray-700">{review.content}</p>
      </div>
    </div>
  );
}
