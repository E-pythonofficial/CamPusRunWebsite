import type { User, Delivery } from './types';

export const mockUser: User = {
  id: 'u1',
  fullname: 'Eniola Somoye',
  email: 'dev@campusrun.com',
  role: 'DISPATCHER',
  userType: 'STUDENT',
  isApproved: true,
};

export const currentLiveRuns: Delivery[] = [
  {
    id: 'd1',
    requesterName: 'Fatima Bello',
    itemDescription: 'Physics Textbook',
    fee: 800,
    status: 'IN_TRANSIT',
    createdAt: new Date(),
  }
];