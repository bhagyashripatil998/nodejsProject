const submitBtn = document.getElementById("submitBtn");
const cityName =document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_rel = document.getElementById('temp_rel');
const temp_status = document.getElementById('temp_status');
const dataHide = document.querySelector('.middle_layer');
const getInfo = async(event)=>{
    event.preventDefault();
   let cityval = cityName.value;
    if(cityval === ""){
        city_name.innerText="Please write the name before search";
        dataHide.classList.add('data_hide');
    }else{
        try{
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=58ebceb4f9eff1a00cb66740361e2744`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp_rel.innerText = arrData[0].main.temp;
            const tempMood =  arrData[0].weather[0].main;
            //temp_status.innerHTML =arrData[0].weather[0].main;
            if(tempMood == "Sunny"){
                temp_status.innerHTML="<i class='fas fa-sun' style='color: yellow'></i>"
             } else if(tempMood == "Clouds"){
                temp_status.innerHTML="<i class='fas fa-cloud' style='color: yellow'></i>"
             }else if(tempMood == "Rainy"){
                temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color: yellow'></i>"
             }else if(tempMood == "Clear"){
                temp_status.innerHTML="<i class='fas fa-sun' style='color: yellow'></i>"
             }
             else{
                temp_status.innerHTML="<i class='fas fa-cloud' style='color: yellow'></i>"
             }
             dataHide.classList.remove('data_hide');
        }catch{
            city_name.innerText="Please enter the city name properly";
            dataHide.classList.add('data_hide');
        }
      
    }
}
submitBtn.addEventListener('click',getInfo);