import { Wall } from "./wall";

export interface Post {
    id: number,
    idWall: Wall['id'],
    author: string,
    dateCreation: string,
    content: string,
    comments: Comment[],
}