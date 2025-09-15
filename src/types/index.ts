export interface Category {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  nominations: Nomination[];
}

export interface Nomination {
  id: string;
  categoryId: string;
  nomineeName: string;
  nomineeEmail: string;
  organization: string;
  description: string;
  achievements: string;
  submittedBy: string;
  submittedAt: string;
  status: 'pending' | 'approved' | 'rejected';
  documents: string[];
  votes: number;
  juryScores: JuryScore[];
}

export interface JuryScore {
  juryId: string;
  juryName: string;
  scores: {
    criteria: string;
    score: number;
    maxScore: number;
  }[];
  totalScore: number;
  feedback: string;
  submittedAt: string;
}

export interface Vote {
  id: string;
  voterId: string;
  nominationId: string;
  categoryId: string;
  timestamp: string;
}

export interface SystemSettings {
  siteName: string;
  currentPhase: 'nominations' | 'jury_evaluation' | 'public_voting' | 'results';
  nominationsOpen: boolean;
  votingOpen: boolean;
  resultsPublished: boolean;
  maxVotesPerCategory: number;
  juryEvaluationDeadline: string;
  votingDeadline: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  avatar: string;
  department: string;
  joinDate: string;
  isActive: boolean;
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  recipientId: string;
  recipientName: string;
  subject: string;
  content: string;
  timestamp: string;
  isRead: boolean;
  type: 'message' | 'notification' | 'system';
}