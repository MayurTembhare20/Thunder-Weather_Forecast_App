const form = document.querySelector('form');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const card = document.querySelector('.card');

const updateUI = (data) => {

    const { cityDetails, weather } = data;

    details.innerHTML = ` 
    <h5 class="text-light my-2 text-capitalize"><span> ${date} </span></h5>
    <h4 class="my-3 text-info">${cityDetails.EnglishName}</h5>
    <h3 class="my-2 text-dark">${cityDetails.AdministrativeArea.LocalizedName},${cityDetails.Country.EnglishName}</h4>

    <div class="my-2 text-warning">${weather.WeatherText}</div>
    <div class="display-5 my-1 text-light">
      <span>${weather.Temperature.Metric.Value}</span>     
      <span>&deg;C</span> 
      
    </div>    
    `;

    // update day and night img

    const imgSrc = weather.IsDayTime ? 'day.svg' : 'night.svg';
    time.setAttribute('src', imgSrc);

    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
}

// get city data 
const cityData = async (city) => {
    const cityDetails = await getcity(city);
    const weather = await getweather(cityDetails.Key);
    return { cityDetails, weather }
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const city = form.cityName.value.trim();
    form.reset();

    //  get all data
    cityData(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
})

// convert date into required format
a = new Date();
var c = a.getHours();
const timee = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
const op = { weekday:'long',year:'numeric' ,month:'long', day:'numeric'};
date = a.toLocaleDateString(undefined, op);
