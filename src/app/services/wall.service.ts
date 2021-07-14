import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Wall } from '../types/wall';
import { WALLS } from '../mocks/mock-walls';

@Injectable({
  providedIn: 'root'
})
export class WallService {

  constructor() { }

  getWalls(): Observable<Wall[]> {
    WALLS.map(el => delete el.Posts);
    const Walls = of(WALLS);
    return Walls;
  }
}
