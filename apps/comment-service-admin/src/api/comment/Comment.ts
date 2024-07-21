import { User } from "../user/User";

export type Comment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  timestamp: Date | null;
  user?: User | null;
};
