import { Component, OnInit, ViewChild } from '@angular/core';
import { CandidateformComponent } from '../candidateform/candidateform.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})


export class HeaderComponent implements OnInit {

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
  constructor() {}

  ngOnInit(): void {
    this.selectedImage = this.faqList[this.activeIndex].image;
  }

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
      image: 'assets/vector3.png'
    }
  ];

  activeIndex = 0; // Open the first item by default
  selectedImage: string | null = null; 

  toggleAccordion(index: number): void {
    this.activeIndex = (this.activeIndex === index) ? -1 : index;
    this.selectedImage = (this.activeIndex === index) ? this.faqList[index].image : null;
  }

  displayStyle = "none"; 
  
  openPopup() { 
    this.displayStyle = "block"; 
  } 
  closePopup() { 
    this.displayStyle = "none"; 
  } 
}
