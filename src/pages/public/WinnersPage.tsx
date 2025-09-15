import React from 'react';
import { Trophy, Award, Star, Calendar } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const WinnersPage: React.FC = () => {
  const winners = [
    {
      id: '1',
      category: 'Best Safari Lodge',
      winner: 'Maasai Mara Serena Safari Lodge',
      organization: 'Serena Hotels',
      year: '2023',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Outstanding safari experience with exceptional wildlife viewing and luxury accommodation.',
      achievements: 'Winner of multiple international awards, 95% customer satisfaction rate, sustainable tourism practices.',
    },
    {
      id: '2',
      category: 'Best Beach Resort',
      winner: 'Diani Reef Beach Resort & Spa',
      organization: 'Diani Reef Resort',
      year: '2023',
      image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Luxury beachfront resort with world-class spa and water sports facilities.',
      achievements: 'TripAdvisor Certificate of Excellence, Blue Flag certification, 4.8/5 guest rating.',
    },
    {
      id: '3',
      category: 'Best Cultural Tourism Experience',
      winner: 'Bomas of Kenya Cultural Centre',
      organization: 'Bomas of Kenya',
      year: '2023',
      image: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Authentic cultural tourism experience showcasing Kenyan traditions and heritage.',
      achievements: 'Over 1 million visitors annually, cultural preservation programs, community employment.',
    },
    {
      id: '4',
      category: 'Best Eco-Tourism Initiative',
      winner: 'Ol Pejeta Conservancy',
      organization: 'Ol Pejeta Conservancy',
      year: '2023',
      image: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Leading conservation efforts while providing exceptional wildlife experiences.',
      achievements: 'Home to the last two northern white rhinos, community conservancy model, carbon neutral operations.',
    },
    {
      id: '5',
      category: 'Best Tour Operator',
      winner: 'Kenya Safari Adventures',
      organization: 'Kenya Safari Adventures Ltd',
      year: '2023',
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Exceptional tour operations with personalized safari experiences.',
      achievements: '20+ years of experience, 98% customer satisfaction, sustainable tourism advocate.',
    },
    {
      id: '6',
      category: 'Best Hotel',
      winner: 'Giraffe Manor',
      organization: 'The Safari Collection',
      year: '2023',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Unique boutique hotel offering intimate encounters with endangered Rothschild giraffes.',
      achievements: 'World-renowned unique experience, conservation education, luxury hospitality excellence.',
    },
  ];

  const yearlyStats = [
    { year: '2023', winners: 24, nominees: 120, votes: 8500 },
    { year: '2022', winners: 20, nominees: 95, votes: 6200 },
    { year: '2021', winners: 18, nominees: 75, votes: 4800 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Trophy className="h-16 w-16 text-yellow-200" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Award Winners
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Celebrating the champions of Kenya's tourism industry
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Awards by Year
            </h2>
            <p className="text-lg text-gray-600">
              A look at our growing impact over the years
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {yearlyStats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">{stat.year}</div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Winners:</span>
                    <span className="font-semibold">{stat.winners}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Nominees:</span>
                    <span className="font-semibold">{stat.nominees}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Votes:</span>
                    <span className="font-semibold">{stat.votes.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Winners Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              2023 Winners
            </h2>
            <p className="text-lg text-gray-600">
              Congratulations to our outstanding 2023 award winners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {winners.map((winner) => (
              <div key={winner.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Winner Image */}
                <div className="relative">
                  <img
                    src={winner.image}
                    alt={winner.winner}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center">
                      <Trophy className="h-4 w-4 mr-1" />
                      Winner
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white text-gray-900 px-2 py-1 rounded text-sm font-semibold">
                      {winner.year}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mb-3">
                    {winner.category}
                  </div>

                  {/* Winner Name */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {winner.winner}
                  </h3>

                  {/* Organization */}
                  <p className="text-gray-600 text-sm mb-3">{winner.organization}</p>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4">
                    {winner.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      Key Achievements:
                    </h4>
                    <p className="text-gray-600 text-xs">
                      {winner.achievements}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hall of Fame */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hall of Fame
            </h2>
            <p className="text-lg text-gray-600">
              Recognizing consistent excellence and multiple-time winners
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Serena Hotels</h3>
                <p className="text-sm text-gray-600">3-time winner</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">The Safari Collection</h3>
                <p className="text-sm text-gray-600">2-time winner</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Ol Pejeta Conservancy</h3>
                <p className="text-sm text-gray-600">2-time winner</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Bomas of Kenya</h3>
                <p className="text-sm text-gray-600">2-time winner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Next Awards
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nominations for 2024 are now open. Submit your nomination or vote for your favorites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors duration-200">
              Submit Nomination
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200">
              Vote Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WinnersPage;