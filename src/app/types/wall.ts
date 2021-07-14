import { Post } from "./post"

export interface Wall {
    Id: string,
    Name: string,
    Description: string,
    CreatedDate: Date,
    Color: string,
    Posts: Post[],
}
