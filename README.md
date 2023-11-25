# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## DELIVERABLES
A. Angular Structure:
-------------------------------
The application follows a standard Angular project structure with components, services, and modules.
Separation of Concerns:
-------------------------------
The WeatherComponent is responsible for the user interface and handling user interactions.
The WeatherService is responsible for making API requests to OpenWeatherMap.

-------------------------------
Responsiveness:

The HTML and CSS are designed to be responsive using media queries.
The layout adjusts based on screen width, ensuring a good user experience on various devices.

-------------------------------
User Input:
Users can enter a city in the input field, and the app fetches weather data for that city.

-------------------------------
API Key Security:

The OpenWeatherMap API key is stored in the WeatherService. It's crucial to keep API keys secure, and in a production scenario, you might consider server-side handling or environment variables.
