import { Post } from "./post";

export interface Comment {
    Id: string,
    PostId: Post['Id'],
    CreatedDate: Date,
    Author: string,
    Content: string,
}
