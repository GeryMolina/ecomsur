import React, { useState, useEffect } from 'react';
import '../App.css'

const Interfaz = () => {
    const [character, setCharacter] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        apiCall()
    }, []);

    const apiCall = async () => {
        const data = await fetch('https://rickandmortyapi.com/api/character');
        const charac = await data.json();
        setCharacter(charac.results);
    }

    const handleClick = () => {
        setShow(true)
    }

    return (
        <div className='container'>
            <button onClick={handleClick}>Click Me!</button>

            { show ?
            <div className='card'>
                {
                    character.map(item => (
                        <div key={item.id}>
                             <h2>{item.name}</h2>
                            <img src={item.image} alt="jojo" />
                           
                            
                        </div>

                    ))
                }
            </div> : null}

        </div>
    )

}

export default Interfaz;