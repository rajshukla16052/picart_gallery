import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HomeService } from '../../service/home.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {
  gdata
  fdata
  constructor(private imgservice: HomeService , public router: Router) { }

  ngOnInit(): void {
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


}

