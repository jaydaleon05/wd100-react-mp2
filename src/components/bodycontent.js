import AboutCats from "./aboutcats";
import Banner from "../img/cute-sleepy-kitten-website-header.jpg"

const BodyContent = () => {
    return ( 
        <>
            <img src={Banner} alt="" className="w-100"/>
            <div className="container mt-3">
                <div className="row">
                    <AboutCats></AboutCats>
                    
                </div>
            </div>
        </>
     );
}
 
export default BodyContent;