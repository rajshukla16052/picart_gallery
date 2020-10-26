import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('h1')
  h1: ElementRef;

  onClick(): void {
    this.h1.nativeElement.scrollIntoView({behavior: 'smooth'}); 
  }

}
