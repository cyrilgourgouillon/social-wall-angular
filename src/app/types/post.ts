import { Wall } from "./wall";
import { Comment } from './comment';

export interface Post {
    id: number,
    idWall: Wall['id'],
    author: string,
    dateCreation: string,
    content: string,
    comments: Comment[],
}