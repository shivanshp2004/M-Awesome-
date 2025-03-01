import React, { useContext, useState } from "react";
import { Context } from "./Context";
const Card = () => {
  const context = useContext(Context);
  const URL =
    "https://api.weatherapi.com/v1/current.json?key=571bfa32950a47e7be0165325243007&q=";
  const [temp, setTemp] = useState(0);
  const [feelsLike, setFeelsLike] = useState(0);
  const [region, setRegion] = useState("MP");
  const [cloud, setCloud] = useState(0);
  const [tempType, setTempType] = useState("");
  const [wind, setWind] = useState(0);
  const [temp_f, setTemp_f] = useState(0);
  const [feelsLike_f, setFeelsLike_f] = useState(0);
  const [city, setCity] = useState(context.finalCity);
  const [image, setImage] = useState();
  const [humidity, setHumidity] = useState(0);
  const findTemp = async () => {
    const response = await fetch(`${URL}${context.finalCity}&aqi=yes`);
    const json = await response.json();
    setTemp(json.current.temp_c);
    setTemp_f(json.current.temp_f);
    setFeelsLike(json.current.feelslike_c);
    setFeelsLike_f(json.current.feelslike_f);
    setRegion(json.location.region);
    setTempType(json.current.condition.text);
    setCity(json.location.name);
    setHumidity(json.current.humidity);
    setImage(json.current.condition.icon);
    setCloud(json.current.cloud);
    setWind(json.current.wind_kph);
    if (cloud < 10) setCloud((cloud) => cloud - 10);
  };
  findTemp();
  return (
    <div className="w-full h-[70%] flex justify-center items-center mt-[20px] flex-col max-sm:mt-[60px] max-sm:h-[65%]">
      <p className="text-[2.5rem] font-bold ml-[10px] mb-[20px] max-sm:ml-[45px] max-sm:text-[2rem]">
        {city}, {region}
      </p>
      <div className="w-[450px] h-[550px] bg-[#ef233c] shadow-[0px_0px_5px_8px_rgba(0,0,0,0.15)] max-sm:w-[330px] max-sm:h-[360px] rounded-3xl">
        <div className="flex w-[450px] h-[80px] items-center justify-between max-sm:w-[398px] ">
          <div className="w-[110px] mt-[50px] bg-purple-100 h-[100px] ml-[20px] flex items-center justify-center pd-2 rounded-full p-2 max-sm:w-[110px]">
            <img src={image} className="w-[100px] mb-[-3px] max-sm:w-[100px]" />
          </div>
          <p className="text-[2.0rem] font-bold mt-[40px] mr-[55px] max-sm:mr-[75px] ml-[30px]" >
            {tempType}
          </p>
        </div>
        <div className="ml-[10px]">
          <p className="text-[1.6rem] font-medium ml-[10px] mt-[75px] max-sm:mt-[50px] max-sm:text-[1.4rem]">
            Temperature : {temp}°C / {temp_f}°F
          </p>
          <p className="text-[1.6rem] font-medium ml-[10px] mt-[10px] max-sm:text-[1.4rem]">
            Feels like : {feelsLike}°C / {feelsLike_f}°F
          </p>
          <p className="text-[1.6rem] font-medium ml-[10px] mt-[10px] max-sm:text-[1.4rem] ">
            Humidity : {humidity}
          </p>
          <p className="text-[1.6rem] font-medium ml-[10px] mt-[10px] max-sm:text-[1.4rem]">
            Wind Speed : {wind}kph
          </p>
          <p className="text-[1.6rem] font-medium ml-[10px] mt-[10px] max-sm:text-[1.4rem]">
            Rain Probability : {cloud - 10}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
