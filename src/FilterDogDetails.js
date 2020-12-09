import React from 'react';
import { useParams } from 'react-router-dom';
import DogDetails from './DogDetails';

// useParams returns an object of key/value pairs of URL parameters

function FilterDogDetails({dogs}){
    const {name} = useParams(dogs);

    if (name){
        const currentDog = dogs.find(
            dog => dog.name.toLowerCase() === name.toLowerCase()
        )
        return <DogDetails dog = {currentDog} />
    }
}

export default FilterDogDetails;