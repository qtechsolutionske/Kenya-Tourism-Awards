import React, { useState } from 'react';
import { 
  Heart, 
  Award, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  Star,
  Filter,
  Search,
  Calendar,
  BarChart3
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import Header from '../../components/layout/Header';
import { mockNominations, mockCategories } from '../../data/mockData';
import toast from 'react-hot-toast';

const VoterDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('vote');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [votedNominations, setVotedNominations] = useState<string[]>([]);

  const stats = [
    { icon: Heart, label: 'Votes Cast', value: '8', change: '+2', color: 'red' },
    { icon: Award, label: 'Categories Voted', value: '5', change: '+1', color: 'blue' },
    { icon: TrendingUp, label: 'Participation', value: '67%', change: '+15%', color: 'green' },
    { icon: Clock, label: 'Days Remaining', value: '15', change: '-1', color: 'yellow' },
  ];

  const tabs = [
    { id: 'vote', label: 'Vote Now', icon: Heart },
    { id: 'history', label: 'My Votes', icon: CheckCircle },
    { id: 'leaderboard', label: 'Leaderboard', icon: TrendingUp },
    { id: 'overview', label: 'Overview', icon: BarChart3 },
  ];

  const filteredNominations = mockNominations.filter(nomination => {
    const matchesCategory = selectedCategory === 'all' || nomination.categoryId === selectedCategory;
    const matchesSearch = nomination.nomineeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         nomination.organization.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch && nomination.status === 'approved';
  });

  const handleVote = (nominationId: string) => {
    if (votedNominations.includes(nominationId)) {
      toast.error('You have already voted for this nominee');
      return;
    }

    setVotedNominations(prev => [...prev, nominationId]);
    toast.success('Vote cast successfully!');
  };

  const getCategoryName = (categoryId: string) => {
    const category = mockCategories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Unknown Category';
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} this week
                </p>
              </div>
              <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Voting Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Voting Progress by Category</h3>
          <div className="space-y-4">
            {mockCategories.slice(0, 5).map((category) => {
              const hasVoted = votedNominations.some(voteId => 
                mockNominations.find(nom => nom.id === voteId)?.categoryId === category.id
              );
              return (
                <div key={category.id}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{category.name}</span>
                    <span className={`text-sm ${hasVoted ? 'text-green-600' : 'text-gray-400'}`}>
                      {hasVoted ? 'Voted' : 'Not voted'}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${hasVoted ? 'bg-green-600' : 'bg-gray-300'}`} 
                      style={{ width: hasVoted ? '100%' : '0%' }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Voting Deadline</h3>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 text-red-600 rounded-full mb-4">
              <Calendar className="h-10 w-10" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">March 1, 2024</h4>
            <p className="text-gray-600 mb-4">Voting closes at 11:59 PM</p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>15 days remaining</strong> to cast your votes. 
                Make sure to vote in all categories!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderVote = () => (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search nominees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-600" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {mockCategories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Nominees Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNominations.map((nomination) => {
          const hasVoted = votedNominations.includes(nomination.id);
          return (
            <div key={nomination.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Nominee Image */}
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <Award className="h-12 w-12 mx-auto mb-2" />
                  <div className="text-sm font-medium">Nominee</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mb-3">
                  {getCategoryName(nomination.categoryId)}
                </div>

                {/* Nominee Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {nomination.nomineeName}
                </h3>

                {/* Organization */}
                <p className="text-gray-600 text-sm mb-3">{nomination.organization}</p>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {nomination.description}
                </p>

                {/* Vote Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-600">
                    <Heart className="h-4 w-4 mr-1 text-red-500" />
                    <span className="text-sm font-medium">{nomination.votes} votes</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    <span className="text-sm">4.8/5</span>
                  </div>
                </div>

                {/* Vote Button */}
                <button
                  onClick={() => handleVote(nomination.id)}
                  disabled={hasVoted}
                  className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                    hasVoted
                      ? 'bg-green-100 text-green-800 cursor-not-allowed'
                      : 'bg-red-600 text-white hover:bg-red-700'
                  }`}
                >
                  {hasVoted ? (
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Voted
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Heart className="h-4 w-4 mr-2" />
                      Vote Now
                    </div>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderHistory = () => (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">My Voting History</h3>
      </div>
      
      {votedNominations.length === 0 ? (
        <div className="p-12 text-center">
          <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No votes cast yet</h3>
          <p className="text-gray-600 mb-6">Start voting for your favorite nominees to see your history here.</p>
          <button
            onClick={() => setActiveTab('vote')}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            Start Voting
          </button>
        </div>
      ) : (
        <div className="divide-y divide-gray-200">
          {votedNominations.map((nominationId) => {
            const nomination = mockNominations.find(n => n.id === nominationId);
            if (!nomination) return null;
            
            return (
              <div key={nominationId} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{nomination.nomineeName}</h4>
                    <p className="text-sm text-gray-600">{nomination.organization}</p>
                    <p className="text-sm text-blue-600">{getCategoryName(nomination.categoryId)}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-green-600 mb-1">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">Voted</span>
                    </div>
                    <p className="text-xs text-gray-500">Just now</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

  const renderLeaderboard = () => (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Current Leaderboard</h3>
        <p className="text-sm text-gray-600">Top nominees by votes received</p>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          {mockNominations
            .sort((a, b) => b.votes - a.votes)
            .slice(0, 10)
            .map((nomination, index) => (
              <div key={nomination.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    index === 0 ? 'bg-yellow-100 text-yellow-800' :
                    index === 1 ? 'bg-gray-100 text-gray-800' :
                    index === 2 ? 'bg-orange-100 text-orange-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{nomination.nomineeName}</h4>
                    <p className="text-sm text-gray-600">{nomination.organization}</p>
                    <p className="text-xs text-blue-600">{getCategoryName(nomination.categoryId)}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-red-600">
                    <Heart className="h-4 w-4 mr-1" />
                    <span className="font-semibold">{nomination.votes}</span>
                  </div>
                  <p className="text-xs text-gray-500">votes</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Voter Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user?.name}</p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'bg-red-100 text-red-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div>
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'vote' && renderVote()}
          {activeTab === 'history' && renderHistory()}
          {activeTab === 'leaderboard' && renderLeaderboard()}
        </div>
      </div>
    </div>
  );
};

export default VoterDashboard;