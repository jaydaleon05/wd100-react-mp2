import aboutImage from '../img/Facts-about-cats.jpg'

const About = () => {
    return ( 
        <>
            <div className="container mt-5 mb-5">
                <img src={aboutImage} alt="" className='w-100' />
            </div>
        </>
     );
}
 
export default About;