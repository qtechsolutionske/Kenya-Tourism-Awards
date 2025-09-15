import React from 'react';
import { Award, Target, Users, Globe, Heart, Lightbulb } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We recognize and celebrate the highest standards of service and innovation in tourism.',
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'We promote responsible tourism practices that protect our environment and communities.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We support tourism initiatives that benefit local communities and preserve cultural heritage.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We celebrate the passion and dedication of those who make Kenya a world-class destination.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We encourage creative approaches and innovative solutions in the tourism industry.',
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'We recognize initiatives that create positive economic and social impact.',
    },
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Awards Inception',
      description: 'The Kenya Tourism Awards were established to recognize excellence in the tourism industry.',
    },
    {
      year: '2021',
      title: 'First Awards Ceremony',
      description: 'Our inaugural awards ceremony celebrated 50 outstanding nominees across 8 categories.',
    },
    {
      year: '2022',
      title: 'Expanded Categories',
      description: 'We expanded to 10 categories, including new awards for sustainable tourism and innovation.',
    },
    {
      year: '2023',
      title: 'Digital Transformation',
      description: 'Launched our digital platform for nominations, voting, and community engagement.',
    },
    {
      year: '2024',
      title: 'Record Participation',
      description: 'This year features our largest participation with over 150 nominees across 12 categories.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Kenya Tourism Awards
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Celebrating excellence, innovation, and sustainability in Kenya's vibrant tourism industry
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Kenya Tourism Awards exist to recognize, celebrate, and promote excellence in Kenya's tourism industry. 
                We honor businesses, organizations, and individuals who demonstrate outstanding service, innovation, 
                and commitment to sustainable tourism development.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through our annual awards program, we aim to raise standards across the industry, encourage best practices, 
                and showcase Kenya as a world-class tourism destination that values quality, sustainability, and community development.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Kenya Tourism"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our mission to celebrate and promote excellence in tourism
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg mb-4">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From inception to becoming Kenya's premier tourism awards program
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Impact
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              The Kenya Tourism Awards have become a catalyst for positive change in our tourism industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Total Nominees</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-200">Award Winners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-200">Votes Cast</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">12</div>
              <div className="text-blue-200">Award Categories</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;