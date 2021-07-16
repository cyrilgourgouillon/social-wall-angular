import { Wall } from "./wall";
import { Comment } from './comment';

export interface Post {
    Id: string,
    WallId: Wall['Id'],
    Title: string,
    Author: string,
    CreatedDate: Date,
    Content: string,
    Comments: Comment[],
}
