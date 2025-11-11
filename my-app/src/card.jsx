import reactLogo from "./assets/react.svg";
export default function Card(){
    return(
        <div className="card">
            <img className = "card-img" src = {reactLogo} alt = "react-logo">

            </img>
            <h2>This is a react logo</h2>
            <p>I am learning React</p>

        </div>
    )
}