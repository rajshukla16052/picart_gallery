import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Home } from '../../index/model/home';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {
  gdata
  fdata


  constructor(public imgservice:HomeService,private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.imgservice.getuploadImg()
    .subscribe(res=>{
      console.log(res)
      this.gdata=res;
      this.fdata=this.gdata.data;
    })

  }

//  ngOnDestroy(): void{
//    this.homesub$.unsubscribe();
//  }
//
//
//  removeimage(){
//    this.id = this.route.snapshot.paramMap.get("id");
//    this.imgservice.deleteimage(this.id).subscribe(res =>{
//      console.log("succefully delete", res);
//      this.router.navigate(["admin/editform"]);
//    }) 
//  }All commets not working

}
