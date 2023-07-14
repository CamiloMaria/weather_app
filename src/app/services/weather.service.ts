import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Weather } from '../models/Weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url: string;
  hostHeaderName: string;
  hostHeaderValue: string;
  keyHeaderName: string;
  keyHeaderValue: string;

  constructor(protected http: HttpClient) {
    this.url = environment.apiUrl;
    this.hostHeaderName = environment.xRapidAPIHostHeaderName;
    this.hostHeaderValue = environment.xRapidAPIHostHeaderValue;
    this.keyHeaderName = environment.xRapidAPIKeyHerderName;
    this.keyHeaderValue = environment.xRapidAPIKeyHerderValue;
  };

  getWeather(cityName: string): Observable<Weather> {
    return this.http.get<Weather>(this.url, {
      headers: new HttpHeaders()
        .set(this.hostHeaderName, this.hostHeaderValue)
        .set(this.keyHeaderName, this.keyHeaderValue),
      params: new HttpParams()
        .set('city', cityName)
    })
  }
}
