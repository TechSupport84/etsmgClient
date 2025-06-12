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
          <ServiceCard
            image="/construction (2).jpg"
            title="Construction & Génie Civil"
            description="Nous réalisons des projets de construction de qualité, allant de la conception à la livraison. Notre expertise garantit durabilité et conformité aux normes."
          />

          {/* Plumbing */}
          <ServiceCard
            image="/cleaning (2).jpg"
            title="Plomberie"
            description="Nos plombiers qualifiés assurent l'installation, la réparation et l’entretien de vos systèmes d'eau avec rapidité et efficacité."
          />

          {/* Cleaning */}
          <ServiceCard
            image="/cleaning (1).jpg"
            title="Nettoyage Professionnel"
            description="Services de nettoyage pour bureaux, habitations, chantiers, etc. Un environnement propre est essentiel pour votre bien-être."
          />
        </div>

        {/* Fourniture Section */}
        <h2 className="text-3xl font-bold text-center my-12">Fourniture de Biens et Services</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            image="/bureau.jpg"
            title="Bureaux"
            description="Nous fournissons et commercialisons du matériel de bureau de haute qualité, incluant des meubles ergonomiques, des équipements informatiques, des fournitures administratives et des solutions d’aménagement, adaptés à tous types d’environnements professionnels."
          />
          <ServiceCard
            image="/appartement.jpg"
            title="Appartements"
            description=" Nous mettons à votre disposition des appartements à louer, bien entretenus, sécurisés et situés dans des quartiers accessibles. Idéals pour les séjours courts ou longue durée selon vos besoins."
          />
          <ServiceCard
            image="/garden.jpg"
            title="Jardinage"
            description="Entretien de jardins, tonte de pelouse, taille de haies et aménagements paysagers pour embellir vos extérieurs."
          />
        </div>

        {/* Other Services */}
        <div className="mt-12">
          <ServiceCard
            image="/service.jpg"
            title="Autres Services"
            description="Nous proposons également des services en électricité, peinture, carrelage, et autres selon vos besoins spécifiques."
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-yellow-500 py-10 text-center text-white">
        <h2 className="text-2xl font-semibold mb-4">Vous avez un projet ?</h2>
        <p className="mb-6">
          Contactez-nous dès aujourd'hui pour une consultation gratuite.
        </p>
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

// ServiceCard Component for reuse
const ServiceCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

export default HomePage;
