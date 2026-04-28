const CTA = () => {
  return (
    <section id="cta" className="py-16 px-6">
      
      <div className="max-w-6xl mx-auto bg-blue-600 text-white rounded-xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Want to Learn More About Our Training Solutions?
          </h2>
          <p className="mt-2 text-blue-100">
            Get expert guidance for your team’s success.
          </p>
        </div>

        {/* Right Button */}
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 hover:shadow-lg transition duration-300">
          Contact Us
        </button>

      </div>

    </section>
  );
};

export default CTA;