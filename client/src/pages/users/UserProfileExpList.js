import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userProfileAction } from "../../redux/slices/users/usersSlices";
import LoadingComponent from "../../components/Loading";
import ErrorDisplayMessage from "../../components/ErrorDisplayMessage";
import UserProfileContentDetails from "./UserProfileContentdetails";
import './css/table.css'
const UserProfileExpList = () => {
  
  const[search,setSearch]=useState("")
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userProfileAction());
  }, [dispatch]);
  
const handlesubmit=(e)=>{
setSearch(e.target.value)
console.log(e.target.value)
console.log(profile?.expense)

}
  //State
  const state = useSelector(state => state.users);
  const { loading, appErr, serverErr, profile } = state;
  // console.log(profile?.expenses[0].date[6])
  // if(profile?.expenses[0].date[4]===3){
  // for(let i=0;i<profile?.expenses.length;i++){
  //     console.log(profile?.expenses[i])
  // } 
  // }

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : appErr || serverErr ? (
        <ErrorDisplayMessage>
          {serverErr} {appErr}
        </ErrorDisplayMessage>
      ) : profile?.expenses?.length <= 0 ? (
        <div class="container-table100">
        <h2>No Expense Found</h2></div>
      ) : (
        <section >
        <div class="limiter">
  	<div class="container-table100">
    <h3>RECENT EXPENSE DETAILS OF USER</h3>
    <div>
    <select className="custom-select " onClick={handlesubmit}>
        <option>Janvary</option>
        <option>Febvary</option>
        <option>March</option>
        <option>April</option>
        <option>may</option>
        <option>june</option>
        <option>july</option>
        <option>August</option>
        <option>september</option>
        <option>october</option>
        <option>november</option>
        <option>december</option>
    </select>
    <div>{search}details of user</div>
      
    </div>
    <div class="wrap-table100"> 
              <table className="table">
                <thead>
                  <tr className="table-active">
                    <th scope="col">
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small>Title</small>
                      </button>
                    </th>
                    <th scope="col">
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small>Description</small>
                      </button>
                    </th>
                    <th scope="col">
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small>Amount</small>
                      </button>
                    </th>
                    <th scope="col">
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small>Date</small>
                      </button>
                    </th>
                    <th scope="col">
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small>Action</small>
                      </button>
                    </th>
                    <th scope="col">
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small>delete</small>
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <>
                    {profile?.expenses?.map(exp => (
                      <UserProfileContentDetails item={exp} key={exp?._id} />
                    ))}
                  </>
                </tbody>
              </table>
            </div>
          </div>
          </div>
        </section>
      )}
    </>
  );
};

export default UserProfileExpList;