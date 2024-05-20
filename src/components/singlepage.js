import {useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";


const FullDetails = () => {
    let location = useLocation();
    let item = Number(location.state);

    let [data, setCats] = useState([]);
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
         setCats(itemResults[item]);
        }
        catList();
    }, []);




    return ( 
        <>
                <div className="col-md-12">
                    <img src={data.image_link} alt="" className="w-100" />    
                    <div className="card-body">
                        Name:
                        <h1>{data.name}</h1>
                        Origin:
                        <h3>{data.origin}</h3>
                        Size:
                        <h3>{data.length}</h3>
                    </div>  
                    <Link to="/" className="card-footer bg-transparent border-0">
                        <Button variant="outline-primary text-dark fw-bold">Go back to selection</Button>
                    </Link>             
                </div>      
        
        </>

     );

    }
export default FullDetails;