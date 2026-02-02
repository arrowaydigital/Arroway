// @ts-ignore
import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#074edb] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src="public/images/footer_logo.png" alt="Arroway Footer Logo" width={150} height={40} className="mb-4 h-10 object-contain" />
            <p className="text-blue-100 text-sm">
              Data-driven digital marketing solutions for growing businesses.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  PPC Advertising
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  SEO & Content
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Social Media
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Analytics
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>info@arroway.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-sm text-blue-100">
          <p>&copy; 2026 Arroway. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}