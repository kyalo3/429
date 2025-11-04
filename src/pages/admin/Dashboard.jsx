import React, { useState, useEffect, useContext } from "react";
import DataTable from "../../components/Tables/DataTable";
import CardStats from "../../components/Cards/CardStats";
import { AuthContext } from "../../context/AuthContext";

export default function Dashboard() {
  const [donors, setDonors] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const { token } = useContext(AuthContext);

  const userHeaders = ["Name", "Email", "Phone", "Actions"];

  const processUsersForTable = (users, userType) => {
    return users.map((user) => ({
      name: user.name,
      email: user.email,
      phone: user.phone_number,
      actions: (
        <div>
          <button
            onClick={() => handleEdit(user)}
            className="bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(userType, user.id)}
            className="bg-red-500 text-white active:bg-red-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          >
            Delete
          </button>
        </div>
      ),
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [donorsRes, recipientsRes, volunteersRes] = await Promise.all([
          fetch("http://localhost:8000/donors/", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch("http://localhost:8000/recipients/", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch("http://localhost:8000/volunteers/", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        if (donorsRes.ok) setDonors(await donorsRes.json());
        if (recipientsRes.ok) setRecipients(await recipientsRes.json());
        if (volunteersRes.ok) setVolunteers(await volunteersRes.json());
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  const handleDelete = async (userType, userId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/${userType}/${userId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        if (userType === "donors")
          setDonors(donors.filter((user) => user.id !== userId));
        if (userType === "recipients")
          setRecipients(recipients.filter((user) => user.id !== userId));
        if (userType === "volunteers")
          setVolunteers(volunteers.filter((user) => user.id !== userId));
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  const handleEdit = (user) => {
    console.log("Editing user:", user);
    // Edit modal or page navigation would go here
  };

  return (
    <>
      <div className="relative bg-emerald-800 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="TOTAL USERS"
                  statTitle={(
                    donors.length +
                    recipients.length +
                    volunteers.length
                  ).toString()}
                  statIconName="fas fa-users"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="DONORS"
                  statTitle={donors.length.toString()}
                  statIconName="fas fa-hand-holding-heart"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="RECIPIENTS"
                  statTitle={recipients.length.toString()}
                  statIconName="fas fa-box-open"
                  statIconColor="bg-pink-500"
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
              title="Donors"
              headers={userHeaders}
              data={processUsersForTable(donors, "donors")}
            />
          </div>
          <div className="w-full mb-12 px-4">
            <DataTable
              title="Recipients"
              headers={userHeaders}
              data={processUsersForTable(recipients, "recipients")}
              color="dark"
            />
          </div>
          <div className="w-full mb-12 px-4">
            <DataTable
              title="Volunteers"
              headers={userHeaders}
              data={processUsersForTable(volunteers, "volunteers")}
            />
          </div>
        </div>
      </div>
    </>
  );
}
