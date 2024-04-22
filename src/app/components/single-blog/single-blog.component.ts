import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogsService } from '../../services/blogs.service';
import { Meta } from '@angular/platform-browser';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrl: './single-blog.component.css'
})
export class SingleBlogComponent implements OnInit{

  constructor(private activeRoute:ActivatedRoute,private blog:BlogsService,private router:Router,private meta: Meta,private sanitizer: DomSanitizer) {}
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

  // get blog by its id 
  getBlogById(id: any){
    this.blog.getOneBlog(id).subscribe({
      next:(res:any) =>{
        this.blogData = {
          ...res,
          // content: this.sanitizer.bypassSecurityTrustHtml(res.content)
        }
      },
      error: (err:any)=> {
        console.error(err);
      }
    })
  }

  // changing blog from explore more section
  openBlog(id: any){
    this.activePostId = id;
    this.router.navigate(['blogs/',id]);
    this.blog.getOneBlog(id).subscribe({
      next:(res:any) =>{
        this.blogData = res;
      },
      error: (err:any)=> {
        console.error(err);
      }
    })
  }

  // for showing only two lines of content
  trimContent(content: string, maxLength: number): string {
    if (!content) return content;
    if (content.length <= maxLength) return content;
    return content.substr(0, maxLength) + '...'; 
  }
  

}
