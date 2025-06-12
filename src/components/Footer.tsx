import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Building2,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto bg-gray-900 text-white py-8 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Building2 size={20} />
            <h2 className="text-xl font-bold">ETS MG BUILDERS SERVICES</h2>
          </div>
          <p className="text-sm">
            ETS MG BUILDERS SERVICES est une entreprise spécialisée en
            construction (génie civil) et commerce général basée à Lubumbashi
            et opérant partout ailleurs.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm flex items-start gap-2">
            <MapPin size={16} className="mt-1" />
            Av des Plaines no79, Bel Air, Kampemba, Lubumbashi, Haut-Katanga,
            RD Congo
          </p>
          <p className="text-sm flex items-center gap-2 mt-2">
            <Phone size={16} />
            <a href="tel:+243814309360" className="underline">
              +243 814 309 360
            </a>
          </p>
          <p className="text-sm flex items-center gap-2 mt-2">
            <Mail size={16} />
            <span>
              <a
                href="mailto:guellordpabum@gmail.com"
                className="underline block"
              >
                guellordpabum@gmail.com
              </a>
              <a
                href="mailto:etsmgbuildersservices@gmail.com"
                className="underline block"
              >
                etsmgbuildersservices@gmail.com
              </a>
            </span>
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Suivez-nous</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Facebook size={16} />
              <a href="#" className="hover:underline">Facebook</a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={16} />
              <a href="#" className="hover:underline">Instagram</a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin size={16} />
              <a href="#" className="hover:underline">LinkedIn</a>
            </li>
            <li className="flex items-center gap-2">
              <Twitter size={16} />
              <a href="#" className="hover:underline">Twitter</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Google Map */}
      <div className="max-w-7xl mx-auto mt-8">
        <iframe
          title="ETS MG Builders Services Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.124057110789!2d27.469!3d-11.6666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a2d295d0d6c67d3%3A0xf3cbe5b9e58ec6f!2sLubumbashi%2C%20Democratic%20Republic%20of%20the%20Congo!5e0!3m2!1sen!2s!4v1683839847361!5m2!1sen!2s"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-md"
        ></iframe>
      </div>

      <div className="mt-8 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} ETS MG BUILDERS SERVICES. Tous droits
        réservés.
      </div>
    </footer>
  );
};

export default Footer;
