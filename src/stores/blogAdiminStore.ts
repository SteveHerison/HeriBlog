import { BlogWithUsers } from "@/types/Blogs";
import { Blog } from "@prisma/client";
import { create } from "zustand";

export type BlogState = {
  blog: Blog[];
  BlogSelected: BlogWithUsers | null;
};

export type BlogActions = {
  setBlog: (blog: Blog | null) => void;
};

export const useBlogAdiminStore = create<BlogState & BlogActions>(() => ({}));
