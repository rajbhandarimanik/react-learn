

function WeatherTile(props)
{
    return (
        <>
            <h2>Current Weather Conditions</h2>
            <h3>{props.city}</h3>
            <b>Raining: {props.raining ? "Yes" : "No"}</b><br/>
            <img src="Lightning.jpg"/>
        </>
   
    )
}


export default WeatherTile