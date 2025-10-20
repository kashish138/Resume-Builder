export default function ProfileSection({ data }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-600">{data.name}</h1>
      <p className="text-gray-600 mt-2">{data.title}</p>
      <p className="mt-4">{data.summary}</p>
    </div>
  );
}

