import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostModel } from '../posts/post.model';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from '../services/post.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { UserModel } from '../auth/signup/user.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  posts : PostModel[] = [];
  imageurl : string | undefined;
  value:any;

  constructor(private postService : PostService,private _router: Router,public _auth:AuthService) { }

  ngOnInit(): void {
    // let postId = localStorage.getItem("updatePostId");
    // this.postService.getPost(postId)
    // .subscribe((data)=>{
    //   this.posts = JSON.parse(JSON.stringify(data)); //stringify = convert from object to JSON ; parse = convert from JSON to object
    //    this.imageurl = "http://localhost:3000/uploads/";
    // })
    // console.log("UPDATE POST ID "+postId);
    this.postService.getBlogsByCatg('Technology')
    .subscribe((data)=>{
      this.posts = JSON.parse(JSON.stringify(data));
      // console.log(this.posts[0].UserID);
      this.imageurl = "http://localhost:3000/uploads/";
    })
  
  } 
  useridpass(userid:any){
    console.log("userid " +userid);
    localStorage.setItem("forusername",userid);    
  }
  categorySelect(catgselect : any){
    console.log(catgselect);
    this.postService.getBlogsByCatg(catgselect)
    .subscribe((data)=>{
      this.posts = JSON.parse(JSON.stringify(data));
      this.imageurl = "http://localhost:3000/uploads/";
    })
  }
  Addreview(post:any){
    localStorage.setItem("postId",post._id.toString());
    localStorage.setItem("updatePostId",post._id.toString());
    console.log(post._id.toString());
    this._router.navigate(['/blog']);
  }
  // setPostId(post:any){
  //   localStorage.setItem("postId",post._id.toString());
  // }
  searchblog(event:any){
    // console.log(event.target.value.length);
    if(event.target.value.length >2){
      this.value = event.target.value;
      this.postService.getBlogsBySearch(this.value)
      .subscribe((data)=>{
        this.posts = JSON.parse(JSON.stringify(data));
        this.imageurl = "http://localhost:3000/uploads/";
    })
    }
    else{
      this.postService.getBlogsByCatg('Technology')
    .subscribe((data)=>{
      this.posts = JSON.parse(JSON.stringify(data));
      this.imageurl = "http://localhost:3000/uploads/";
    })
    }
  }
}