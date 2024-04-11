import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Blogs } from '../models/blogs.model';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http:HttpClient) { }

  getAllBlogs(){
    return this.http.get<any>("https://blogsbackend-l09l.onrender.com/api/blogs").pipe(
      map(response => {
        const postsArray: Blogs[] = [];
        for (const postId in response) {
          if (response.hasOwnProperty(postId)) {
            const post = response[postId];
            const blogPost: Blogs = {
              _id: post._id,
              title: post.title,
              date: post.date,
              imageUrl: post.imageUrl,
              content: post.content
              // imageUrl2: post.imageUrl2,
              // content2: post.content2
            };
            postsArray.push(blogPost);
          }
        }
        return postsArray;
      })
    );
  }

  getOneBlog(id: any){
    return this.http.get(`https://blogsbackend-l09l.onrender.com/api/blogs/${id}`);
  }

}
