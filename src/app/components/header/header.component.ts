import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CandidateformComponent } from '../candidateform/candidateform.component';
import { OverlayComponent } from '../overlay/overlay.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from 'express';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})


export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild(CandidateformComponent) candidateFormRef!: CandidateformComponent;
  // handleClick(event: MouseEvent): void {
  //   let el = event.target as HTMLElement;

  //   if (el !== event.currentTarget) {
  //     if (el.nodeName === 'BUTTON') {
  //       if (el.classList.contains('is-active')) {
  //         el.classList.remove('is-active');
  //       } else {
  //         el.classList.add('is-active');
  //       }
  //     }
  //   }
  //   event.stopPropagation();
  // }
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.selectedImage = this.faqList[this.activeIndex].image;
  }

  ngAfterViewInit(): void {
    const scrollers: NodeListOf<Element> = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      this.addAnimation(scrollers);
    }
  }

  pauseAnimation(): void {
    const scrollerInner = document.querySelector('.scroller__inner') as HTMLElement;
    scrollerInner.style.animationPlayState = 'paused';
  }

  resumeAnimation(): void {
    const scrollerInner = document.querySelector('.scroller__inner') as HTMLElement;
    scrollerInner.style.animationPlayState = 'running';
  }

  addAnimation(scrollers: NodeListOf<Element>): void {
    scrollers.forEach((scroller: Element) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", "true");

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner: Element = scroller.querySelector(".scroller__inner")!;
      const scrollerContent: Element[] = Array.from(scrollerInner.children);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item: Element) => {
        const duplicatedItem: Node = item.cloneNode(true);
        (duplicatedItem as Element).setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  // ---------------------------------------------

  faqList = [
    { 
      question: 'TAILORED CANDIDATE SCREENING', 
      answerList: [
        'Language Mastery Assessment',
        'Cultural Adaptability Evaluation',
        'Industry-Specific Expertise Review',
        'Technical Proficiency Analysis',
        'Interpersonal Dynamics Assessment'
      ],
      // image: 'assets/vectorPointers1.mp4'
      image: 'assets/vector1.svg'
    },
    { 
      question: 'COMPREHENSIVE CANDIDATE ASSESSMENT', 
      answerList: [
        'Complete Competency Assessment',
        'Comprehensive Skill Set Analysis',
        'Thorough Qualification Review',
        'In-Depth Aptitude Examination',
        'Robust Performance Evaluation',
        'Total Talent Suitability Check',
        'Comprehensive Fit and Capability Audit'
      ],
      image: 'assets/vector2.svg'
    },
    { 
      question: 'TECHNICAL PROFICIENCY AND COMMUNICATION SKILLS', 
      answerList: [
        'Tailored Technical Proficiency with Strong Communication',
        'Personalized Assistance and Effective Communication',
        'Bespoke Client Assistance Solutions',
        'Proactive Client Support Initiatives'
      ],
      image: 'assets/vector3.svg'
    }
  ];

  activeIndex = 0; // Open the first item by default
  selectedImage: string | null = null; 

  toggleAccordion(index: number): void {
    this.activeIndex = (this.activeIndex === index) ? 0 : index;
    this.selectedImage = (this.activeIndex === index) ? this.faqList[index].image : 'assets/vector1.svg' ;
  }

  displayStyle = "none"; 
  
  openPopup() { 
    this.displayStyle = "block"; 
  } 
  closePopup() { 
    this.displayStyle = "none"; 
  } 

  openDialog(): void {
    const dialogRef = this.dialog.open(OverlayComponent, {
      height: '70vh', 
      width: '100vw' 
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
