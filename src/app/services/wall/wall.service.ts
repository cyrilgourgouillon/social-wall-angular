import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Wall } from '../../types/wall';
import { WALLS } from '../../mocks/mock-walls';

@Injectable({
  providedIn: 'root'
})
export class WallService {

  getWalls(): Observable<Wall[]> {
    //WALLS.map(el => el.Posts = []);
    const Walls = of(WALLS);
    return Walls;
  }

  getEmptyWall(): Wall {
    return {
      Id: '',
      Name: '',
      Description: '',
      Color: '',
      CreatedDate: new Date(),
      Posts: []
    };
  }
}
