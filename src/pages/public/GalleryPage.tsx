import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: '2023 Awards Ceremony',
      category: 'ceremony',
      location: 'Nairobi',
      date: '2023-12-15',
      description: 'The grand finale of Kenya Tourism Awards 2023 at the Kenyatta International Convention Centre.',
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Safari Lodge Winner',
      category: 'winners',
      location: 'Maasai Mara',
      date: '2023-11-20',
      description: 'Maasai Mara Serena Safari Lodge - Winner of Best Safari Lodge 2023.',
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Beach Resort Excellence',
      category: 'winners',
      location: 'Diani Beach',
      date: '2023-10-10',
      description: 'Diani Reef Beach Resort & Spa - Celebrating coastal hospitality excellence.',
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Cultural Tourism Award',
      category: 'winners',
      location: 'Nairobi',
      date: '2023-09-15',
      description: 'Bomas of Kenya - Preserving and showcasing authentic Kenyan culture.',
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Conservation Excellence',
      category: 'winners',
      location: 'Ol Pejeta',
      date: '2023-08-22',
      description: 'Ol Pejeta Conservancy - Leading the way in eco-tourism and conservation.',
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Unique Hotel Experience',
      category: 'winners',
      location: 'Nairobi',
      date: '2023-07-18',
      description: 'Giraffe Manor - Offering unforgettable encounters with endangered giraffes.',
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Jury Evaluation Process',
      category: 'ceremony',
      location: 'Nairobi',
      date: '2023-06-10',
      description: 'Expert jury members evaluating nominations for the 2023 awards.',
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Community Tourism Initiative',
      category: 'nominees',
      location: 'Samburu',
      date: '2023-05-25',
      description: 'Community-based tourism project empowering local communities.',
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Sustainable Tourism Practices',
      category: 'nominees',
      location: 'Amboseli',
      date: '2023-04-12',
      description: 'Innovative sustainable tourism practices in Amboseli National Park.',
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Tourism Innovation Award',
      category: 'ceremony',
      location: 'Mombasa',
      date: '2023-03-08',
      description: 'Recognizing innovative approaches in tourism technology and services.',
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Adventure Tourism Excellence',
      category: 'nominees',
      location: 'Mount Kenya',
      date: '2023-02-20',
      description: 'Adventure tourism operators providing thrilling and safe experiences.',
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Awards Gala Dinner',
      category: 'ceremony',
      location: 'Nairobi',
      date: '2023-12-15',
      description: 'Celebrating excellence with industry leaders at the awards gala dinner.',
    },
  ];

  const categories = [
    { value: 'all', label: 'All Photos' },
    { value: 'ceremony', label: 'Ceremony' },
    { value: 'winners', label: 'Winners' },
    { value: 'nominees', label: 'Nominees' },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gallery
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Capturing moments of excellence from Kenya Tourism Awards
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category.value
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-purple-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => openModal(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold mb-1">{image.title}</h3>
                    <div className="flex items-center text-sm opacity-90">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{image.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Image */}
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-[80vh] object-contain"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-6">
              <h3 className="text-xl font-semibold mb-2">
                {filteredImages[selectedImage].title}
              </h3>
              <p className="text-gray-300 mb-3">
                {filteredImages[selectedImage].description}
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{filteredImages[selectedImage].location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{new Date(filteredImages[selectedImage].date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GalleryPage;