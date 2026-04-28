const Hero = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-r from-blue-50 to-white">
      
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
        Upskill Your Workforce <br /> with Accredian
      </h1>

      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
        Empower your employees with industry-relevant programs and drive business
        growth with top-tier learning solutions.
      </p>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition duration-300">
        Get Started
      </button>

    </section>
  );
};

export default Hero;