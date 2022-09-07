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
             {
            works.map(work => (
              <div className="works">
                  <h3>{work.work}</h3>
                  <p>{work.author}</p>
                  <img src={work.image} width="300px" />
              </div>
            ))}
        </div>
    )
}