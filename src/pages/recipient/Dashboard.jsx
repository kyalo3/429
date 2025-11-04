import React, { useState, useEffect, useContext } from "react";
import CardStats from "../../components/Cards/CardStats.jsx";
import DataTable from "../../components/Tables/DataTable.jsx";
import { AuthContext } from "../../context/AuthContext.jsx";

export default function Dashboard() {
  const [collections, setCollections] = useState([]);
  const { token, user } = useContext(AuthContext);

  const collectionPointsHeaders = ["Location", "Operating Hours", ""];
  const collectionHistoryHeaders = ["ID", "Date", "Items", "Status"];

  // Placeholder data
  const collectionPointsData = [
    {
      location: "Westlands Collection Point",
      hours: "Mon-Fri, 9am-5pm",
      action: <button className="bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">View Details</button>,
    },
    {
      location: "Eastleigh Community Center",
      hours: "Sat, 10am-2pm",
      action: <button className="bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">View Details</button>,
    },
  ];

  const collectionHistoryData = [
    {
      id: "C-1023",
      date: "Oct 28, 2025",
      items: "Bread, Milk, Vegetables",
      status: "Collected",
    },
    {
      id: "C-1011",
      date: "Oct 15, 2025",
      items: "Canned Goods, Rice",
      status: "Collected",
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
                  statSubtitle="UPCOMING COLLECTIONS"
                  statTitle="1"
                  statArrow="up"
                  statPercent="1"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-calendar-check"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="TOTAL ITEMS RECEIVED"
                  statTitle="45"
                  statArrow="up"
                  statPercent="10"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-box-open"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="NEXT COLLECTION"
                  statTitle="Nov 15, 2025"
                  statArrow="up"
                  statPercent=""
                  statPercentColor="text-emerald-500"
                  statDescripiron="In 12 days"
                  statIconName="fas fa-map-marker-alt"
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
              title="Available Collection Points"
              headers={collectionPointsHeaders}
              data={collectionPointsData}
            />
          </div>
          <div className="w-full mb-12 px-4">
            <DataTable
              title="My Collection History"
              headers={collectionHistoryHeaders}
              data={collectionHistoryData}
              color="dark"
            />
          </div>
        </div>
      </div>
    </>
  );
}
