import React from 'react';
import {Link} from 'react-router-dom';

function DogList({dogs}) {
    return (
        <div>
            <h1>Dogs!</h1>
            <h2>click on a dog for more info</h2>
            <ul>
                {dogs.map(dog => (
                    <li key = {dog.name}>
                        <img src = {dog.src} alt = {dog.name} />
                        <Link to = {`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DogList;