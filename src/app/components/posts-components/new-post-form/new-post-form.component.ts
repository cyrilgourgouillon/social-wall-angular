import { Component, Input, OnInit } from '@angular/core';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { Wall } from 'src/app/types/wall';
import { DataService } from 'src/app/services/data/data.service';
import { WallService } from 'src/app/services/wall/wall.service';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.css']
})
export class NewPostFormComponent implements OnInit {

  concernedWall: Wall;

  constructor(private dataService: DataService, private wallService: WallService, private postService: PostService) {
    this.concernedWall = wallService.getEmptyWall();
    this.dataService.currentWall.subscribe(wall => this.concernedWall = wall);
  }

  faUpload = faUpload;

  ngOnInit(): void {
  }

}
