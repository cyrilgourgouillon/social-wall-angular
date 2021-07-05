import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-walls',
  templateUrl: './walls.component.html',
  styleUrls: ['./walls.component.css']
})
export class WallsComponent implements OnInit {

  faSearch = faSearch;
  faPlus = faPlus;

  constructor() { }

  ngOnInit(): void {
  }

}
