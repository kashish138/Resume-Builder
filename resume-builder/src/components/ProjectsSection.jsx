export default function ProjectsSection({ data }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {data.map((p, i) => (
          <div key={i} className="border p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-blue-600">{p.title}</h3>
            <p className="text-gray-600 mt-2">{p.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {p.tech.map((t) => (
                <span key={t} className="px-2 py-1 text-sm bg-gray-100 rounded-lg">{t}</span>
              ))}
            </div>
            <a href={p.link} target="_blank" className="text-blue-500 text-sm mt-2 inline-block">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
