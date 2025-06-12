import React, { useState } from 'react';

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[400px]"
        style={{ backgroundImage: "url('/construction (1).jpg')" }}
      >
        <div className="bg-black bg-opacity-60 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Bienvenue chez ETS MG BUILDERS SERVICES
            </h1>
            <p className="text-lg mb-6">
              Votre partenaire de confiance pour les services de construction,
              plomberie, nettoyage et plus encore.
            </p>
            <button
              onClick={openModal}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded font-semibold"
            >
              Demander un devis
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 md:px-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Nos Services</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Construction */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/construction (2).jpg"
              alt="Construction"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                Construction & Génie Civil
              </h3>
              <p className="text-sm text-gray-600">
                Nous réalisons des projets de construction de qualité, allant de la conception à la livraison. Notre expertise garantit la durabilité et la conformité aux normes modernes.
              </p>
            </div>
          </div>

          {/* Plumbing */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/cleaning (2).jpg"
              alt="Plomberie"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Plomberie</h3>
              <p className="text-sm text-gray-600">
                Nos plombiers qualifiés assurent l'installation, la réparation et l’entretien de vos systèmes d'eau. Intervention rapide et efficace assurée.
              </p>
            </div>
          </div>

          {/* Cleaning */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/cleaning (1).jpg"
              alt="Nettoyage"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Nettoyage Professionnel</h3>
              <p className="text-sm text-gray-600">
                Nous proposons des services de nettoyage pour bureaux, maisons, sites de construction, et plus. Un environnement propre est essentiel pour votre bien-être.
              </p>
            </div>
          </div>

          {/* Other Services */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden md:col-span-2 lg:col-span-1">
            <img
              src="/service.jpg"
              alt="Autres services"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Autres Services</h3>
              <p className="text-sm text-gray-600">
                En plus de nos services principaux, nous offrons des prestations en électricité, peinture, carrelage, et bien plus encore selon vos besoins spécifiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-yellow-500 py-10 text-center text-white">
        <h2 className="text-2xl font-semibold mb-4">Vous avez un projet ?</h2>
        <p className="mb-6">Contactez-nous dès aujourd'hui pour une consultation gratuite.</p>
        <button
          onClick={openModal}
          className="bg-white text-yellow-600 font-bold px-6 py-2 rounded hover:bg-yellow-100"
        >
          Nous contacter
        </button>
      </section>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              onClick={closeModal}
              aria-label="Close modal"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Demander un devis</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full px-4 py-2 border border-gray-300 rounded"
                required
              />
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-2 border border-gray-300 rounded"
                required
              />
              <textarea
                placeholder="Votre message / Détails du projet"
                className="w-full px-4 py-2 border border-gray-300 rounded"
                rows={4}
                required
              />
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
