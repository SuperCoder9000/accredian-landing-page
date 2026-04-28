const Trust = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Why Companies Trust Accredian
        </h2>

        <p className="text-gray-700 mb-12">
          Delivering measurable impact through industry-aligned learning solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-bold text-blue-600">95%</h3>
            <p className="text-gray-700 mt-2">
              Completion Rate
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-bold text-blue-600">4.8/5</h3>
            <p className="text-gray-700 mt-2">
              Learner Satisfaction
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-bold text-blue-600">3x</h3>
            <p className="text-gray-700 mt-2">
              Skill Improvement
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Trust;