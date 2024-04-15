import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrl: './single-blog.component.css'
})
export class SingleBlogComponent implements OnInit{

  constructor(private activeRoute:ActivatedRoute,private blog:BlogsService) {}
  blogId : any;
  blogData: any;
  blogTitle :any;
  activePostId: any;

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params =>{
      this.blogId = params['id'];
      this.getBlogById(this.blogId);
    })
    this.blog.getAllBlogs().subscribe({
      next:(res:any) =>{
        this.blogTitle = res;
      },
      error: (err:any)=> {
        console.error(err);
      }
    })
  }

  getBlogById(id: any){
    this.blog.getOneBlog(id).subscribe({
      next:(res:any) =>{
        console.log(res)
        this.blogData = res;
      },
      error: (err:any)=> {
        console.error(err);
      }
    })
  }

  openBlog(id: any){
    this.activePostId = id;
    this.blog.getOneBlog(id).subscribe({
      next:(res:any) =>{
        console.log(res)
        this.blogData = res;
      },
      error: (err:any)=> {
        console.error(err);
      }
    })
  }

}
