import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HomeService } from '../../service/home.service'
import {Router} from '@angular/router';
import { Observable,from } from 'rxjs';
import { map, toArray } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-portraits',
  templateUrl: './portraits.component.html',
  styleUrls: ['./portraits.component.css']
})
export class PortraitsComponent implements OnInit {

  gdata
  fdata
  public url="http://localhost:8080/"
  alldata:Observable<any>;
  //alldata;
  portrait:Observable<any>;
  //portrait
  allProducts:Observable<any>;
  constructor(private imgservice: HomeService , public router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.allProducts = this.http.get(this.url+'server/getuploadImg');  
    this.portrait = this.allProducts.pipe(
      map(res =>{
        this.gdata= res.data.filter(portraitdata =>{return portraitdata.catgry=="portrait"})
         console.log(this.gdata)
        console.log(this.portrait)
         
      })
    )
  }

  @ViewChild('h1')
  h1: ElementRef;

  onClick(): void {
    this.h1.nativeElement.scrollIntoView({behavior: 'smooth'}); 
  }

  fullscreen(){
    document.querySelector("body").requestFullscreen({ navigationUI: "auto" })
  }

}
