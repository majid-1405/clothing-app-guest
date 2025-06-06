import { Link } from "react-router-dom";
import  reviews  from "./Reviews.json";

const StarRating = ({ count }) => (
  <div className="flex space-x-1 text-yellow-400">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i}>★</span>
    ))}
  </div>
);

export default function ReviewPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-30">
      <h2 className="text-3xl font-bold text-center mb-6">Testimoni & Reviews</h2>

      <div className="space-y-6 mt-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex items-start justify-between border p-4 rounded-lg shadow-sm
             hover:shadow-md hover:bg-gray-50 transition-all"
          >
            <div className="flex items-start space-x-4 max-w-3xl">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{review.name}</p>
                <p className="text-gray-600 mt-1 line-clamp-2">{review.content}</p>
                <Link
                  to={`/Reviewpage/${review.id}`}
                  className="text-indigo-600 mt-2 inline-block text-sm font-medium hover:underline"
                >
                  View & Reply →
                </Link>
              </div>
            </div>
            <div className="text-right">
              <StarRating count={review.rating} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
