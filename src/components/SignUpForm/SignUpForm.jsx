/* eslint-disable no-unused-vars */
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./SignUpForm.css";

function SignupForm() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "слишком длинное имя")
        .required("Обязательное поле"),
      lastName: Yup.string()
        .max(20, "слишком длинная фамилия")
        .required("Обязательное поле"),
      email: Yup.string()
        .email("Некорректный адрес")
        .required("Обязательное поле"),
    }),
    onSubmit: (values) => {},
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.firstName && formik.touched.firstName && (
          <p>{formik.errors.firstName}</p>
        )}
      </div>
      <div className="input-container">
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.lastName && formik.touched.lastName && (
          <p>{formik.errors.lastName}</p>
        )}
      </div>
      <div className="input-container">
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email && (
          <p>{formik.errors.email}</p>
        )}
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
}

export default SignupForm;
