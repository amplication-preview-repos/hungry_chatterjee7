import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
