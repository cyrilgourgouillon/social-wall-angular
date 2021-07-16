import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { PostService } from 'src/app/services/post/post.service';
import { WallService } from 'src/app/services/wall/wall.service';
import { Post } from 'src/app/types/post';
import { Wall } from 'src/app/types/wall';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  selectedWall: Wall;

  constructor(private wallService: WallService, private postService: PostService, private dataService: DataService) {
    this.posts = Array();
    this.selectedWall = wallService.getEmptyWall();
  }

  ngOnInit(): void {
    this.dataService.currentWall.subscribe(wall => this.selectedWall = wall)
    this.getPostOfWall(this.selectedWall);
  }

  getPostOfWall(wall: Wall): void {
    this.postService.getPostOf(wall).subscribe(posts => this.posts = posts);
  }

}
