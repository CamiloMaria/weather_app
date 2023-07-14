import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Weather } from './models/Weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  cityName: string = 'Santo Domingo';
  weather?: Weather;

  constructor(private weatherService: WeatherService){
  };

  ngOnInit(): void {
    this.onSubmit()
  }

  onSubmit(){
    this.getWeather(this.cityName)
    this.cityName = '';
  }

  private getWeather(cityName: string){
    this.weatherService.getWeather(cityName).subscribe({
      next: (response) => {
        this.weather = response;
        console.log(response);
      }
    });
  }
}
