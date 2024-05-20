const Footer = () => {
    return ( 
        <>
              <footer className="bg-secondary text-white pt-5 pb-4">

    <div className="container text-center text-md-left">

        <div className="row text-center text-md-left">

            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-light">Cats</h5>
                <p>
                Cats are independent and agile animals known for their hunting skills and affectionate, yet often aloof, behavior towards humans. They have been domesticated for thousands of years and are popular pets worldwide due to their playful nature and relatively low maintenance needs.</p>

            </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-light">Info</h5>
          <p>
            <a href="#" className="text-white" >Breed</a>
          </p>
          <p>
            <a href="#" className="text-white" >Behavior</a>
          </p> 
          <p>
            <a href="#" className="text-white" >Diet</a>
          </p> 
            

        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-light">Useful links</h5>
            <p>
                <a href="#" className="text-white" >Pet Care</a>
              </p>
              <p>
                <a href="#" className="text-white" >Grooming</a>
              </p> 
              {/* <p>
                <a href="#" className="text-white" >Shipping and Handling</a>
              </p> 
              <p>
                <a href="#" className="text-white" >Help</a>
              </p> */}
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-light">Contact</h5>
            <p>
                <i className="fas fa-home mr-3"></i> 13 Pet Center, Cartimar Shopping Center, Cartimar Avenue, Cartimar Villa, Pasay, 1300 Metro Manila
            </p>
            <p>
                <i className="fas fa-envelope mr-3"></i>ninelives@gmail.com
            </p>
            <p>
                <i className="fas fa-phone mr-3"></i>+63 9274662947
            </p>
            <p>
                <i className="fas fa-print mr-3"></i>+63 531 633 77
            </p>                
        </div>

    </div>

    <hr className="mb-4"></hr>

    <div className="row align-items-center">

        <div className="col-md-7 col-lg-8">
            <p> Copyright 2024 All rights reserved by:                   
            <a href="#">
                <strong class="text-light">JDaleon</strong>
            </a></p>

        </div>

        <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-right">

                <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                        <a href="#" className="btn-floating btn-sm text-white" ><i className="fab fa-facebook"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" className="btn-floating btn-sm text-white" ><i className="fab fa-twitter"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" className="btn-floating btn-sm text-white" ><i className="fab fa-google-plus"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" className="btn-floating btn-sm text-white" ><i className="fab fa-linkedin-in"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" className="btn-floating btn-sm text-white" ><i className="fab fa-instagram"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" className="btn-floating btn-sm text-white"><i className="fa-brands fa-cc-mastercard"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" className="btn-floating btn-sm text-white"><i className="fa-brands fa-cc-visa"></i></a>
                    </li>
                </ul>

            </div>

        </div>

    </div>

</div>

</footer> 
                                 
        </>
    );
}     
 
export default Footer;