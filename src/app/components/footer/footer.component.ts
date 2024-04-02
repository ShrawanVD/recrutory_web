import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor() { }
  

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

}




