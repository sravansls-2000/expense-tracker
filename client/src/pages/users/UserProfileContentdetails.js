import React from "react";
import { useHistory } from "react-router-dom";
import dateFormatter from "../../utils/dateFormatter"
import { DeleteIncomeAction } from "../../redux/slices/income/incomeSlices"
import { useDispatch, useSelector } from "react-redux";
import { deleteExpAction } from "../../redux/slices/expenses/expenseStatSlice";
import DisabledButton from "../../components/DisableButton"
import ErrorDisplayMessage from "../../components/ErrorDisplayMessage";
import useEffect from "react"
import LoadingComponent from "../../components/Loading";


const UserProfileContentDetails = ({ item }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  //deleting

//store

  const Deletedet = (id)=>{
    item?.type === "income"?
    dispatch(DeleteIncomeAction(id))
    :dispatch(deleteExpAction(id));
  }
  const state = useSelector(state => state.income);
  const { loading, appErr, serverErr,  incomeDeleted} = state;
  //redirect
  
    

  

  return (
   <>
  

    <tr>
      <td>{item?.title}</td>
      <td>{item?.description}</td>
      <td>{item?.amount}</td>
      <td> {item?.date}</td>
      <td>
        <button
          onClick={() =>
            history.push({
              pathname: `/edit`,
              state: {
                item,
              },
            })
          }
          className="btn btn-secondary"
        >	<i className="fa fa-edit"></i></button>
      
      </td>
      <td>
      {serverErr || appErr ? (
                    <ErrorDisplayMessage>
                      {serverErr} {appErr}
                    </ErrorDisplayMessage>
                  ) : null}
                  {loading?  <LoadingComponent />:(
        <button className="btn btn-danger"  onClick={()=>Deletedet(item._id)} type="button">	<i className="fa fa-trash"></i></button>)}
       
      </td>
    </tr>
    </>
  );
};

export default UserProfileContentDetails;