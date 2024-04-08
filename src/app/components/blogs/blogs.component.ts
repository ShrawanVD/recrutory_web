import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent implements OnInit{
  blogPosts: any;

  constructor(private blog:BlogsService) {}

  ngOnInit(): void {
    this.blog.getAllBlogs().subscribe({
      next:(res:any) =>{
        this.blogPosts = res;
      },
      error: (err:any)=> {
        console.error(err);
      }
    })

  }
  
}
