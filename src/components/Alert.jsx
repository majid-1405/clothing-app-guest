export default function Alert({ p }) {
    return (
      <div className="mt-4 p-3 bg-red-100 border-1-4 border-red-500 text-red-700">
        <p className="font-semibold">{p}</p>
      </div>
    );
}