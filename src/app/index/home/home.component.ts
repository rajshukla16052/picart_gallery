import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { HomeService } from '../../service/home.service'
import {Router} from '@angular/router';
//import mediumZoom from 'medium-zoom';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  //loader=true;
  gdata
  fdata

  //images = [];
  //slideIndex = 0;
  constructor(private imgservice: HomeService , public router: Router) {}

  ngOnInit():void{
    this.imgservice.getuploadImg()
    .subscribe(res =>{
      console.log(res)
      this.gdata=res;
      this.fdata=this.gdata.data;
      //this.loader= false;
    });
  }
  @ViewChild('h1')
  h1: ElementRef;

  onClick(): void {
    this.h1.nativeElement.scrollIntoView({behavior: 'smooth'}); 
  }
  
  /*
  clickFunction() {
    alert("clicked me!");
  }
  openModal() {
    document.getElementById('imgModal').style.display = "block";
  }

  closeModal() {
    document.getElementById('imgModal').style.display = "none";
    document.getElementById('z').style.transform="scaleX(1)";
  }

   plusSlides(n) {
    this.shoSlides(this.slideIndex += n);
    document.getElementById('z').style.transform="scaleX(1)";
  }

   currentSlide(n) {
    this.shoSlides(this.slideIndex = n);
  }
  zoo(){
    const a=document.getElementById('z');
    a.style.transform="scaleX(2)";
    a.style.transition="1s"
    
  }

  shoSlides(slideIndex);
   shoSlides(n) {
    let i;
    const slides = document.getElementsByClassName("img-slides") as HTMLCollectionOf<HTMLElement>;
    
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[this.slideIndex-1].style.display = "block";
  }*/

  /*
  zz(){
    const zoom = mediumZoom('.zz',{
  })
  this.router.navigateByUrl('/');
  setTimeout(()=>{
    zoom.detach();
  },);
  }
  zzz(){
    const zoom = mediumZoom('.zzz',{
  })
  this.router.navigateByUrl('/');
  setTimeout(()=>{
    zoom.detach();
  },);
  }

  zzzz(){
    const zoom = mediumZoom('.zzzz',{
  })
  this.router.navigateByUrl('/');
  setTimeout(()=>{
    zoom.detach();
  },); 
  }


  zzzzz(){
    const zoom = mediumZoom('.zzzzz',{
    
  })
  this.router.navigateByUrl('/');
  setTimeout(()=>{
    zoom.detach();    
  },); 
  }   */




}
