import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { WallService } from 'src/app/services/wall/wall.service';
import { Wall } from 'src/app/types/wall';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class WallsListComponent implements OnInit {

  walls: Wall[] = [];
  @Output() selectWallEvent = new EventEmitter<Wall>();

  constructor(private wallService: WallService, private dataService: DataService) { }

  ngOnInit(): void {
    this.getWalls();
  }

  getWalls(): void {
    this.wallService.getWalls().subscribe(walls => this.walls = walls)
  }

  onSelectWall(wall: Wall): void {
    this.dataService.setSelectedWall(wall);
    this.selectWallEvent.emit(wall)
  }

}
