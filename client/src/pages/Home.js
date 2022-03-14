import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
const Home = () => {
  return (
    <>
      <section  id="example1" className="position-relative pb-5">
        
        <div className="position-relative">
          <div className="container">
            <div className="row pt-5">
              <div className="col-12 col-lg-5 ms-auto">
                <div className="mb-5">
                  <h2 className="display fw-bold mb-5">
                    Keep Track of Your Income & Expenses
                  </h2>
                  </div>
                <h1 className="text-danger">Admin Login </h1>
                <p>User name: sravan@gmail.com</p>
                <p>password: 123456</p>
                <div className="row align-items-center pt-5">
                  <div className="col-6 col-md-4 col-lg-3 col-xl-2 text-center mb-5">
                    <img
                      className="d-inline-block img-fluid"
                      src="bootstrap5-plain-assets/logos/slack.png"
                      alt=""
                    />
                  </div>
                  <div className="col-6 col-md-4 col-lg-3 col-xl-2 text-center mb-5">
                    <img
                      className="d-inline-block img-fluid"
                      src="bootstrap5-plain-assets/logos/dropbox.png"
                      alt=""
                    />
                  </div>
                  <div className="col-6 col-md-4 col-lg-3 col-xl-2 text-center mb-5">
                    <img
                      className="d-inline-block img-fluid"
                      src="bootstrap5-plain-assets/logos/spotify.png"
                      alt=""
                    />
                  </div>
                  <div className="col-6 col-md-4 col-lg-3 col-xl-2 text-center mb-5">
                    <img
                      className="d-inline-block img-fluid"
                      src="bootstrap5-plain-assets/logos/stripe.png"
                      alt=""
                    />
                  </div>
                  <div className="col-6 col-md-4 col-lg-3 col-xl-2 text-center mb-5">
                    <img
                      className="d-inline-block img-fluid"
                      src="bootstrap5-plain-assets/logos/netflix.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="text-center text-lg-start bg-light text-muted">
       
       <section
         className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
       >
        
        
         <div>
           <a href="" className="me-4 text-reset">
           <i class="fa fa-currency"></i>
           </a>
           <a href="" className="me-4 text-reset">
             <i className="fa fa-twitter"></i>
           </a>
           <a href="" className="me-4 text-reset">
             <i className="fa fa-google"></i>
           </a>
           <a href="" className="me-4 text-reset">
             <i className="fa fa-instagram"></i>
           </a>
           <a href="" className="me-4 text-reset">
             <i className="fa fa-linkedin"></i>
           </a>
           <a href="" className="me-4 text-reset">
             <i className="fa fa-github"></i>
           </a>
         </div>
        
       </section>
      
       <section className="">
         <div className="container text-center text-md-start mt-5">
    
           <div className="row mt-3">
        
             <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
           
               <h6 className="text-uppercase fw-bold mb-4">
                 <i className="fa fa-gem me-3"></i>Expenses Tracker
               </h6>
               <p>
              we are using react for the expence tracker and income also it is very use ful for the daily expenses
               </p>
             </div>
           
             <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
      
               <h6 className="text-uppercase fw-bold mb-4">
                 Products
               </h6>
               <p>
                 <a href="#!" className="text-reset">Angular</a>
               </p>
               <p>
                 <a href="#!" className="text-reset">React</a>
               </p>
               <p>
                 <a href="#!" className="text-reset">Vue</a>
               </p>
               <p>
                 <a href="#!" className="text-reset">Laravel</a>
               </p>
             </div>
            
             <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
               <h6 className="text-uppercase fw-bold mb-4">
                 Useful links
               </h6>
               <p>
                 <a href="#!" className="text-reset">Pricing</a>
               </p>
               <p>
                 <a href="#!" className="text-reset">Settings</a>
               </p>
               <p>
                 <a href="#!" className="text-reset">Orders</a>
               </p>
               <p>
                 <a href="#!" className="text-reset">Help</a>
               </p>
             </div>
           

         
             <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
               <h6 className="text-uppercase fw-bold mb-4">
                 Contact us
               </h6>
               <p><i className="fa fa-home me-3"></i>India,Andrapradesh,Nellore</p>
               <p>
                 <i className="fa fa-envelope me-3"></i>
                 expensetracker@gmail.com.com
               </p>
               <p><i className="fa fa-phone me-3"></i>6303261758</p>
               <p><i className="fa fa-print me-3"></i>6306732618</p>
             </div>
          
           </div>
        
         </div>
       </section>
      

       <div className="text-center p-4" >
      <a className="text-reset fw-bold">ExpenseTracker.com</a>
       </div>
      
     </footer>
 
    </>
  );
};

export default Home;