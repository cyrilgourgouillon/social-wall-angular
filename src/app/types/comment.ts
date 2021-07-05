import { Post } from "./post";

export interface Comment {
    id: number,
    idPost: Post['id'],
    dateCreation: string,
    author: string,
    content: string,
}