import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './side-bar-components/title/title.component';
import { StatsComponent } from './side-bar-components/stats/stats.component';
import { WallsComponent } from './side-bar-components/walls/walls.component';
import { WallsListComponent } from './side-bar-components/walls/list/list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PostsComponent } from './posts-components/posts/posts.component';
import { PostComponent } from './posts-components/post/post.component';
import { PostDetailComponent } from './comments-components/post-detail/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    StatsComponent,
    WallsComponent,
    WallsListComponent,
    PostsComponent,
    PostComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
