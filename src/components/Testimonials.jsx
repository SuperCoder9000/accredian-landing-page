"use client";

const testimonials = [
  {
    company: "ADP",
    text: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication.",
  },
  {
    company: "Bayer",
    text: "Accredian’s commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
          Testimonials from <span className="text-blue-600">Our Partners</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                {item.company}
              </h3>

              <p className="text-black leading-relaxed">
                "{item.text}"
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;