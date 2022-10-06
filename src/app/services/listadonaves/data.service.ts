import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InfoApiResponse} from "../../models/infoApiNave.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:string ="https://swapi.dev/api/starships/";

  constructor(private _http: HttpClient) { }

  getEntries():Observable<InfoApiResponse>{
    return this._http.get<InfoApiResponse>(this.url);
  }
}
