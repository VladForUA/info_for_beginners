import { Post as TPost } from "../api/post/Post";

export const POST_TITLE_FIELD = "text";

export const PostTitle = (record: TPost): string => {
  return record.text || record.id;
};
