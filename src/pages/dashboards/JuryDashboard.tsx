import React, { useState } from 'react';
import { 
  FileText, 
  Star, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Eye,
  Edit,
  Calendar,
  BarChart3,
  Award
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import Header from '../../components/layout/Header';
import { mockNominations, mockCategories } from '../../data/mockData';

const JuryDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedNomination, setSelectedNomination] = useState<string | null>(null);

  const stats = [
    { icon: FileText, label: 'Assigned Nominations', value: '24', change: '0', color: 'blue' },
    { icon: CheckCircle, label: 'Evaluated', value: '18', change: '+3', color: 'green' },
    { icon: Clock, label: 'Pending', value: '6', change: '-3', color: 'yellow' },
    { icon: Star, label: 'Average Score', value: '8.2', change: '+0.3', color: 'purple' },
  ];

  const evaluationCriteria = [
    { name: 'Service Quality', weight: 30, maxScore: 10 },
    { name: 'Innovation', weight: 25, maxScore: 10 },
    { name: 'Sustainability', weight: 25, maxScore: 10 },
    { name: 'Customer Satisfaction', weight: 20, maxScore: 10 },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'evaluate', label: 'Evaluate Nominations', icon: Star },
    { id: 'completed', label: 'Completed Evaluations', icon: CheckCircle },
    { id: 'guidelines', label: 'Guidelines', icon: FileText },
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
                {stat.change !== '0' && (
                  <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} this week
                  </p>
                )}
              </div>
              <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress and Deadline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Evaluation Progress</h3>
          <div className="space-y-4">
            {mockCategories.slice(0, 4).map((category) => (
              <div key={category.id}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{category.name}</span>
                  <span className="text-sm text-gray-600">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Deadlines</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
              <Calendar className="h-5 w-5 text-yellow-600" />
              <div>
                <p className="font-medium text-gray-900">Jury Evaluation Deadline</p>
                <p className="text-sm text-gray-600">February 15, 2024</p>
                <p className="text-xs text-yellow-600">15 days remaining</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <Award className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">Awards Ceremony</p>
                <p className="text-sm text-gray-600">March 15, 2024</p>
                <p className="text-xs text-blue-600">45 days remaining</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEvaluate = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Nominations Pending Evaluation</h3>
        </div>
        
        <div className="divide-y divide-gray-200">
          {mockNominations.filter(n => n.status === 'approved').map((nomination) => (
            <div key={nomination.id} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{nomination.nomineeName}</h4>
                  <p className="text-sm text-gray-600">{nomination.organization}</p>
                  <p className="text-sm text-blue-600">
                    {mockCategories.find(cat => cat.id === nomination.categoryId)?.name}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => setSelectedNomination(nomination.id)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Evaluate
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    <Eye className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-gray-700">Description:</p>
                  <p className="text-gray-600">{nomination.description}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Key Achievements:</p>
                  <p className="text-gray-600">{nomination.achievements}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Evaluation Modal */}
      {selectedNomination && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Evaluate Nomination</h3>
                <button 
                  onClick={() => setSelectedNomination(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  {mockNominations.find(n => n.id === selectedNomination)?.nomineeName}
                </h4>
                <p className="text-gray-600">
                  {mockNominations.find(n => n.id === selectedNomination)?.organization}
                </p>
              </div>

              <form className="space-y-6">
                {evaluationCriteria.map((criteria, index) => (
                  <div key={index}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {criteria.name} (Weight: {criteria.weight}%)
                    </label>
                    <div className="flex items-center space-x-4">
                      <input
                        type="range"
                        min="0"
                        max={criteria.maxScore}
                        step="0.1"
                        className="flex-1"
                      />
                      <input
                        type="number"
                        min="0"
                        max={criteria.maxScore}
                        step="0.1"
                        className="w-20 px-2 py-1 border border-gray-300 rounded"
                        placeholder="0.0"
                      />
                      <span className="text-sm text-gray-500">/ {criteria.maxScore}</span>
                    </div>
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Comments
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Provide detailed feedback on the nomination..."
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setSelectedNomination(null)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Submit Evaluation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderCompleted = () => (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Completed Evaluations</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nominee</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Score</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Evaluated</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockNominations.filter(n => n.juryScores.length > 0).map((nomination) => (
              <tr key={nomination.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{nomination.nomineeName}</div>
                    <div className="text-sm text-gray-500">{nomination.organization}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {mockCategories.find(cat => cat.id === nomination.categoryId)?.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium text-gray-900">
                      {nomination.juryScores[0]?.totalScore || 0}/30
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {nomination.juryScores[0] ? new Date(nomination.juryScores[0].submittedAt).toLocaleDateString() : 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="text-green-600 hover:text-green-900">
                      <Edit className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderGuidelines = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Evaluation Guidelines</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Evaluation Criteria</h4>
          <div className="space-y-4">
            {evaluationCriteria.map((criteria, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-gray-900">{criteria.name}</h5>
                  <span className="text-sm text-gray-600">Weight: {criteria.weight}%</span>
                </div>
                <p className="text-sm text-gray-600">
                  Evaluate based on excellence, innovation, and impact in this area. 
                  Score from 0 to {criteria.maxScore} with 0.1 increments.
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Scoring Guidelines</h4>
          <div className="bg-gray-50 rounded-lg p-4">
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>9-10:</strong> Exceptional - Industry leading, innovative, outstanding results</li>
              <li><strong>7-8:</strong> Excellent - Above average, strong performance, good practices</li>
              <li><strong>5-6:</strong> Good - Meets standards, satisfactory performance</li>
              <li><strong>3-4:</strong> Fair - Below average, room for improvement</li>
              <li><strong>0-2:</strong> Poor - Significant deficiencies, major improvements needed</li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Important Notes</h4>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <ul className="space-y-2 text-sm text-blue-800">
              <li>• All evaluations must be completed by February 15, 2024</li>
              <li>• Provide detailed comments to support your scoring decisions</li>
              <li>• Be objective and fair in your assessments</li>
              <li>• Contact admin if you need additional information about any nomination</li>
              <li>• Your evaluations are confidential and will be aggregated with other jury scores</li>
            </ul>
          </div>
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
          <h1 className="text-3xl font-bold text-gray-900">Jury Dashboard</h1>
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
          {activeTab === 'evaluate' && renderEvaluate()}
          {activeTab === 'completed' && renderCompleted()}
          {activeTab === 'guidelines' && renderGuidelines()}
        </div>
      </div>
    </div>
  );
};

export default JuryDashboard;