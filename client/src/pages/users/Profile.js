import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { userProfileAction } from "../../redux/slices/users/usersSlices";

import '../../App.css'
import calcTransaction from "../../utils/accountStatistics";
import UserProfileStats from "./UserProfileStats";
import LoadingComponent from "../../components/Loading";
import ErrorDisplayMessage from "../../components/ErrorDisplayMessage";

const Profile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(userProfileAction());
  }, [dispatch]);
  const state = useSelector(state => state.users);
  const { loading, appErr, serverErr, userAuth, profile } = state;

  //Get income statistics
  const incResult =
    profile?.income && calcTransaction(profile?.income ? profile.income : []);

  //Get expense statistics
  const expResult = profile?.expenses && calcTransaction(profile?.expenses);

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : appErr || serverErr ? (
        <ErrorDisplayMessage>
          {serverErr} {appErr}
        </ErrorDisplayMessage>
      ) : (
        <section className="py-5" style={{ "background": "#c4d3f6"}}>
          
          <div className="container">
            
          <ui className="cards" style={{width:500}}>
          <li>
    <a href="" className="card">
      <img src="https://i.imgur.com/2DhmtJ4.jpg" className="card__image" alt="" />
      
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path  d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" /></svg>                 
          <img className="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
          <div className="card__header-text">
            <h3 className="card__title"> {profile?.firstname} {profile?.lastname}</h3>
            <span className="card__status">   {profile?.expenses?.length + profile?.income?.length} {""} Records Created</span>
          </div>          
        </div>
        <p classNameName="card__description"> {profile?.email} </p>
        <button  className="btn btn-primary" style={{"width":100}}
                    onClick={() =>
                      history.push({
                        pathname: "update-profile",
                        state: {
                          user: userAuth,
                        },
                      })
                    }
                  
                  >
                    Edit Profile
                  
                  </button>
      </div>
    </a>
    <a>
    <div className="d-flex align-items-center justify-content-center">
                <button
                  onClick={() => history.push("/user-expenses")}
                  style={{"width": 100,"hieght":100}}
                  className="btn btn-outline-warning d-flex align-items-center justify-content-center"
                >
                  <span> Expenses History</span>
                </button>
                <br/>
                <button
                  onClick={() => history.push("/user-income")}
                  style={{"width": 100,"hieght":100}}
                  className="btn btn-outline-warning d-flex align-items-center justify-content-center"
                >
                  <span> Income History</span>
                </button>
              </div>
    </a>
  </li>  
  </ui>
              
               
                
            <div className="position-relative p-8 border rounded-2">
           
               
              
              <UserProfileStats totalExp={expResult?.sumTotal}totalInc={incResult?.sumTotal} />
              <div className="d-flex align-items-center justify-content-center">
                <button
                  onClick={() => history.push("/user-expenses")}
                  className="btn w-100 btn-outline-danger d-flex align-items-center justify-content-center"
                >
                  <span>View Expenses History</span>
                </button>
                <button
                  onClick={() => history.push("/user-income")}
                  className="btn w-100 btn-outline-success d-flex align-items-center justify-content-center"
                >
                  <span>View Income History</span>
                </button>
              </div>
            </div>
          </div>

   
        </section>
        

      )}
    </>
  );
};

export default Profile;