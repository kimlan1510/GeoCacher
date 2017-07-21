# _GeoCacher_

#### _Angular2 cli & Firebase practice project at Epicodus_

#### By _**Kimlan Nguyen**_

## Description

_This program uses angular 2 framework and Google geocode api to convert an address to coordinates and vice versa._
_This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0._

## Specifications

 + Be able to create a user.
 + Be able to create a cache.
 + Be able to convert an address to longitude and latitude.
 + Be able to convert longitude and latitude to an address.
 + Be able to mark when a cache is found.



## Setup/Installation Requirements
* _This program requires node.js, npm and typescript to run. Follow the instruction here https://www.learnhowtoprogram.com/javascript/angular-js/typescript-introduction-and-installation to install them onto your system._
* _Clone this file using Git. On OSX, open terminal (open Windows PowerShell on Windows), and type in the following: git clone [url], where [url] is the github repository url._
* _follow this link https://developers.google.com/maps/documentation/geocoding/start#get-a-key to obtain geocode api key._
* _In the app folder of this project, create the file 'api-keys.ts'._
* _Copy the following code and paste it in api-keys.ts:_
* export const geoKey = {apiKey};
* where 'apiKey' is your geocode api key
* _Sign up for a Firebase account at firebase.google.com._
* _Visit your Firebase Console and click Add project._
* _Create a new project_
* _Click 'Add Firebase to your web app' to obtain credentials._
* _In the app folder of this project, create the file 'firebase-api-keys.ts'._
* Copy the following code and paste it in firebase-api-keys.ts:
* export const masterFirebaseConfig = {
      apiKey: "xxxx",
      authDomain: "xxxx.firebaseapp.com",
      databaseURL: "https://xxxx.firebaseio.com",
      storageBucket: "xxxx.appspot.com",
      messagingSenderId: "xxxx"
    };
* where "xxx" is the specific Firebase credential you obtained earlier.
* _In terminal or Windows PowerShell, navigate to the project folder, ex: cd Desktop/ClubManager_
* _Enter the following:_
* _npm install_
* _bower install_
* _ng serve_
* _Navigate to `http://localhost:4200/`._

## Known Bugs

_Leaving the address, longitude, latitude fields blank returns errors_

## Support and contact details

_Kimlan1510@gmail.com_

## Technologies Used

* _HTML_
* _CSS_
* _npm_
* _bower_
* _Typescript_
* _Angular2 cli_
* _Firebase_


### License

*This program is licensed under MIT License.*

Copyright (c) 2017 **_Kimlan Nguyen_**
