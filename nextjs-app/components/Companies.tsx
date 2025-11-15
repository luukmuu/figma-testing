export default function Companies() {
  const companies = [
    { name: 'Layers', color: 'from-purple-600 to-purple-700' },
    { name: 'Sisyphus', color: 'from-green-500 to-green-600' },
    { name: 'Circooles', color: 'from-blue-500 to-blue-600' },
    { name: 'Catalog', color: 'from-indigo-500 to-indigo-600' },
    { name: 'Quotient', color: 'from-violet-500 to-violet-600' },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-600 mb-8">Join 4,000+ companies already growing</p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {companies.map((company) => (
            <div key={company.name} className="flex items-center gap-3">
              <div className={`w-10 h-10 bg-gradient-to-br ${company.color} rounded-lg`}></div>
              <span className="text-lg font-semibold text-gray-900">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
