import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userProfileAction } from "../../redux/slices/users/usersSlices";
import LoadingComponent from "../../components/Loading";
import ErrorDisplayMessage from "../../components/ErrorDisplayMessage";
import UserProfileContentDetails from "./UserProfileContentdetails";
import ContentDetails from "../../components/ContentDetails";
import './css/table.css'
// import './css/util.css'

const UserProfileIncList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userProfileAction());
  }, [dispatch]);
 //delete
  


  //State
  const state = useSelector(state => state.users);
  const { loading, appErr, serverErr, profile } = state;

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : appErr || serverErr ? (
        <ErrorDisplayMessage>
          {serverErr} {appErr}
        </ErrorDisplayMessage>
      ) : profile?.income?.length <= 0 ? (
        <div class="container-table100">
        <h2>No income Found</h2></div>
      ) : (
        <section>
              
 <div class="limiter">
  	<div class="container-table100">
      <h3>RECENT INCOME DETAILS OF USER</h3>
      
			<div class="wrap-table100">
         <table className="table">
                <thead> 
                  <tr>
                    <th>
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small>Title</small>
                      </button>
                    </th>
                    <th>
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small>Description</small>
                      </button>
                    </th>
                    <th>
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small>Amount</small>
                      </button>
                    </th>
                    <th>
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small>Date</small>
                      </button>
                    </th>
                    <th>
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small>Action</small>
                      </button>
                    </th>
                    <th>
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small>delete</small>
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {profile?.income?.length <= 0 ? (
                    <h1>No Income Found</h1>
                  ) : (
                    profile?.income?.map(inc => (
                      <UserProfileContentDetails item={inc} key={inc?._id} />
                    ))
                  )}
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

export default UserProfileIncList;