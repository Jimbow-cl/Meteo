import { useState } from "react";
import Menu from "./layout/Menu";
import { Button, Space } from 'antd';
import Card2 from "./models/models";



function Meteo() {

    const [meteo, setMeteo] = useState([]);


    async function Meteo() {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=43.70&lon=7.27&units=metric&lang=fr&appid=bdb97645ce611289c0abb8c3f467c2ce
        `);
        console.log('reponse', response);
        let donnees = await response.json();
        console.log('données', donnees.list);
        setMeteo(donnees.list)

    }
    const RenderMyArray = () => {
        return meteo.map((item, id) => {

            return (
                <div>
                    <Card2 key={id} dt_txt={item.dt_txt} description={item.weather[0].description} visibility={item.visibility} icon={item.weather[0].icon} temp_min={item.main.temp_min} temp_max={item.main.temp_max} speed={item.wind.speed} />
                </div>
            );
        }
        );
    };

    return (
        <div>

            <Button type="primary" onClick={Meteo} danger>TEST</Button>
            <Menu />

            <div>{RenderMyArray()}</div>
        </div>
    )
}

export default Meteo