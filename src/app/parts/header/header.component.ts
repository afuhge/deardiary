import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('openClose', [
    transition(':enter',  [
      style({ transform: 'translateX(-200px)' }),
      animate('0.2s ease-out',
        style({ transform: 'translateX(0px)' }))
    ]),
    transition(':leave', [
      style({ transform: 'translateX(0px)' }),
      animate('0.2s ease-in',
        style({ transform: 'translateX(-200px)' }))
    ]),
  ]),
  ],
})
export class HeaderComponent implements OnInit {
  @ViewChild('menuToggle')
  menuToggle: ElementRef | undefined;

  showMenu: boolean = false;

  constructor(private elementRef: ElementRef) { }


  ngOnInit(): void {
  }

  toggleMenu (): void {
    this.menuToggle?.nativeElement.classList.toggle('active');

    this.showMenu = !this.showMenu;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if(this.showMenu) {
      if (!this.elementRef.nativeElement.contains(event.target)) // or some similar check
        this.toggleMenu();
    }
    }
}
