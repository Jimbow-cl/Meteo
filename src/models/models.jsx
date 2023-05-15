import { Card } from 'antd';


function Card2(props) {
    let time = `Météo prévu en date du : ${props.dt_txt}`
    let image = `https://openweathermap.org/img/wn/${props.icon}.png`

    return (<Card title={time}>
        <Card.Grid className='grid'><img src={image} /></Card.Grid>
        <Card.Grid className='grid'>Visibilité {props.visibility} mètres</Card.Grid>
        <Card.Grid className='grid'>Temperature Minimum: {props.temp_min}°C</Card.Grid>
        <Card.Grid className='grid'>Temperature Maximum: {props.temp_max}°C</Card.Grid>
        <Card.Grid className='grid'>Vitesse du vent : {props.speed} km/h</Card.Grid>
        <Card.Grid className='grid'>{props.description}</Card.Grid>

    </Card>

    )

}

export default Card2