"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Sun, Clock, ExternalLink } from "lucide-react";
import Link from "next/link";
import { tinaField } from "tinacms/dist/react";

interface FooterProps {
  data?: {
    contatti?: {
      address?: string;
      phone?: string;
      email?: string;
      workingHours?: string;
    };
    hero?: {
      name?: string;
      surname?: string;
      title?: string;
      subtitle?: string;
      heroIcon?: string;
    };
  };
}

export default function Footer({ data }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const contactInfo = data?.contatti || {};
  const phoneNumber = contactInfo.phone?.replace(/[^\d+]/g, "") || "";

  const quickLinks = [
    { name: "Chi Sono", href: "#chi-sono" },
    { name: "Servizi", href: "#servizi" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contatti", href: "#contatti" },
    { name: "Blog", href: "/blog" }
  ];

  const socialLinks = [
    { name: "Facebook", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "#" }
  ];

  const services = [
    "Progettazione Fotovoltaico",
    "Installazione Pannelli",
    "Manutenzione Impianti",
    "Pratiche Burocratiche",
    "Consulenza Energetica"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div
              className="flex items-center mb-6"
              data-tina-field={tinaField(data?.hero, "name")}
            >
              <div className="p-3 bg-white mr-4">
                {data?.hero?.heroIcon ? (
                  <img
                    src={data.hero.heroIcon}
                    alt="Logo"
                    className="w-8 h-8 object-contain"
                    data-tina-field={tinaField(data.hero, "heroIcon")}
                  />
                ) : (
                  <Sun className="w-8 h-8 text-white" />
                )}
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  {data?.hero?.name} {data?.hero?.surname}
                </h3>
                <p className="text-gray-400">{data?.hero?.title}</p>
              </div>
            </div>

            <p
              className="text-gray-300 mb-6 leading-relaxed max-w-md"
              data-tina-field={tinaField(data?.hero, "subtitle")}
            >
              {data?.hero?.subtitle}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div
                className="flex items-center text-gray-300"
                data-tina-field={tinaField(data?.contatti, "phone")}
              >
                <Phone className="w-5 h-5 mr-3 text-yellow-400" />
                <a
                  href={`tel:${phoneNumber}`}
                  className="hover:text-yellow-400 transition-colors"
                >
                  {contactInfo.phone || "+39 333 123 4567"}
                </a>
              </div>
              <div
                className="flex items-center text-gray-300"
                data-tina-field={tinaField(data?.contatti, "email")}
              >
                <Mail className="w-5 h-5 mr-3 text-yellow-400" />
                <a
                  href={`mailto:${
                    contactInfo.email || "info@studiofulminis.it"
                  }`}
                  className="hover:text-yellow-400 transition-colors"
                >
                  {contactInfo.email || "info@studiofulminis.it"}
                </a>
              </div>
              <div
                className="flex items-center text-gray-300"
                data-tina-field={tinaField(data?.contatti, "address")}
              >
                <MapPin className="w-5 h-5 mr-3 text-yellow-400 flex-shrink-0" />
                <span>
                  {contactInfo.address || "Via Roma 123, 20100 Milano (MI)"}
                </span>
              </div>
              {contactInfo.workingHours && (
                <div
                  className="flex items-start text-gray-300 mt-3"
                  data-tina-field={tinaField(data?.contatti, "workingHours")}
                >
                  <Clock className="w-5 h-5 mr-3 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-white">Orari di Lavoro</h5>
                    <p className="text-sm">{contactInfo.workingHours}</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6">Menu</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6">Servizi</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Danilo Fulminis. Tutti i diritti riservati.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookie"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                href="/termini"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Termini di Servizio
              </Link>
            </div>

            {/* Developer Credit */}
            <div className="text-gray-500 text-sm flex items-center">
              <span className="mr-2">Sviluppato da</span>
              <Link
                href="https://emmanueledurante.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center"
              >
                Emmanuel Durante
                <ExternalLink className="w-3 h-3 ml-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
