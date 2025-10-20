export default function SkillsSection({ data }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {data.map((s, i) => (
          <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
