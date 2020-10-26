import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Listing } from "../model/listing";

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  public ROOT_URL = "http://localhost:5000/api/listings";

  constructor(private http: HttpClient) { }

  getListings(): Observable <Listing[]> {
    return this.http.get<Listing[]>(this.ROOT_URL);
  }
}




