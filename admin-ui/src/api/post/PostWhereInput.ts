import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PostWhereInput = {
  id?: StringFilter;
  text?: StringNullableFilter;
};
