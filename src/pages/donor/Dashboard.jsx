import React, { useState, useEffect, useContext } from "react";
import CardStats from "../../components/Cards/CardStats.jsx";
import DataTable from "../../components/Tables/DataTable.jsx";
import { AuthContext } from "../../context/AuthContext.jsx";

export default function Dashboard() {
  const [donations, setDonations] = useState([]);
  const { token, user } = useContext(AuthContext);

  const donationHeaders = ["ID", "Type", "Quantity", "Status", "Date"];
  const opportunitiesHeaders = ["Campaign", "Items Needed", "Location", ""];

  useEffect(() => {
    const fetchDonations = async () => {
      if (user && user.id) {
        try {
          const response = await fetch(
            `http://localhost:8000/donations/donor/${user.id}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          if (response.ok) {
            const data = await response.json();
            setDonations(data);
          }
        } catch (error) {
          console.error("Failed to fetch donations:", error);
        }
      }
    };

    fetchDonations();
  }, [token, user]);

  const donationData = donations.map((d) => ({
    id: d.id,
    type: d.donation_type,
    quantity: d.quantity,
    status: d.status,
    date: new Date(d.created_at).toLocaleDateString(),
  }));

  // Placeholder data for opportunities
  const opportunitiesData = [
    {
      campaign: "Winter Coat Drive",
      items: "Coats, Jackets",
      location: "Nairobi CBD",
      action: <button className="bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Donate</button>,
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
                  statSubtitle="TOTAL DONATIONS"
                  statTitle={donations.length.toString()}
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-hand-holding-heart"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="PENDING PICKUPS"
                  statTitle={donations.filter(d => d.status === 'pending').length.toString()}
                  statArrow="down"
                  statPercent="2"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-truck"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="IMPACT"
                  statTitle="1,250"
                  statUnit="people fed"
                  statArrow="up"
                  statPercent="15"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-users"
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
              title="My Donation History"
              headers={donationHeaders}
              data={donationData}
            />
          </div>
          <div className="w-full mb-12 px-4">
            <DataTable
              title="New Donation Opportunities"
              headers={opportunitiesHeaders}
              data={opportunitiesData}
              color="dark"
            />
          </div>
        </div>
      </div>
    </>
  );
}
