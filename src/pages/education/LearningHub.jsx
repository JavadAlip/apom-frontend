export default function LearningHub() {
  const categories = ["All", "Farming", "Storage", "Market", "Finance"];
  const lessons = [
    {
      id: 1,
      title: "Modern Irrigation Techniques",
      category: "Farming",
      desc: "Learn efficient methods to save water and increase yield.",
    },
    {
      id: 2,
      title: "Proper Grain Storage",
      category: "Storage",
      desc: "Keep your grains fresh longer with the right storage methods.",
    },
    {
      id: 3,
      title: "Understanding Market Prices",
      category: "Market",
      desc: "Tips to analyze crop pricing trends and maximize profits.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-4 space-y-6">
      <h1 className="text-2xl font-bold text-green-800">Farmer Learning Hub</h1>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            className="bg-white border border-gray-200 rounded px-3 py-1 text-sm hover:bg-green-100"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Lessons */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {lessons.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded shadow-sm hover:shadow-md transition"
          >
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
              {item.category}
            </span>
            <h2 className="font-semibold text-gray-800 mt-2">{item.title}</h2>
            <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
            <button className="mt-3 bg-green-700 text-white w-full rounded py-1 hover:bg-green-800">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
