import { Injectable } from '@angular/core';
import { WallService } from 'src/app/services/wall/wall.service';
import { BehaviorSubject } from 'rxjs';
import { Wall } from 'src/app/types/wall';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private selectedWallSource = new BehaviorSubject<Wall>(this.wallService.getEmptyWall());
  currentWall = this.selectedWallSource.asObservable();

  constructor(private wallService: WallService) { }

  setSelectedWall(wall: Wall): void {
    this.selectedWallSource.next(wall);
  }

}
