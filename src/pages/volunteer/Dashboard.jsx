import React from "react";

// components
import CardStats from "../../components/Cards/CardStats.jsx";

export default function Dashboard() {
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
                  statTitle="2"
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
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-lg text-slate-700">
                      Available Food Drives
                    </h3>
                  </div>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                {/* Placeholder for table of available drives */}
                <p className="p-4">A table of available food drives will go here.</p>
              </div>
            </div>
          </div>
          <div className="w-full mb-12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-lg text-slate-700">
                      My Upcoming Schedule
                    </h3>
                  </div>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                {/* Placeholder for table of volunteer's schedule */}
                <p className="p-4">A table of the volunteer's upcoming events will go here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
