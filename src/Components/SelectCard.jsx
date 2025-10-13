import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SelectCard = () => {
  const { t } = useTranslation();
  console.log(t);
  return (
    <div className="absolute w-full bottom-0">
      <div className="card-list flex gap-20 justify-center">
        {/* पहला कार्ड: Start Quiz */}
        <Link to="/test">
          <div className="card w-90 h-80 rounded-3xl relative">
            <div className="bg-image w-full h-full rounded-3xl">
              <img
                className="rounded-3xl w-full h-full"
                src="/images/5690878.jpg"
              />
            </div>
            <div className="content bg-white rounded-3xl absolute w-full bottom-0">
              <h3 className="text-black font-bold text-3xl text-center">
                {/* {t("Start Quiz")} */}

                {t("Start Quiz")}
              </h3>
            </div>
          </div>
        </Link>

        {/* दूसरा कार्ड: Dashboard */}
        <Link to={"/dashboard"}>
          <div className="card w-90 h-80 rounded-3xl relative">
            <div className="bg-image w-full h-80 ">
              <img
                className="rounded-3xl h-full w-full"
                src="/images/59254.jpg"
              />
            </div>
            <div className="content bg-white rounded-3xl absolute w-full bottom-0">
              <h3 className="text-black font-bold text-3xl text-center">
                {/* 1. Emoji को कुंजी (key) के अंदर रखें या कुंजी को सादा (plain) रखें */}
                {/* हम कुंजी को सादा (Dashboard) रखेंगे और Emoji को ट्रांसलेशन JSON में डाल देंगे */}
                {t("Dashboard")}
              </h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SelectCard;
