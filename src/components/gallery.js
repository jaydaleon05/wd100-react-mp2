import image1 from "../img/brit.png";
import image2 from "../img/ai-generated-8620359_1280.png";
import image3 from "../img/cat-1647775_1280.jpg";
import image4 from "../img/cat-1045782_1280.jpg"
import image5 from "../img/cat-2083492_1280.jpg"
import image6 from "../img/european-shorthair-8601492_1280.jpg"

const Gallery = () => {
    return ( 
        <>

            <div className="container">
                <div className="row g-3 mt-0 mb-2">
                    <div className="col-md-4">
                        <img src={image1} alt="" className="w-100" />
                    </div>
                    <div className="col-md-4 ">
                        <img src={image2} alt="" className="w-100" />
                    </div>
                    <div className="col-md-4 ">
                        <img src={image3} alt="" className="w-100"  />
                    </div>
                    <div className="col-md-4 ">
                        <img src={image4} alt="" className="w-100"  />
                    </div>
                    <div className="col-md-4 ">
                        <img src={image5} alt="" className="w-100 h-100"  />
                    </div>
                    <div className="col-md-4 ">
                        <img src={image6} alt="" className="w-100 h-100"  />
                    </div>
                    
                </div>   
            </div>
        
        </>
     );
}
 
export default Gallery;
