/** @format */

import React from "react";

const Footer = () => {
  return (
    <footer className="info_section text-gray-300 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Address</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <i className="fa fa-map-marker text-blue-500"></i>
              <span>Location</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="fa fa-phone text-blue-500"></i>
              <span>+01 1234567890</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="fa fa-envelope text-blue-500"></i>
              <span>demo@gmail.com</span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="hover:text-blue-400">
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="#"
              className="hover:text-blue-400">
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="#"
              className="hover:text-blue-400">
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              href="#"
              className="hover:text-blue-400">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* About / Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Info</h4>
          <p className="text-sm leading-relaxed">
            Making this the first true generator on the Internet. It uses a
            dictionary of over 200 Latin words, combined with a handful.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400">
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400">
                Why Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400">
                Team
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Subscribe</h4>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter email"
              className="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} All Rights Reserved by{" "}
        <a
          href="https://html.design/"
          className="text-blue-400 hover:underline">
          Free Html Templates
        </a>
      </div>
    </footer>
  );
};

export default Footer;
