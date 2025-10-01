export default function Card({ title, description }) {
  return (
    <div className="border rounded shadow p-4 hover:shadow-lg transition">
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="mt-2">{description}</p>
    </div>
  );
}
