# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

Weather App is a weather forecast application developed using Angular. It allows users to retrieve accurate weather information for a specific location using the RapidAPI weather API By  Jamiatul Hamidah.

## Installation

1. Make sure you have Node.js and npm installed on your machine.
2. Clone this repository: `git clone https://github.com/CamiloMaria/weather_app`
3. Navigate to the project directory: `cd weather_app`
4. Install project dependencies: `npm install`


## Usage

1. Run the application locally: `ng serve`
2. Open your browser and go to `http://localhost:4200`
3. Enter the desired location in the search field and click the "Search" button.
4. The application will display the current temperature, minimum temperature, maximum temperature, humidity, and wind speed in Celsius.

## Project Structure

The "weather_app" project has the following main directory structure:

- `src/`: Contains the project's source files.
  - `app/`: Contains the components, services, and other resources related to the application.
  - `assets/`: Contains static files such as images or configuration files.
  - `environments/`: Contains environment configuration files.

## API Usage

This application utilizes the RapidAPI weather API to retrieve weather data for the specified location. To access the weather API, you need to enter this link: https://rapidapi.com/hamidahjamiatul/api/weather-api99, sign up and subscribe.

In src/environments/environment.prod.ts you have to change the X-RapidAPI-Key with your key. You can find that key in the Weather API, Header Parameters.

## Contribution

We welcome contributions to my project! If you would like to contribute, please follow these steps:

1. Fork this repository.
2. Create a branch for your feature or bug fix: `git checkout -b branch-name`
3. Make your changes and commit them with descriptive messages.
4. Push your changes to the remote repository: `git push origin branch-name`
5. Open a pull request on GitHub.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
