/* eslint-disable quotes */
import React from "react";
import "./PackagesList.css";

function PackagesList({ packList }) {
  return (
    <>
      {packList.map((pack) => (
        <div className="packages-list-wrapper" key={pack.id}>
          <div className="package-item-wrapper">
            <h4>От</h4>
            <p>Имя: {pack.senderName}</p>
            <p>Тел: {pack.senderPhone}</p>
            <p>Адр: {pack.senderAddress}</p>
          </div>
          <div className="package-item-wrapper">
            <h4>Кому</h4>
            <p>Имя: {pack.addresseeName}</p>
            <p>Тел: {pack.addresseePhone}</p>
            <p>Адр: {pack.addresseeAddress}</p>
          </div>
          <div className="package-item-wrapper">
            <p>Страховка: {pack.insurance ? "есть" : "нет"}</p>
            <p>Отправление: {pack.typeOfSend}</p>
            <p>Вес (кг): {pack.weight}</p>
            <p>
              Д х Ш х В (см): {pack.length} x {pack.width} x {pack.height}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default PackagesList;
