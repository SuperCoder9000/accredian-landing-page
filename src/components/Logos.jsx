const Logos = () => {
  return (
    <section id="logos" className="py-20 px-6 bg-gray-50">
      
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Our Proven Partnerships
        </h2>

        <p className="text-gray-600 mb-12">
          Trusted by leading organizations across industries
        </p>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          
          {/* Logo Card */}
          <div className="bg-white h-28 flex items-center justify-center rounded-lg shadow-sm hover:shadow-md transition">
            <img src="/logos/reliance.png" alt="Reliance" className="h-16 md:h-20 w-full object-contain" />
          </div>

          <div className="bg-white h-28 flex items-center justify-center rounded-lg shadow-sm hover:shadow-md transition">
            <img src="/logos/infosys.png" alt="Infosys" className="h-16 md:h-20 w-full object-contain"/>
          </div>

          <div className="bg-white h-28 flex items-center justify-center rounded-lg shadow-sm hover:shadow-md transition">
            <img src="/logos/ibm.png" alt="IBM" className="h-16 md:h-20 w-full object-contain" />
          </div>

          <div className="bg-white h-28 flex items-center justify-center rounded-lg shadow-sm hover:shadow-md transition">
            <img src="/logos/meta.png" alt="Meta" className="h-16 md:h-20 w-full object-contain" />
          </div>

          <div className="bg-white h-28 flex items-center justify-center rounded-lg shadow-sm hover:shadow-md transition">
            <img src="/logos/amazon.png" alt="Amazon" className="h-16 md:h-20 w-full object-contain" />
          </div>

        </div>

      </div>

    </section>
  );
};

export default Logos;