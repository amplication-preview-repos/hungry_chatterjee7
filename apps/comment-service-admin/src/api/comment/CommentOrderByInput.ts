import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  timestamp?: SortOrder;
  userId?: SortOrder;
};
