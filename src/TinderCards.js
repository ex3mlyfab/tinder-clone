import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card'; 
import './tinderCards.css';
import database from './firebase';

function TinderCards() {
    const [people, setPeople] = useState([
        // {
        //     id: 1,
        //     name: 'Stanton Islands',
        //     url: 'https://i.pinimg.com/originals/9b/1f/7f/9b1f7fb26329f0fb1bf6cd9a65063f4f.jpg',
        // },
        // {
        //     id: 2,
        //     name: 'mark Zukerberg',
        //     url: 'https://pbs.twimg.com/media/C8HShn0VwAArWJz.jpg'
        // }
    ]);

    useEffect(() => {
       const unsubscribe = database
            .collection("people")
            .onSnapshot( (snapshot) => 
            setPeople(snapshot.docs.map( (doc) => doc.data() )) 
            );
        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <div>
           <div className="tinderCards__cardContainer">
           { people.map(person =>(
               <TinderCard
               className="swipe"
               key="{person.id}"
               preventSwipe = "{[ 'up', 'down' ]}"
               >
                   <div 
                   style ={{ backgroundImage: `url(${ person.url })`
                 }}
                   className="card">
                        <h3>{ person.name }</h3>
                   </div>
               </TinderCard> 
           ) ) }
           </div>
        </div>
    )
}

export default TinderCards
