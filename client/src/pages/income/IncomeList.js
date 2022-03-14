import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AppPagination from "../../components/AppPagination";
import ContentDetails from "../../components/ContentDetails";
import ErrorDisplayMessage from "../../components/ErrorDisplayMessage";
import LoadingComponent from "../../components/Loading";
import { fetchAllExpAction } from "../../redux/slices/expenses/expenseStatSlice";
import { fetchAllIncomeAction } from "../../redux/slices/income/incomeSlices";

const IncomeList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  //get incomes from store
  const incomes = useSelector(state => state.income);
  console.log(incomes)
  const { loading, appErr, serverErr, incomeList } = incomes;
  //fetch expenses
  useEffect(() => {
    dispatch(fetchAllIncomeAction(+page));
  }, [dispatch, page, setPage]);
  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : appErr || serverErr ? (
        <ErrorDisplayMessage>
          {serverErr} {appErr}
        </ErrorDisplayMessage>
      ) : (
        <section >
           <div class="limiter">
  	<div class="container-table100">
    <h3>RECENT INCOME DETAILS OF USER</h3>
    <div class="wrap-table100"> 
             
               
              
              <table className="table">
                <thead>
                  <tr className="table-active">
                    <th scope="col">
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small>Withdrawed By</small>
                      </button>
                    </th>
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
                   
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <h1>Loading...</h1>
                  ) : appErr || serverErr ? (
                    <div>err</div>
                  ) : incomeList?.docs?.length <= 0 ? (
                    <h1>NO INCOME FOUND</h1>
                  ) : (
                    console.log(incomeList),
                    incomeList?.docs?.map(exp => (
                      <>
                        <ContentDetails key={exp?._id} item={exp} />
                      </>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <AppPagination
              setPage={setPage}
              pageNumber={incomeList?.totalPages}
            />
          </div>
          
        </section>
      )}
    </>
  );
};

export default IncomeList;