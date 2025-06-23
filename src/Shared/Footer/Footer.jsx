import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="text-white">
      <div className="mx-auto flex justify-between flex-col md:flex-row">
        {/* Contact Section */}
        <div className="text-center md:text-left bg-[#1F2937] flex-1 py-5 md:py-16 md:pl-44">
          <h2 className="text-xl font-semibold mb-3">CONTACT US</h2>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p className="mt-1">+88 123456789</p>
          <p className="mt-1">Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>

        {/* Social Section */}
        <div className="text-center md:text-right bg-[#111827] flex-1 py-5 md:py-16 md:pr-44">
          <h2 className="text-xl font-semibold mb-3">Follow US</h2>
          <p className="mb-3">Join us on social media</p>
          <div className="flex justify-center md:justify-end gap-4 text-xl">
            <a href="#" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-center text-sm py-4 w-full">
        <p className="text-white">
          Copyright © CulinaryCloud. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
