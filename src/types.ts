export enum View {
  Splash = 'splash',
  Onboarding = 'onboarding',
  Login = 'login',
  Dashboard = 'dashboard',
  Vault = 'vault',
  Upload = 'upload',
  Medical = 'medical',
  SASSA = 'sassa',
  Notifications = 'notifications',
  Profile = 'profile'
}

export interface User {
  fullName: string;
  idNumber: string;
  contactNumber: string;
  address: string;
  profilePhoto?: string;
}

export interface Document {
  id: string;
  name: string;
  type: string;
  date: string;
  status: 'Verified' | 'Pending' | 'Rejected' | 'Approved';
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'success' | 'alert' | 'info';
}
