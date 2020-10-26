import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { HomeService } from "src/app/service/home.service";

@Component({
  selector: "app-addhome",
  templateUrl: "./addhome.component.html",
  styleUrls: ["./addhome.component.css"],
})
export class AddhomeComponent implements OnInit {
  catForm: FormGroup;
  image: any;/***busc it(this var) also pass files/image mp3 files so */

  constructor(private fb: FormBuilder, private imgservice: HomeService) {
    this.catForm = this.fb.group({
      title: new FormControl("", [Validators.required]),
      image: new FormControl("", [Validators.required]),
      //for category
      category: new FormControl("", [Validators.required]),
    });
  }


  ngOnInit(): void {}

  addImage(event) {
    if (event.target.files && event.target.files.length > 0) {
      this.image = event.target.files[0];
      console.log( this.image);
    }
  }

  addCat() {
    let title = this.catForm.controls.title.value;
    //for category
    let category = this.catForm.controls.category.value;

    let formData = new FormData();
    formData.append("ititle", title);
    formData.append("Image", this.image);//let upload = multer({ storage: storage }).single("Image");

    //for category
    formData.append("catgry", category);

    console.log(formData);
    this.imgservice.uploadImg(formData).subscribe((res) => {
      console.log(res);
      this.catForm.reset();
    });
  }

  /****new code */
  addCat2() {
    let title = this.catForm.controls.title.value;
    //for category
    let category = this.catForm.controls.category.value;

    let formData = new FormData();
    formData.append("ititle", title);
    formData.append("Image", this.image);//let upload = multer({ storage: storage }).single("Image");

    //for category
    formData.append("catgry", category);

    console.log(formData);
    this.imgservice.uploadImg2(formData).subscribe((res) => {
      console.log(res);
      this.catForm.reset();
    });
  }

  addCat3() {
    let title = this.catForm.controls.title.value;
    //for category
    let category = this.catForm.controls.category.value;

    let formData = new FormData();
    formData.append("ititle", title);
    formData.append("Image", this.image);//let upload = multer({ storage: storage }).single("Image");

    //for category
    formData.append("catgry", category);

    console.log(formData);
    this.imgservice.uploadImg3(formData).subscribe((res) => {
      console.log(res);
      this.catForm.reset();
    });
  }

  addCat4() {
    let title = this.catForm.controls.title.value;
    //for category
    let category = this.catForm.controls.category.value;

    let formData = new FormData();
    formData.append("ititle", title);
    formData.append("Image", this.image);//let upload = multer({ storage: storage }).single("Image");

    //for category
    formData.append("catgry", category);

    console.log(formData);
    this.imgservice.uploadImg4(formData).subscribe((res) => {
      console.log(res);
      this.catForm.reset();
    });
  }
  /***** */
}




//https://glow.pixpa.com/home
//https://webdevtrick.com/html-css-navigation-bar/