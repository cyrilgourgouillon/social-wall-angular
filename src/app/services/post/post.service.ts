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
    //let selectedWall = WALLS.filter(el => el.Id == wall.Id);
    const Posts = of(wall.Posts);
    return Posts;
  }
}
