function FocusAreas() {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-green-800 mb-12">Our Focus Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Education", "Nature", "Leadership"].map((focus, i) => (
              <div key={i} className="p-8 border rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold text-green-700 mb-4">{focus}</h3>
                <p className="text-gray-600">Short description about {focus} goes here.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  export default FocusAreas;
  