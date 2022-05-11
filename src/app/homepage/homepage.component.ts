import { Component, OnInit } from '@angular/core';
import {Post} from '../model/post';
import {PostService} from '../service/post/post.service';
import {error} from 'protractor';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postService: PostService) { }
  getAllPost(){
    this.postService.getAllPost().subscribe((postFromBe)=>{
      this.posts = postFromBe;
    }, error =>{
      console.log(error);
    });
  }
  ngOnInit() {
this.getAllPost()
  }



}
