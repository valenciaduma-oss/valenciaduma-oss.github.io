import { User, Document, Notification } from './types';

export const mockUser: User = {
  fullName: "Valencia Mnguni",
  idNumber: "920512 5123 088",
  contactNumber: "+27 72 123 4567",
  address: "123 Mandela Street, Soweto, Johannesburg, 1804",
  profilePhoto: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&h=200&auto=format&fit=crop"
};

export const mockDocuments: Document[] = [
  { id: '1', name: 'South African ID.pdf', type: 'Identification', date: '2024-01-15', status: 'Verified' },
  { id: '2', name: 'SASSA Approval Letter.pdf', type: 'Grant', date: '2024-02-10', status: 'Approved' },
  { id: '3', name: 'Clinic Medical Report.pdf', type: 'Medical', date: '2024-03-05', status: 'Verified' },
  { id: '4', name: 'Birth Certificate.pdf', type: 'Legal', date: '2023-11-20', status: 'Verified' },
  { id: '5', name: 'Academic Certificate.pdf', type: 'Education', date: '2023-09-12', status: 'Verified' },
  { id: '6', name: 'Proof of Residence.pdf', type: 'Utility', date: '2024-04-01', status: 'Pending' }
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'ID Verification Complete',
    message: 'Your South African ID document has been successfully verified.',
    time: '2 hours ago',
    read: false,
    type: 'success'
  },
  {
    id: '2',
    title: 'New Access Request',
    message: 'Gauteng Health Clinic is requesting access to your medical records.',
    time: '5 hours ago',
    read: false,
    type: 'alert'
  },
  {
    id: '3',
    title: 'Medical Record Updated',
    message: 'Your latest prescription has been added to your medical history.',
    time: 'Yesterday',
    read: true,
    type: 'info'
  }
];

export const mockMedicalRecords = [
  { date: '2024-03-05', facility: 'Charlotte Maxeke Academic Hospital', reason: 'General Checkup', doctor: 'Dr. Sithole' },
  { date: '2024-01-20', facility: 'Soweto Community Clinic', reason: 'Flu Treatment', doctor: 'Dr. Khumalo' },
  { date: '2023-11-15', facility: 'Helen Joseph Hospital', reason: 'Blood Test Results', doctor: 'Dr. Naidoo' }
];

export const mockSassaGrant = {
  status: 'Approved',
  type: 'Social Relief of Distress (SRD)',
  applicationDate: '2024-01-05',
  nextPaymentDate: '2024-05-25',
  amount: 'R350.00',
  reference: 'SASSA-8829-XJ'
};
