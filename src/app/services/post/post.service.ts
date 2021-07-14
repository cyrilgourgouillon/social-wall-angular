import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from 'src/app/types/post';
import { WALLS } from '../../mocks/mock-walls';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPostOf(Id: string): Observable<Post[]> {
    const Posts = of(WALLS[parseInt(Id)].Posts);
    return Posts;
  }
}
