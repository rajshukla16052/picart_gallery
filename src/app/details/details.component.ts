import { Component, OnInit , OnDestroy} from '@angular/core';
import { HomeService } from '../service/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Home } from '../index/model/home';
import { Subscription } from 'rxjs';


import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id : string;
  home : Home;
  homesub$: Subscription;
  fdata;
  data;

  
  showForm:boolean;
  show:boolean=true;
  showw:boolean;

  ititle:any;
 /* image: any;/***busc it(this var) also pass files/image mp3 files so */
  constructor(private homeservice: HomeService, private route: ActivatedRoute, private router : Router ) { }
  
 /* editimageform = new FormGroup({
    ititle: new FormControl("", [Validators.required]),
    image: new FormControl("", [Validators.required]),
  });*/

  ngOnInit(): void {}



/* from config */
  showEdit(){
    this.showForm = !this.showForm
    }

  /*  addImage(event) {
      if (event.target.files && event.target.files.length > 0) {
        this.image = event.target.files[0];
        console.log( this.image);
      }
    }*/
  
  /*  editimage(){
      this.id = this.route.snapshot.paramMap.get("id");
      if(this.editimageform.valid){
        let title = this.editimageform.controls.ititle.value;
        let formData = new FormData();
        formData.append("ititle", title);
        formData.append("Image", this.image);

        this.homeservice.editimage(formData, this.id).subscribe(res =>{
          this.editimageform.reset();
          this.router.navigate(["/"]);
        })
      }
    }*/



}
