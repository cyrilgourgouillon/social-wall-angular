import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from 'src/app/types/post';
import { Wall } from 'src/app/types/wall';
import { WALLS } from '../../mocks/mock-walls';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  selectedPost?: Post;

  constructor() { }

  getPostOf(wall: Wall): Observable<Post[]> {
    const Posts = of(WALLS[parseInt(wall.Id)].Posts);
    return Posts;
  }
}
