export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.weather = data.weather[0].main
    this.weatherDesc = data.weather[0].description
    this.icon = data.weather[0].icon
  }

  weatherConversion(){
    let temp = ((this.kelvin - 273.15) * 1.8) + 32
    return Math.floor(temp)
  }

  get WeatherTemplate(){
    return /*html*/`
    <div class="row weatherIcon">
      <div class="col-4">
    
      </div>
      <div class="col-8 d-flex align-items-center justify-content-end">
        <h5 class="text-light mr-1">${this.city}</h5>
        <h5 class="text-light">${this.weatherConversion()}&deg;</h5>
        <img class="bw img-fluid my-auto" src="http://openweathermap.org/img/w/${this.icon}.png" alt=""/>
      </div>
      
    </div>
    `
  }
}
