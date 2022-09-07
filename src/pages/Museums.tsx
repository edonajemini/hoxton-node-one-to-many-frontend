import { useEffect, useState } from "react";
type Museums = {
    id: number,
    name:string,
    type:string,
    location:string
  }
export function Museums(){
    const [museums, setMuseums] = useState<Museums[]>([])
    useEffect(() => {
      fetch("http://localhost:4500/museums")
        .then((resp) => resp.json())
        .then((museumsFromServer) => setMuseums(museumsFromServer));
    }, []);

    return(
        <div>
            <h1>Add New Museum</h1>
        <form onSubmit={event => 
           {event.preventDefault()
            const museumsCopy = structuredClone(museums)
        
              let newMuseum = {
                name: event.target.name.value,
                type: event.target.type.value,
                location: event.target.location.value,
              }
              
              museumsCopy.push(newMuseum);
              setMuseums(museumsCopy)

              event.target.reset();
            }}>
        <div>
        <input id='name' name='name' type='text' placeholder="Name?" required></input>
        <input id='type' name='type' type='text' placeholder="Type?" required></input>
        </div>
        <input id='location' name='location' type='text' placeholder="Location?" required></input>
        <button className='post-btn'onClick={(event)=>{
    fetch("http://localhost:4500/museums",{
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: document.getElementById("name")?.value,
        type: document.getElementById("type")?.value,
        location: document.getElementById("location")?.value
      }
      )
    }) .then(resp => resp.json())
    .then(museumsfromserver => setMuseums([...museums, museumsfromserver]))
  }}> POST</button>
      </form>
      {
            museums.map(museum => (
              <div className="museums" >
                  <h3>{museum.name}</h3>
                  <p>{museum.type}</p>
                  <p>{museum.location}</p>
              </div>
              
            ))}
        </div>
    )
}