const HowItWorks = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">

      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          How We Deliver Results That Matter
        </h2>

        <p className="text-black mt-3 mb-12">
          A structured three-step approach to skill development
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border">
            <div className="text-blue-600 text-2xl font-bold mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2 text-black">
              Skill Gap Analysis
            </h3>
            <p className="text-black leading-relaxed">
              Assess team skill gaps and identify key development areas.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border">
            <div className="text-blue-600 text-2xl font-bold mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2 text-black">
              Customized Training Plan
            </h3>
            <p className="text-black leading-relaxed">
              Create tailored learning paths aligned with business goals.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border">
            <div className="text-blue-600 text-2xl font-bold mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2 text-black">
              Flexible Program Delivery
            </h3>
            <p className="text-black leading-relaxed">
              Deliver scalable training solutions with measurable outcomes.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default HowItWorks;