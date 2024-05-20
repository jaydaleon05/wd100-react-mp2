import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
const AboutCats = () => {

    let x = 0;
    let [allCats, setCats] = useState([]);
    useEffect(() =>{
        let catList = async () => {
            let name = ' ';
            
            let cat = await fetch('https://api.api-ninjas.com/v1/cats?name=' + name + '&offset=0',
            {
                    method: 'GET',
                    headers: {
                        'X-Api-Key': '0UN4e5+JBhBoEa49kMecDg==V6pJx5SoWyo24bfs'
                    }
            }
        );
         if (!cat.ok){
            throw new Error(`HTTP error! status: ${cat.status}`);
         }
         let itemResults = await cat.json();
         console.log(itemResults);
         setCats(itemResults);
        }
        catList();
    }, []);

    return ( 
        <>
            {
                allCats.map((data,index) =>

                    <div className="col-md-4">
                    <div className="card" id="pusacard">
                        <img src={data.image_link} className="card-img-top w-100 object-fit" alt="..." id="pusa"></img>
                        <div className="card-body">
                            <h5 className="card-title">{data.name}</h5>
                               <Link to="/fulldetails" className="btn btn-primary" state={index}>
                                    Learn More
                               </Link> 
                        </div>
        
                    </div>
        
                </div>     
                )

            }
        </>

     );
}
 
export default AboutCats;
