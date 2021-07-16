import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from 'src/app/types/post';
import { Comment } from 'src/app/types/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor() { }

  getCommentsOfPost(post: Post): Observable<Comment[]> {
    const Comments = of(post.Comments);
    return Comments;
  }

}
