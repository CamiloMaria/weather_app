import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Weather } from '../models/Weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(protected http: HttpClient) {

  };

  getWeather(cityName: string): Observable<Weather> {
    return this.http.get<Weather>(environment.apiUrl, {
      headers: new HttpHeaders()
        .set(environment.xRapidAPIHostHeaderName, environment.xRapidAPIHostHeaderValue)
        .set(environment.xRapidAPIKeyHerderName, environment.xRapidAPIKeyHerderValue),
      params: new HttpParams()
        .set('city', cityName)
    })
  }
}
