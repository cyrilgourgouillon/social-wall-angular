import { Component, OnInit } from '@angular/core';
import { WallService } from 'src/app/services/wall/wall.service';
import { Wall } from 'src/app/types/wall';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class WallsListComponent implements OnInit {

  walls: Wall[] = [];

  constructor(private wallService: WallService) { }

  ngOnInit(): void {
    this.getWalls();
  }

  getWalls(): void {
    this.wallService.getWalls().subscribe(walls => this.walls = walls)
  }

}
