import React, { useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import bgimage from "../../assets/registration.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { MyContext } from "../../context/cartContext";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});

function UserLoginForm() {
  const navigate = useNavigate();
  const {setIsLogged,isLogged}=useContext(MyContext)

  return (
    <>
      <Toaster />
      <div
        className="bg-cover bg-center min-h-screen flex items-center justify-center bg-neutral-100"
        // style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div className="rounded-lg p-6 max-w-md w-full border shadow-2xl  bg-neutral-400">
          {/* <h1 className="font-bold text-center">Sign in</h1> */}

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              axios
                .get(`http://localhost:8000/user`)
                .then((res) => {
                  // let admin=false;
                  // if(values.email === 'admin@gmail.com' && values.password === 'iamadmin')
                  // {
                  //   admin=true;
                  // }
                  const admindata=res.data.find(item=>values.email === 'admin@gmail.com' && values.password === 'iamadmin');
                  const findeddata = res.data.find(item => item.email === values.email && item.password === values.password);
                  const existData = res.data.find(item => item.email === values.email && item.password !== values.password);
                  if(admindata)
                  {
                    toast.success('welcome admin');
                    localStorage.setItem('id', admindata.id);
                    setIsLogged(true);
                    // console.log(isLogged);
                    setTimeout(() =>
                       navigate("/admin")
                    , 1000);
                  }
                  else if (findeddata) {
                    toast.success('Login successful');
                    localStorage.setItem('id', findeddata.id);
                    setIsLogged(true);
                    // console.log(isLogged);
                    setTimeout(() => navigate("/"), 1000);
                  } else if (existData) {
                    toast.error('Enter your password correctly');
                  } else {
                    toast('OOPS! You don\'t have an account', {
                      icon: '😬',
                    });

                    
                    setTimeout(() => navigate("/signup"), 1000);
                  }
                })
                .catch((error) => console.log("error", error))
                .finally(() => {
                  setSubmitting(false);
                });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email"></label>
                  <input
                    placeholder="Email"
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 mt-4"
                  />
                  {touched.email && errors.email && (
                    <div style={{ color: "red" }}>{errors.email}</div>
                  )}
                </div>

                <div>
                  <label htmlFor="password"></label>
                  <input
                    placeholder="Password"
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 mt-4"
                  />
                  {touched.password && errors.password && (
                    <div style={{ color: "red" }}>{errors.password}</div>
                  )}
                </div>

                <button
                  className="bg-black text-white p-2.5 rounded mt-3 hover:bg-white hover:text-black"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Sign-in
                </button>
                <button onClick={() => navigate('/signup')} className="bg-black ml-3 text-white p-2.5 rounded mt-3 hover:bg-white hover:text-black">
                  New User?
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default UserLoginForm;
