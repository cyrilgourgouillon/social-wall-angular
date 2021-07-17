import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { WallService } from 'src/app/services/wall/wall.service';
import { Wall } from 'src/app/types/wall';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-walls',
  templateUrl: './walls.component.html',
  styleUrls: ['./walls.component.css']
})
export class WallsComponent implements OnInit {

  faSearch = faSearch;
  faPlus = faPlus;

  @Output() newWallEvent = new EventEmitter<Wall>();

  constructor(private wallService: WallService, private dataService: DataService) { }

  ngOnInit(): void {
  }

  addWall(name: Wall["Name"]): void {
    name = name.trim();
    if(!name)
      return;

    const newWall: Wall = {
      Id: this.getLastWallId(),
      Name: name,
      Description: `The greatest place to discuss about ${name}.`,
      Color: this.getRandomColor(),
      CreatedDate: new Date(Date.now()),
      Posts: []
    }
    this.wallService.addWall(newWall);
    this.dataService.setSelectedWall(newWall);
    this.newWallEvent.emit(newWall)
  }

  private getLastWallId(): string {
    return this.wallService.getNewWallId();
  }

  private getRandomColor(): string {
    return this.wallService.getRandomColor();
  }

}
