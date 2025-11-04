import React, { useState } from "react";
import DonorForm from '../components/Popups/DonorForm';
import RecipientForm from '../components/Popups/RecipientForm';
import VolunteerForm from '../components/Popups/VolunteerForm';

export default function Register() {
  const [activeTab, setActiveTab] = useState("donor");

  const renderForm = () => {
    switch (activeTab) {
      case "donor":
        return <DonorForm />;
      case "recipient":
        return <RecipientForm />;
      case "volunteer":
        return <VolunteerForm />;
      default:
        return <DonorForm />;
    }
  };

  return (
    <>
      <main>
        <section className="relative w-full h-full py-20 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-emerald-800 bg-no-repeat bg-full"
          ></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-8/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-100 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-slate-500 text-sm font-bold">
                        Create Your Account
                      </h6>
                    </div>
                     <div className="w-full px-4 flex justify-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-center">
                            <button
                                className={`font-bold uppercase px-4 py-2 rounded-l outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-sm ${
                                activeTab === "donor"
                                    ? "bg-emerald-600 text-white"
                                    : "bg-slate-200 text-slate-700"
                                }`}
                                type="button"
                                onClick={() => setActiveTab("donor")}
                            >
                                I'm a Donor
                            </button>
                            <button
                                className={`font-bold uppercase px-4 py-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-sm ${
                                activeTab === "recipient"
                                    ? "bg-emerald-600 text-white"
                                    : "bg-slate-200 text-slate-700"
                                }`}
                                type="button"
                                onClick={() => setActiveTab("recipient")}
                            >
                                I'm a Recipient
                            </button>
                            <button
                                className={`font-bold uppercase px-4 py-2 rounded-r outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-sm ${
                                activeTab === "volunteer"
                                    ? "bg-emerald-600 text-white"
                                    : "bg-slate-200 text-slate-700"
                                }`}
                                type="button"
                                onClick={() => setActiveTab("volunteer")}
                            >
                                I'm a Volunteer
                            </button>
                        </div>
                    </div>
                    <hr className="mt-6 border-b-1 border-slate-300" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    {renderForm()}
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