export default function LoadingSpinner({ text }) {
  return (
    <div className="text-center text-gray-600 py-10 animate-pulse">
      <p>{text}</p>
    </div>
  );
}
