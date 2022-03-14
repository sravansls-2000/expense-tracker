import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { loginUserAction } from "../../redux/slices/users/usersSlices";
import DisabledButton from "../../components/DisableButton";
import { Link } from "react-router-dom";
import './css/main.css';
import './css/util.css'

//form validations
const formSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  //history
  const history = useHistory();

  //dispatch
  const dispatch = useDispatch();
  //get data from store

  const user = useSelector(state => state?.users);
  const { userAppErr, userServerErr, userLoading, userAuth } = user;

  //formik form
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: values => {
      dispatch(loginUserAction(values));
    },
    validationSchema: formSchema,
  });

  // Redirect 
  useEffect(() => {
  
    if (userAuth) {
      {userAuth?.isAdmin?
      history.push("/dashboard"):history.push("/profile")}
    }
  }, [userAuth]);

  return (
    <>
  <section>
    <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<div className="login100-pic js-tilt" data-tilt>
        <span className="login100-form-title">
        <h2 className="display-5 fw-bold mb-4 text-dark">
                Keep Track of your income and expenses flow
              </h2>
					</span>
				</div>
        {userAppErr || userServerErr ? (
                <div class="alert alert-danger" role="alert">
                  {userServerErr} {userAppErr}
                </div>
              ) : null}

				<form className="login100-form validate-form" onSubmit={formik.handleSubmit}>
       
					<span className="login100-form-title">
						User Login
					</span>
        
					<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input
             value={formik.values.email}
             onChange={formik.handleChange("email")}
             onBlur={formik.handleBlur("email")}
             className="input100"
              type="text"
               name="email"
                placeholder="Email"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
            <div className="text-danger mb-2">
                  {formik.touched.email && formik.errors.email}
                </div>

					</div>

					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input 
                 value={formik.values.password}
                 onChange={formik.handleChange("password")}
                 onBlur={formik.handleBlur("password")}
            className="input100"
             type="password"
              name="pass"
               placeholder="Password"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
            <div className="text-danger mb-2">
                  {formik.touched.password && formik.errors.password}
                </div>
					</div>
					
					
          {userLoading ? (
                    <DisabledButton />
                  ) : (
                    <div className="container-login100-form-btn">
                    <button
                      type="submit"
                      className="login100-form-btn"
                    >
                      Login
                    </button>	</div>
                  )}
					

				
				</form>
        <div className="text-center p-t-136">
						
            <Link to="/register" className="btn btn-outline-warning me-2">
                create account
              </Link>
							<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						
					</div>
			</div>
		</div>
	</div>
  </section>
    </>
  );
};

export default Login;