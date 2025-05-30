const reviews = [
  {
    name: 'Robert Karmazov',
    avatar: '/images/avatar1.jpg',
    content:
      'One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements. This is particularly beneficial for designers looking to streamline their workflow.',
    date: 'Nov 01, 2023',
    rating: 5,
  },
  {
    name: 'Robert Karmazov',
    avatar: '/images/avatar2.jpg',
    content:
      'Pagedone excels in addressing the demand for responsive design. Its features ensure that designs not only look great on desktop but also seamlessly adapt to various screen sizes, providing a consistent user experience across devices.',
    date: 'Nov 01, 2023',
    rating: 5,
  },
  {
    name: 'Robert Karmazov',
    avatar: '/images/avatar3.jpg',
    content:
      "Collaboration is made seamless with Pagedone's collaboration tools. Whether working within a team or seeking client feedback, the system facilitates effective communication and real-time collaboration, enhancing the overall design process.",
    date: 'Nov 01, 2023',
    rating: 5,
  },
];

const StarRating = ({ count }) => {
  return (
    <div className="flex space-x-1 text-yellow-400">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
};

export default function ReviewList() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-30">
      <h2 className="text-3xl font-bold text-center mb-6">People Love Us</h2>
      <div className="grid grid-cols-3 border-b pb-4 text-sm font-semibold text-gray-700">
        <div>Reviews</div>
        <div className="col-span-2 text-right">Rating</div>
      </div>

      <div className="space-y-8 mt-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex items-start justify-between border p-4 rounded-lg shadow-sm
             transition-shadow transition-bg transition-transform duration-300
             hover:shadow-lg hover:bg-gray-50
             transform hover:scale-105
             cursor-pointer"
          >
            <div className="flex items-start space-x-4 max-w-3xl">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{review.name}</p>
                <p className="text-gray-600 mt-1">{review.content}</p>
                <a href="#" className="text-indigo-600 mt-2 inline-block text-sm font-medium">
                  View & Reply →
                </a>
              </div>
            </div>
            <div className="text-right">
              <StarRating count={review.rating} />
              <p className="text-sm text-gray-500 mt-1">{review.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
