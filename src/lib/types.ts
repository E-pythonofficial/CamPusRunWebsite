export type UserRole = 'REQUESTER' | 'DISPATCHER' | 'ADMIN';
export type UserType = 'STUDENT' | 'STAFF' | null;

export type DeliveryStatus =
  | 'CREATED' | 'ACCEPTED' | 'ON_MY_WAY' | 'PICKED_UP'
  | 'IN_TRANSIT' | 'ARRIVED' | 'PIN_VERIFIED' | 'COMPLETED'
  | 'CANCELLED' | 'EXPIRED' | 'DISPUTED';

export interface User {
  id: string;
  fullname: string;
  email: string;
  role: UserRole;
  userType: UserType;
  isApproved: boolean; // Vital for verifying student runners
  phone?: string;
  matricNumber?: string;
  avatarUrl?: string;
  createdAt?: string | Date;
}

export interface Delivery {
  id: string;
  requesterName: string;
  itemDescription: string;
  fee: number; 
  status: DeliveryStatus;
  createdAt: Date;
}