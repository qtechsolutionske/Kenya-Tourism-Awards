export interface User {
  id: string;
  name: string;
  email: string;
  role: 'superadmin' | 'admin' | 'jury' | 'voter' | 'nominee';
  avatar?: string;
  createdAt: string;
  isActive: boolean;
  lastLogin?: string;
  organization?: string;
  phone?: string;
  bio?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role?: string;
  organization?: string;
  phone?: string;
}