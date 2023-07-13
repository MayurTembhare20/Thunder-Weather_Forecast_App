const key = 'itmrSNlCLvR4pwU2OtFgxlnduGpJDQnm';

//get weather info

const getweather = async (id)=>{
    const url = `http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${key}`
    const responce = await fetch(url);
    const data = await responce.json();
    console.log(data[0])
    return data[0];
}

//get city info 

const getcity = async (city)=>{
    const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${city}`;
    const responce = await fetch(url);
    const data = await responce.json();
    console.log(data[0])
    return data[0];
}


