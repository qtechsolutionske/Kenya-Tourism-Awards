import React, { useState } from 'react';
import { 
  Award, 
  FileText, 
  TrendingUp, 
  Users, 
  Calendar,
  Star,
  Heart,
  Eye,
  Edit,
  Upload,
  CheckCircle,
  Clock,
  AlertCircle,
  BarChart3
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import Header from '../../components/layout/Header';
import { mockNominations, mockCategories } from '../../data/mockData';

const NomineeDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for nominee's nominations
  const myNominations = mockNominations.filter(nom => nom.nomineeEmail === user?.email);

  const stats = [
    { icon: FileText, label: 'My Nominations', value: myNominations.length.toString(), change: '+1', color: 'blue' },
    { icon: Heart, label: 'Total Votes', value: myNominations.reduce((sum, nom) => sum + nom.votes, 0).toString(), change: '+15', color: 'red' },
    { icon: Star, label: 'Average Rating', value: '4.8', change: '+0.2', color: 'yellow' },
    { icon: TrendingUp, label: 'Ranking', value: '#3', change: '+2', color: 'green' },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'nominations', label: 'My Nominations', icon: FileText },
    { id: 'performance', label: 'Performance', icon: TrendingUp },
    { id: 'submit', label: 'Submit New', icon: Upload },
  ];

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

      {/* Quick Actions and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button
              onClick={() => setActiveTab('submit')}
              className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Upload className="h-5 w-5 mr-2" />
              Submit New Nomination
            </button>
            <button
              onClick={() => setActiveTab('nominations')}
              className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <Eye className="h-5 w-5 mr-2" />
              View My Nominations
            </button>
            <button
              onClick={() => setActiveTab('performance')}
              className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <BarChart3 className="h-5 w-5 mr-2" />
              View Performance
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Nomination Status</h3>
          <div className="space-y-4">
            {myNominations.map((nomination) => (
              <div key={nomination.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{nomination.nomineeName}</p>
                  <p className="text-sm text-gray-600">
                    {mockCategories.find(cat => cat.id === nomination.categoryId)?.name}
                  </p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  nomination.status === 'approved' ? 'bg-green-100 text-green-800' :
                  nomination.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {nomination.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderNominations = () => (
    <div className="space-y-6">
      {myNominations.length === 0 ? (
        <div className="bg-white rounded-lg shadow-lg p-12 text-center">
          <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No nominations yet</h3>
          <p className="text-gray-600 mb-6">Submit your first nomination to get started.</p>
          <button
            onClick={() => setActiveTab('submit')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Submit Nomination
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {myNominations.map((nomination) => (
            <div key={nomination.id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{nomination.nomineeName}</h3>
                  <p className="text-gray-600 mb-2">{nomination.organization}</p>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full">
                    {mockCategories.find(cat => cat.id === nomination.categoryId)?.name}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    nomination.status === 'approved' ? 'bg-green-100 text-green-800' :
                    nomination.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {nomination.status === 'approved' && <CheckCircle className="h-4 w-4 inline mr-1" />}
                    {nomination.status === 'pending' && <Clock className="h-4 w-4 inline mr-1" />}
                    {nomination.status === 'rejected' && <AlertCircle className="h-4 w-4 inline mr-1" />}
                    {nomination.status}
                  </span>
                  <button className="text-gray-600 hover:text-gray-900">
                    <Edit className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Description</h4>
                  <p className="text-gray-600 text-sm">{nomination.description}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Key Achievements</h4>
                  <p className="text-gray-600 text-sm">{nomination.achievements}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-red-600">
                    <Heart className="h-4 w-4 mr-1" />
                    <span className="font-medium">{nomination.votes} votes</span>
                  </div>
                  <div className="flex items-center text-yellow-600">
                    <Star className="h-4 w-4 mr-1" />
                    <span className="font-medium">4.8 rating</span>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  Submitted {new Date(nomination.submittedAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderPerformance = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Vote Trends</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center text-gray-500">
              <BarChart3 className="h-12 w-12 mx-auto mb-2" />
              <p>Vote trend chart would be displayed here</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Category Performance</h3>
          <div className="space-y-4">
            {myNominations.map((nomination) => (
              <div key={nomination.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{nomination.nomineeName}</p>
                  <p className="text-sm text-gray-600">
                    {mockCategories.find(cat => cat.id === nomination.categoryId)?.name}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{nomination.votes} votes</p>
                  <p className="text-sm text-gray-600">Rank #3</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Jury Feedback</h3>
        {myNominations.filter(nom => nom.juryScores.length > 0).length === 0 ? (
          <div className="text-center py-8">
            <Star className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600">No jury feedback available yet</p>
          </div>
        ) : (
          <div className="space-y-4">
            {myNominations.filter(nom => nom.juryScores.length > 0).map((nomination) => (
              <div key={nomination.id} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">{nomination.nomineeName}</h4>
                {nomination.juryScores.map((score, index) => (
                  <div key={index} className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{score.juryName}</span>
                      <span className="text-sm font-semibold text-gray-900">{score.totalScore}/30</span>
                    </div>
                    <p className="text-sm text-gray-600">{score.feedback}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const renderSubmit = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Submit New Nomination</h3>
      
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nominee Name *
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter nominee name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category *
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Select a category</option>
              {mockCategories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Organization *
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter organization name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description *
          </label>
          <textarea
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Provide a detailed description of the nominee..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Key Achievements *
          </label>
          <textarea
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="List the key achievements and accomplishments..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Supporting Documents
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600">
              Drag and drop files here, or click to select files
            </p>
            <p className="text-xs text-gray-500 mt-1">
              PDF, DOC, DOCX, JPG, PNG up to 10MB each
            </p>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            Save Draft
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Submit Nomination
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Nominee Dashboard</h1>
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
                    ? 'bg-blue-100 text-blue-700'
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
          {activeTab === 'nominations' && renderNominations()}
          {activeTab === 'performance' && renderPerformance()}
          {activeTab === 'submit' && renderSubmit()}
        </div>
      </div>
    </div>
  );
};

export default NomineeDashboard;