// types.ts
import { User } from './user.interface';

export enum UserRole {
  ADMIN = 'admin',
  MODERATOR = 'moderator',
  USER = 'user',
}

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export type GetUserListResponse = {
  id: number;
  username: string;
  email: string;
  role: UserRole;
  created_at: string;
};

export type FilterUserListRequest = {
  username?: string;
  email?: string;
  role?: UserRole;
  order_by?: keyof GetUserListResponse;
  order?: SortOrder;
  skip?: number;
  take?: number;
};