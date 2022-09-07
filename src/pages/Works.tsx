import { useEffect, useState } from "react";
type Works = {
    id: number,
    work:string,
    author:string,
    image:string,
    museumId:number
  }
export function Works(){
    const [works, setWorks] = useState<Works[]>([])
    useEffect(() => {
      fetch("http://localhost:4500/works")
        .then((resp) => resp.json())
        .then((worksFromServer) => setWorks(worksFromServer));
    }, []);

    return(
        <div>
            <h1>Add A New Piece Of Work</h1>
        <form onSubmit={event => 
           {event.preventDefault()
            const worksCopy = structuredClone(works)
        
              let newWork = {
                work: event.target.work.value,
                author: event.target.author.value,
                image: event.target.image.value,
                museumId: event.target.museumId.value,
              }
              
              worksCopy.push(newWork);
              setWorks(worksCopy)
              event.target.reset();
            }}>
        <div>
        <input id='work' name='work' type='text' placeholder="Work?" required></input>
        <input id='author' name='author' type='text' placeholder="Author?" required></input>
        </div>
        <input type="url" name='image' id='image' placeholder='Image' />
        <input id='museumId' name='museumId' type='text' placeholder="museumId?" required></input>
        <button className='post-btn'onClick={(event)=>{
    fetch("http://localhost:4500/works",{
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({
        work: document.getElementById("work")?.value,
        author: document.getElementById("author")?.value,
        image: document.getElementById("image")?.value,
        museumId: document.getElementById("museumId")?.vaule,
      }
      )
    }) .then(resp => resp.json())
    .then(worksfromserver => setWorks([...works, worksfromserver]))
  }}> POST</button>
      </form>
      {
            works.reverse().map(work => (
              <div className="museums" >
                  <h3>{work.work}</h3>
                  <p>{work.author}</p>
                  <img src={work.image} width="200px"/>
                  <button onClick={()=>{
                      fetch(`http://localhost:4500/works/${work.id}`,{
                        method:"DELETE"
                      }).then((resp) => resp.json())
                      .then(() =>
                    location.reload()
                      )
                  
                    }}> X </button>
              </div>
              
            ))}
        </div>
    )
}