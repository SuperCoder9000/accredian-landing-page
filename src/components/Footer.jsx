const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-100 py-12 px-6 mt-10">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Accredian</h2>
          <p className="text-gray-600 mt-2">
            Empowering enterprises with future-ready skills.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Contact</h3>
          <p className="text-gray-600">
            Email: enterprise@accredian.com
          </p>
          <p className="text-gray-600 mt-2">
            Gurugram, India
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 mt-10 text-sm">
        © 2026 Accredian. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;