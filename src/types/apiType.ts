import { User } from "./type";

export type MessageResponse = {
  seccess: boolean;
  message: string;
};

export type UserResponse = {
  success: boolean;
  user: User;
};
