import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post/post.service';
import { Post } from 'src/app/types/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) {
    this.posts = Array();
  }

  ngOnInit(): void {
      this.getPostOfWall('0');
  }

  getPostOfWall(id: string): void {
    this.postService.getPostOf(id).subscribe(posts => this.posts = posts);
    console.log(this.posts);
  }

}
