import React, { useState, useEffect, useContext } from "react";
import CardStats from "../../components/Cards/CardStats.jsx";
import DataTable from "../../components/Tables/DataTable.jsx";
import { AuthContext } from "../../context/AuthContext.jsx";

export default function Dashboard() {
  const [myEvents, setMyEvents] = useState([]);
  const { token, user } = useContext(AuthContext);

  const availableDrivesHeaders = ["Campaign", "Location", "Date", ""];
  const myScheduleHeaders = ["Campaign", "Location", "Date", "Role"];

  // Placeholder data
  const availableDrivesData = [
    {
      campaign: "Community Food Bank",
      location: "Mombasa",
      date: "Nov 20, 2025",
      action: <button className="bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Sign Up</button>,
    },
    {
      campaign: "Holiday Meals Drive",
      location: "Kisumu",
      date: "Dec 15, 2025",
      action: <button className="bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Sign Up</button>,
    },
  ];

  const myScheduleData = [
    {
      campaign: "Neighborhood Pantry",
      location: "Nairobi",
      date: "Nov 18, 2025",
      role: "Distribution",
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="relative bg-emerald-800 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="UPCOMING EVENTS"
                  statTitle={myScheduleData.length.toString()}
                  statArrow="up"
                  statPercent="1"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last week"
                  statIconName="far fa-calendar-alt"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="COMPLETED DRIVES"
                  statTitle="15"
                  statArrow="down"
                  statPercent="1"
                  statPercentColor="text-red-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-check"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="TOTAL HOURS"
                  statTitle="85"
                  statArrow="up"
                  statPercent="4"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-clock"
                  statIconColor="bg-sky-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-10 mx-auto w-full -m-24">
        <div className="flex flex-wrap mt-4">
          <div className="w-full mb-12 px-4">
            <DataTable
              title="Available Food Drives"
              headers={availableDrivesHeaders}
              data={availableDrivesData}
            />
          </div>
          <div className="w-full mb-12 px-4">
            <DataTable
              title="My Upcoming Schedule"
              headers={myScheduleHeaders}
              data={myScheduleData}
              color="dark"
            />
          </div>
        </div>
      </div>
    </>
  );
}
