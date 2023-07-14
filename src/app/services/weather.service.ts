import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url: string;
  hostHeaderName: string;
  hostHeaderValue: string;
  hostKeyName: string;
  hostKeyValue: string;


  constructor(protected http: HttpClient) {
    this.url = environment.apiUrl;
    this.hostHeaderName = environment.xRapidAPIHostHeaderName;
    this.hostHeaderValue = environment.xRapidAPIHostHeaderValue;
    this.hostKeyName = environment.xRapidAPIKeyHerderName;
    this.hostKeyValue = environment.xRapidAPIKeyHerderValue;
  }

  getWeather(cityName: string){
    return this.http.get(this.url, {
      headers: new HttpHeaders()
        .set(this.hostHeaderName, this.hostHeaderValue)
        .set(this.hostKeyName, this.hostKeyValue),
      params: new HttpParams()
        .set('city', cityName)
    })
  }
}
