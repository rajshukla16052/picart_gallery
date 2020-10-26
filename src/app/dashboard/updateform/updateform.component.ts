import { Component, OnInit,OnDestroy } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Home } from '../../index/model/home';
import { Subscription } from 'rxjs';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent implements OnInit, OnDestroy {
  id : string;
  home : Home;
  homesub$: Subscription;
  fdata;
  data;
  image: any;/***busc it(this var) also pass files/image mp3 files so */
  constructor(private homeservice: HomeService, private route: ActivatedRoute, private router : Router) { }

  editimageform = new FormGroup({
    ititle: new FormControl("", [Validators.required]),
    image: new FormControl("", [Validators.required]),
    //for category
    catgry: new FormControl("", [Validators.required])
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.homesub$= this.homeservice.getlargeimg(this.id).subscribe(res =>{
      this.home = res;
      console.log("=>",res)
      this.fdata=this.home;
      this.data=this.fdata.data;
  })
  }

  ngOnDestroy(): void{
    this.homesub$.unsubscribe();
  }

  addImage(event) {
    if (event.target.files && event.target.files.length > 0) {
      this.image = event.target.files[0];
      console.log( this.image);
    }
  }

  editimage(){
    this.id = this.route.snapshot.paramMap.get("id");
    if(this.editimageform.valid){
      let title = this.editimageform.controls.ititle.value;
      //for category
      let category = this.editimageform.controls.catgry.value;

      let formData = new FormData();
      formData.append("ititle", title);
      formData.append("Image", this.image);
      
      //for category
      formData.append("catgry", category);

      this.homeservice.editimage(formData, this.id).subscribe(res =>{
        this.editimageform.reset();
        this.router.navigate(["admin/editform"]);
      })
    }
  }

}
