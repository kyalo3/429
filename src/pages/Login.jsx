import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import loginImage from "../assets/images/logo.png"; 

export default function Login() {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleLogin = async (values, { setSubmitting, setFieldError }) => {
    try {
      const { success, user } = await signIn(values.email, values.password);
      if (success) {
        // Redirect based on role
        switch (user.role) {
          case "admin":
            navigate("/admin");
            break;
          case "donor":
            navigate("/donor/dashboard");
            break;
          case "recipient":
            navigate("/recipient/dashboard");
            break;
          case "volunteer":
            navigate("/volunteer/dashboard");
            break;
          default:
            navigate("/");
        }
      } else {
        setFieldError("password", "Invalid email or password");
      }
    } catch (error) {
      console.error("Error during signin", error);
      setFieldError("password", "An unexpected error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <main>
        <section className="relative w-full h-full py-40 min-h-screen bg-emerald-50">
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-8/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
                  <div className="flex-auto px-4 lg:px-10 py-10">
                    <div className="text-emerald-800 text-center mb-3 font-bold">
                      <h1 className="text-3xl">SustainaShare</h1>
                      <small>Sign in with credentials</small>
                    </div>
                    <Formik
                      initialValues={{ email: "", password: "" }}
                      validationSchema={validationSchema}
                      onSubmit={handleLogin}
                    >
                      {({ isSubmitting, isValid }) => (
                        <Form>
                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-emerald-700 text-xs font-bold mb-2"
                              htmlFor="grid-password"
                            >
                              Email
                            </label>
                            <Field
                              type="email"
                              name="email"
                              className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-emerald-50 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Email"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="text-red-500 text-xs italic mt-1"
                            />
                          </div>

                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-emerald-700 text-xs font-bold mb-2"
                              htmlFor="grid-password"
                            >
                              Password
                            </label>
                            <Field
                              type="password"
                              name="password"
                              className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-emerald-50 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Password"
                            />
                            <ErrorMessage
                              name="password"
                              component="div"
                              className="text-red-500 text-xs italic mt-1"
                            />
                          </div>
                          <div>
                            <label className="inline-flex items-center cursor-pointer">
                              <input
                                id="customCheckLogin"
                                type="checkbox"
                                className="form-checkbox border-0 rounded text-slate-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                              />
                              <span className="ml-2 text-sm font-semibold text-slate-600">
                                Remember me
                              </span>
                            </label>
                          </div>

                          <div className="text-center mt-6">
                            <button
                              className="bg-emerald-800 text-white active:bg-emerald-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                              type="submit"
                              disabled={isSubmitting || !isValid}
                            >
                              Sign In
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
                <div className="flex flex-wrap mt-6 relative">
                  <div className="w-1/2">
                    <a
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      className="text-emerald-700"
                    >
                      <small>Forgot password?</small>
                    </a>
                  </div>
                  <div className="w-1/2 text-right">
                    <Link to="/register/donor" className="text-emerald-700">
                      <small>Create new account</small>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
