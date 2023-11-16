# React Application

## Introduction
A React App that has two views, i.e. 'About Me' and 'My Town'

**1st Page: "About me"**    
- It displays my name as the headline
- First paragraph about myself
- Second paragraph about why I joined the MCDA program

**2nd Page: "My Town"**
- It displays the name and image of the city where I currently live, i.e. Halifax
- It also displays the current temperature of the city, i.e. Halifax, with a button "Change to °F" to change the temperature value from °C to °F and from °F to °C 

**Features**
- **Navigation**
    - Using React Router, I have added navigation between two views/pages, i.e. when "About Me" is clicked, the 1st Page is shown, and when "My Town" is clicked, the 2nd Page is shown
  
- **Current Weather**
    - There is an API call to OpenWeatherMap to fetch current weather data of Halifax(using the following latitude and longitude coordinates - ["44.651070","-63.582687"])
    - As the temperature value is returned in Kelvin, I first converted it to °C, then that value is populated on UI, and based on the logic mentioned below, the image is displayed on UI
        - cold.png if the temperature is 10°C or lower
        - mild.png if the temperature is higher than 10°C  but lower than 20°C
        - sunny.png if the temperature is higher than 20°C
    - There is a button "Change to °F" that, if clicked, will display the temperature in Fahrenheit and will display "Change to °C" and when clicked again, it will display the temperature back in Celsius.

## Important 
To run the project, run the "npm install" command in the terminal before running the "npm start" command
