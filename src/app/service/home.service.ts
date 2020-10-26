import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Home } from '../index/model/home';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient,private router:Router,) {}
  public url="http://localhost:8080/"

  uploadImg(data) {
    console.log(data);
    return this.http.post(this.url+'server/uploadImg', data);
  }
/********New code */
uploadImg2(data) {
  console.log(data);
  return this.http.post(this.url+'server/uploadImg2', data);
}

uploadImg3(data) {
  console.log(data);
  return this.http.post(this.url+'server/uploadImg3', data);
}

uploadImg4(data) {
  console.log(data);
  return this.http.post(this.url+'server/uploadImg4', data);
}

uploadContactUs(data){
  console.log(data);
  return this.http.post<any>(this.url+'server/uploadContactUs', data);
}
/******* */
  getuploadImg() {
    return this.http.get(this.url+'server/getuploadImg');
  }

  getlargeimg(id : string){
    return this.http.get<Home>(this.url+'server/getuploadImg/'+`${id}`);
  }

  editimage(image, id: string){
    return this.http.put<any>(this.url+'server/getuploadImg/'+`${id}`, image);
  }

  home:Home;
h
  setter(id){
    this.h=id._id
    this.router.navigateByUrl('admin/updateform/'+`${this.h}`)
    //console.log(this.home) undefined
    console.log('succefully deleted', this.h)
  }

}
