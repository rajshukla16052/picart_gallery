import { Component, OnInit } from '@angular/core';
import { ListingService } from '../service/listing.service';
import { Listing } from '../model/listing';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-all-listing',
  templateUrl: './all-listing.component.html',
  styleUrls: ['./all-listing.component.css']
})


export class AllListingComponent implements OnInit {
   hh;
  constructor(private listingService: ListingService) {}

  ngOnInit(){
    this.listingService.getListings().subscribe(res =>{
      console.log(res)
      this.hh=res;
      
    });

  }

}
