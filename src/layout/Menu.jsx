import { Link } from "react-router-dom";

function Menu() {

    return (
        <nav>

            <Link to="/"><button>Home</button></Link>
            <Link to="/meteo"><button>Meteo</button></Link>
        </nav>
    )
}

export default Menu