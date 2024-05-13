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

   // Variable to track speech state
  isSpeaking: boolean = false;
  utterance: SpeechSynthesisUtterance | null = null;


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



  // -------------------- text to speech ---------------


  // Method to speak the sanitized blog content
speakBlogContent(): void {
  if (!this.isSpeaking && this.blogData && this.blogData.content) {
    this.isSpeaking = true;
    const text = this.sanitizeContent(this.blogData.content); // Sanitize content

    if ('speechSynthesis' in window) {
      const synth = window.speechSynthesis;
      synth.cancel(); // Cancel any current speech
      this.utterance = new SpeechSynthesisUtterance(text);

      // Get available voices
      const voices = synth.getVoices();

      // Find a female-sounding voice (you may need to adjust this logic based on available voices)
      const femaleVoice = voices.find(voice => voice.lang === 'en-US' && voice.name.includes('female'));

      // Set the voice to the found female-sounding voice (if available)
      if (femaleVoice) {
        this.utterance.voice = femaleVoice;
      } else {
        console.error("Female voice not available.");
      }

      this.utterance.onend = () => {
        this.isSpeaking = false;
      };
      
      synth.speak(this.utterance);
    } else {
      console.error("Speech synthesis not supported in this browser.");
    }
  }
}

// Method to sanitize HTML content and insert a pause after each full stop
sanitizeContent(content: string): string {
  // Remove HTML tags
  const sanitizedContent = content.replace(/<[^>]+>/g, '');
  // Replace special characters like &#160 with a space
  const cleanedContent = sanitizedContent.replace(/&#?[a-z0-9]+;/g, ' ');
  return cleanedContent;
}


stopSpeaking(): void {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      this.isSpeaking = false;
    }
  }




}