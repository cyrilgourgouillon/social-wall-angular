import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Wall } from '../../types/wall';
import { WALLS } from '../../mocks/mock-walls';
import { COLORS } from 'src/app/mocks/color-wall';

@Injectable({
  providedIn: 'root'
})
export class WallService {

  getWalls(): Observable<Wall[]> {
    //WALLS.map(el => el.Posts = []);
    const Walls = of(WALLS);
    return Walls;
  }

  addWall(wall: Wall): void {
    WALLS.push(wall);
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

  getNewWallId(): string {
    let lastCreatedId = WALLS[WALLS.length-1].Id;
    let newWallId = parseInt(lastCreatedId) + 1;
    return newWallId.toString();
  }

  getRandomColor(): string {
    const randomNumber = Math.floor(Math.random()*COLORS.length)
    return COLORS[randomNumber];
  }
}
