import { useState } from "react";
export default function MyComponents(){
    const [car, setCar] = useState({
        name:"ford",
        year:2026,
        make:"mustang"
    })
    function handlenameChange(event){
        setCar(c => ({...c, name:event.target.value }));
    }
    function handleyearChange(event){
        setCar(c => ({...c, year:event.target.value }));
    }
    function handlemakeChange(event){
        setCar(c => ({...c, make:event.target.value}));
    }
    return(
    <>
    <p>your Favourite Car is: {car.name} {car.year} {car.make}</p>
    <input type= "text" onChange = {handlenameChange}/>
    <input type= "number" onChange = {handleyearChange}/>
    <input type= "text" onChange = {handlemakeChange}/>
    </>
    )
}