import {useState} from 'react';

const PrimerosEjercicios = (props) => {

    const [message, setMessage]= useState("");

    return (
        <section className="container-fluid text-center text-primary">
        <h1>Hello world</h1>
        <h2>Hello {props.person} {message}!</h2>
        <button className="btn btn-warning mt-2" onClick={()=> setMessage("(from changed state)")}>
            Click me
        </button>
       
        </section>      
        
        
    );
};

export default PrimerosEjercicios;