import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const VolunteerForm = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    full_name: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone_number: Yup.string().required('Contact number is required'),
    skills: Yup.string().required('Skills are required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const handleVolunteerSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const payload = {
        full_name: values.full_name,
        email: values.email,
        phone_number: values.phone_number,
        skills: values.skills,
        password: values.password,
        user_type: 'volunteer'
      };
      await axios.post('http://localhost:8000/auth/register', payload);

      await login(values.email, values.password);
      navigate('/volunteer/dashboard');

    } catch (error) {
      console.error('Registration failed:', error);
      const apiError = error.response?.data?.detail || 'An unexpected error occurred.';
      setFieldError('general', apiError);
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        full_name: '',
        email: '',
        phone_number: '',
        skills: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleVolunteerSubmit}
    >
    {({ values, isSubmitting, setFieldValue, isValid}) => (
      <Form>
        <div className="mb-4">
            <Field
                type="text"
                name="full_name"
                placeholder="Full Name"
                className="mt-1 bg-emerald-50 block w-full px-3 py-4 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
            />
            <ErrorMessage name="full_name" component="div" className="text-red-500 text-sm mt-1 text-left" />
        </div>
        <div className="mb-4">
            <Field
                type="email"
                name="email"
                placeholder="Email Address"
                className="mt-1 bg-emerald-50 block w-full px-3 py-4 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1 text-left" />
        </div>
        <div className="mb-4">
            <PhoneInput
                placeholder="Contact Number"
                defaultCountry="KE"
                value={values.phone_number}
                onChange={(value) => setFieldValue('phone_number', value)}
                className="mt-1 bg-emerald-50 block w-full px-3 py-4 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
            />
            <ErrorMessage name="phone_number" component="div" className="text-red-500 text-sm mt-1 text-left" />
        </div>
        <div className="mb-4">
            <Field
                type="text"
                name="skills"
                placeholder="Skills e.g. Driving, First Aid"
                className="mt-1 bg-emerald-50 block w-full px-3 py-4 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
            />
            <ErrorMessage name="skills" component="div" className="text-red-500 text-sm mt-1 text-left" />
        </div>
        <div className="mb-4">
            <Field
                type="password"
                name="password"
                placeholder="Password"
                className="mt-1 bg-emerald-50 block w-full px-3 py-4 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
            />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1 text-left" />
        </div>
        <div className="mb-4">
            <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="mt-1 bg-emerald-50 block w-full px-3 py-4 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
            />
            <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1 text-left" />
        </div>
        <ErrorMessage name="general" component="div" className="text-red-500 text-sm mb-4 text-center" />
        <button
          type="submit"
          disabled={isSubmitting || !isValid}
          style={{ background: isValid ? '#f97316' : '#fdba74' }}
          className="mb-2 w-full py-4 px-4 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          {isSubmitting ? 'Registering...' : 'Register'}
        </button>
      </Form>
    )}
    </Formik>
  )
}

export default VolunteerForm;
