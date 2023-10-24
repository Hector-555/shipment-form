/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./SendingForm.css";

function SendingForm({ onSendingForm }) {
  const formik = useFormik({
    initialValues: {
      senderName: "",
      senderPhone: "",
      senderAddress: "",

      addresseeName: "",
      addresseePhone: "",
      addresseeAddress: "",

      length: "",
      width: "",
      height: "",
      weight: "",
    },
    validationSchema: Yup.object({
      senderName: Yup.string().required("Обязательное поле"),
      senderPhone: Yup.number().required("Обязательное поле"),
      senderAddress: Yup.string().required("Обязательное поле"),

      addresseeName: Yup.string().required("Обязательное поле"),
      addresseePhone: Yup.number().required("Обязательное поле"),
      addresseeAddress: Yup.string().required("Обязательное поле"),

      length: Yup.number()
        .required("Обязательное поле")
        .min(1, "Укажите корректную длину"),
      width: Yup.number()
        .required("Обязательное поле")
        .min(1, "Укажите корректную высоту"),
      height: Yup.number()
        .required("Обязательное поле")
        .min(1, "Укажите корректную ширину"),
      weight: Yup.number()
        .required("Обязательное поле")
        .min(1, "Укажите корректный вес посылки"),
    }),
    onSubmit: (values) => {},
  });

  const senderNameInputRef = useRef();
  const senderPhoneInputRef = useRef();
  const senderAddressInputRef = useRef();

  const addresseeNameInputRef = useRef();
  const addresseePhoneInputRef = useRef();
  const addresseeAddressInputRef = useRef();

  const lengthInputRef = useRef();
  const widthInputRef = useRef();
  const heightInputRef = useRef();
  const weightInputRef = useRef();
  const insuranceInputRef = useRef();
  const typeOfSendInputRef = useRef();

  const addUserHandler = (event) => {
    const senderName = senderNameInputRef.current.value;
    const senderPhone = senderPhoneInputRef.current.value;
    const senderAddress = senderAddressInputRef.current.value;

    const addresseeName = addresseeNameInputRef.current.value;
    const addresseePhone = addresseePhoneInputRef.current.value;
    const addresseeAddress = addresseeAddressInputRef.current.value;

    const length = lengthInputRef.current.value;
    const width = widthInputRef.current.value;
    const height = heightInputRef.current.value;
    const weight = weightInputRef.current.value;
    const insurance = insuranceInputRef.current.value;
    const typeOfSend = typeOfSendInputRef.current.value;

    event.preventDefault();

    onSendingForm(
      senderName,
      senderPhone,
      senderAddress,

      addresseeName,
      addresseePhone,
      addresseeAddress,

      length,
      width,
      height,
      weight,
      insurance,
      typeOfSend
    );
    senderNameInputRef.current.value = "";
    senderPhoneInputRef.current.value = "";
    senderAddressInputRef.current.value = "";

    addresseeNameInputRef.current.value = "";
    addresseePhoneInputRef.current.value = "";
    addresseeAddressInputRef.current.value = "";

    lengthInputRef.current.value = "";
    widthInputRef.current.value = "";
    heightInputRef.current.value = "";
    weightInputRef.current.value = "";
    insuranceInputRef.current.value = "";
    typeOfSendInputRef.current.value = "";
  };

  return (
    <form className="form" onSubmit={addUserHandler}>
      <div className="package-sides-container">
        <div className="sender-container">
          <h2>Отправитель</h2>
          <div className="label-wrapper">
            <label>Имя</label>
            <input
              type="text"
              name="senderName"
              id="senderName"
              value={formik.values.senderName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              ref={senderNameInputRef}
            />
            {formik.errors.senderName && formik.touched.senderName && (
              <p>{formik.errors.senderName}</p>
            )}
          </div>
          <div className="label-wrapper">
            <label htmlFor="senderPhone">Телефон</label>
            <input
              type="number"
              name="senderPhone"
              id="senderPhone"
              value={formik.values.senderPhone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              ref={senderPhoneInputRef}
            />
            {formik.errors.senderPhone && formik.touched.senderPhone && (
              <p>{formik.errors.senderPhone}</p>
            )}
          </div>
          <div className="label-wrapper">
            <label htmlFor="senderAddress">Адрес</label>
            <input
              type="text"
              name="senderAddress"
              id="senderAddress"
              value={formik.values.senderAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              ref={senderAddressInputRef}
            />
            {formik.errors.senderAddress && formik.touched.senderAddress && (
              <p>{formik.errors.senderAddress}</p>
            )}
          </div>
        </div>

        <div className="addressee-wrapper">
          <h2>Адресат</h2>
          <div className="label-wrapper">
            <label htmlFor="addresseeName">Имя</label>
            <input
              type="text"
              name="addresseeName"
              id="addresseeName"
              value={formik.values.addresseeName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              ref={addresseeNameInputRef}
            />
            {formik.errors.addresseeName && formik.touched.addresseeName && (
              <p>{formik.errors.addresseeName}</p>
            )}
          </div>
          <div className="label-wrapper">
            <label htmlFor="addresseePhone">Телефон</label>
            <input
              type="number"
              name="addresseePhone"
              id="addresseePhone"
              value={formik.values.addresseePhone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              ref={addresseePhoneInputRef}
            />
            {formik.errors.addresseePhone && formik.touched.addresseePhone && (
              <p>{formik.errors.addresseePhone}</p>
            )}
          </div>
          <div className="label-wrapper">
            <label htmlFor="addresseeAddress">Адрес</label>
            <input
              type="text"
              name="addresseeAddress"
              id="addresseeAddress"
              value={formik.values.addresseeAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              ref={addresseeAddressInputRef}
            />
            {formik.errors.addresseeAddress &&
              formik.touched.addresseeAddress && (
                <p>{formik.errors.addresseeAddress}</p>
              )}
          </div>
        </div>
      </div>

      <div>
        <h2>Посылка</h2>
        <div className="package-wrapper">
          <div>
            <h3>Габариты</h3>
            <div className="label-wrapper">
              <label htmlFor="length">Длина (см)</label>
              <input
                type="number"
                name="length"
                id="length"
                value={formik.values.length}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                ref={lengthInputRef}
              />
              {formik.errors.length && formik.touched.length && (
                <p>{formik.errors.length}</p>
              )}
            </div>
            <div className="label-wrapper">
              <label htmlFor="width">Ширина (см)</label>
              <input
                type="number"
                name="width"
                id="width"
                value={formik.values.width}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                ref={widthInputRef}
              />
              {formik.errors.width && formik.touched.width && (
                <p>{formik.errors.width}</p>
              )}
            </div>
            <div className="label-wrapper">
              <label htmlFor="height">Высота (см)</label>
              <input
                type="number"
                name="height"
                id="height"
                value={formik.values.height}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                ref={heightInputRef}
              />
              {formik.errors.height && formik.touched.height && (
                <p>{formik.errors.height}</p>
              )}
            </div>
          </div>

          <div>
            <h3>Дополнительно</h3>
            <div className="label-wrapper">
              <label htmlFor="weight">Вес (кг)</label>
              <input
                type="number"
                name="weight"
                id="weight"
                value={formik.values.weight}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                ref={weightInputRef}
              />
              {formik.errors.weight && formik.touched.weight && (
                <p>{formik.errors.weight}</p>
              )}
            </div>
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                name="insurance"
                id="insurance"
                ref={insuranceInputRef}
              />
              <label htmlFor="insurance">Страхование</label>
            </div>
            <div>
              <label className="list-wrapper">Тип отправления</label>
              <select
                className="type-of-send"
                name="typeOfSend"
                id="typeOfSend"
                ref={typeOfSendInputRef}
              >
                <option selected>Обычное</option>
                <option>Заказное</option>
                <option>Срочное</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <button type="submit" className="btn">
        Отправить
      </button>
    </form>
  );
}

export default SendingForm;
