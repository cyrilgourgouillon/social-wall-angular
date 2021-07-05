import { Post } from "./post";

export interface Comment {
    id: number,
    idPost: Post['id'],
    author: string,
    content: string,
}