import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { HomeService } from "src/app/service/home.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  catForm: FormGroup;
  constructor(private fb: FormBuilder, private imgservice: HomeService) {
    this.catForm = this.fb.group({
      firstname: new FormControl("", [Validators.required]),
      lastname: new FormControl("", [Validators.required]),
      Email:new FormControl("", [Validators.required]),
      description:new FormControl("", [Validators.required]),
    });
   }

  ngOnInit(): void {
    this.newcatForm()
  }

  newcatForm(){
    if(this.catForm.valid){
      this.imgservice.uploadContactUs(this.catForm.value).subscribe(res =>{
        this.catForm.reset();
      })
    }
  }

  addContactUs() {
    let firstname = this.catForm.controls.firstname.value;
    let lastname = this.catForm.controls.lastname.value;
    let Email = this.catForm.controls.Email.value;

    let formData = new FormData();
    formData.append("fname", firstname);
    formData.append("lname", lastname);
    formData.append("email", Email);
    console.log(formData);
    this.imgservice.uploadContactUs(formData).subscribe((res) => {
      console.log(res);
    });
  }

}
