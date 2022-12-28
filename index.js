icon=document.getElementById("icon");
degreeCelcious=document.getElementById("degreeCelcious");
minTemp=document.getElementById("minTemp");
maxTemp=document.getElementById("maxTemp");

const degrees=async(city="mathura")=>{
    try {
        // let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6bc2f1eb9`ctysfdg`fd6sadf5b47317e0328a11ab647`;
        let res=await fetch(url);
        let data= await res.json();
        // console.log(data.main.temp);
        // console.log(data.weather[0].main);
        // console.log(data.weather[0].main);
        // console.log(data);
        // console.log(data.main.temp_min);
    
    
    
        degreeCelcious.innerText=`${data.main.temp}`;
        minTemp.innerText=`${data.main.temp_min}`;
        maxTemp.innerText=`${data.main.temp_max}`;
        // if(data.)
        if(data.weather[0].main==="Clear")
        {
            icon.innerHTML=`<i class="fa-solid fa-sun sun">`;
        }
        else{
            icon.innerHTML=`<i class="fa-solid fa-cloud sun"></i>`;
        } 
    } catch (error) {
        document.getElementById("error").innerText="CIty not found";
        document.getElementById("error").style.color="red";
    }
}


// degrees();

btn=document.getElementById("btn");
btn.addEventListener('click',()=>{
    if(document.getElementById("inp").value==="")
    {
        document.getElementById("error").innerText="Enter City name";
        document.getElementById("error").style.color="red";

    }
    else{
        document.getElementById("error").innerText="loading...";
        document.getElementById("error").style.color="green";
        setTimeout(()=>{
            degrees(document.getElementById("inp").value);
        document.getElementById("error").innerText="success";
        document.getElementById("error").style.color="green";
        },2000)

    }
});


