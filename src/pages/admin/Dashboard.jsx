import React, { useState, useEffect, useContext } from "react";
import UserTable from "../../components/Tables/UserTable";
import { AuthContext } from "../../context/AuthContext";

export default function Dashboard() {
  const [donors, setDonors] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const { token } = useContext(AuthContext);

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

        if (donorsRes.ok) {
          const donorsData = await donorsRes.json();
          setDonors(donorsData);
        }
        if (recipientsRes.ok) {
          const recipientsData = await recipientsRes.json();
          setRecipients(recipientsData);
        }
        if (volunteersRes.ok) {
          const volunteersData = await volunteersRes.json();
          setVolunteers(volunteersData);
        }
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
        // Refresh the data after a successful delete
        if (userType === "donors") {
          setDonors(donors.filter((user) => user.id !== userId));
        } else if (userType === "recipients") {
          setRecipients(recipients.filter((user) => user.id !== userId));
        } else if (userType === "volunteers") {
          setVolunteers(volunteers.filter((user) => user.id !== userId));
        }
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  const handleEdit = (user) => {
    // For now, we'll just log the user to the console
    // In a real app, you'd open a modal or navigate to an edit page
    console.log("Editing user:", user);
  };

  return (
    <>
      <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                          Traffic
                        </h5>
                        <span className="font-semibold text-xl text-blueGray-700">
                          350,897
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                          <i className="far fa-chart-bar"></i>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-blueGray-400 mt-4">
                      <span className="text-emerald-500 mr-2">
                        <i className="fas fa-arrow-up"></i> 3.48%
                      </span>
                      <span className="whitespace-nowrap">
                        Since last month
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {/* Add other cards here */}
            </div>
          </div>
          <div className="flex flex-wrap mt-4">
            <div className="w-full mb-12 px-4">
              <UserTable
                title="Donors"
                users={donors}
                onDelete={(userId) => handleDelete("donors", userId)}
                onEdit={handleEdit}
              />
            </div>
            <div className="w-full mb-12 px-4">
              <UserTable
                title="Recipients"
                users={recipients}
                color="dark"
                onDelete={(userId) => handleDelete("recipients", userId)}
                onEdit={handleEdit}
              />
            </div>
            <div className="w-full mb-12 px-4">
              <UserTable
                title="Volunteers"
                users={volunteers}
                onDelete={(userId) => handleDelete("volunteers", userId)}
                onEdit={handleEdit}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
