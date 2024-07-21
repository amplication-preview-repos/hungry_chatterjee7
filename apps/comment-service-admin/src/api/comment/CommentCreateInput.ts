import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
