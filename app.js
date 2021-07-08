const apiKey = '66e6c5cd7f3f361758e8828eb99d4d07';
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = city => {
    const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then((data=>{
            updateUI(data)         
        }) )
        
}


const inputBtn=document.getElementById("inputBtn").addEventListener("click",()=>{
    const inputfild=document.getElementById("inputfild").value;
    getWeatherData(inputfild)
})


const updateUI=(data)=>{
     document.getElementById("cityNm").innerText=data.name||"Unknown Location!";
     document.getElementById("cityDeg").innerText=data.main.temp;
     document.getElementById("watherNm").innerText=data.weather[0].main;
     document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
     document.getElementById("inputfild").value=""
}
