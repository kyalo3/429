import React from "react";
import PropTypes from "prop-types";

export default function UserTable({ title, users, color, onDelete, onEdit }) {
  const colorClass = color === "light" ? "bg-white" : "bg-blueGray-700 text-white";
  const tableHeadClass = color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-blueGray-600 text-blueGray-200 border-blueGray-500";

  if (!users || users.length === 0) {
    return (
      <div className={`relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ${colorClass}`}>
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className={`font-semibold text-lg ${color === "light" ? "text-blueGray-700" : "text-white"}`}>
                {title}
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <p className="px-6 py-4">No users to display.</p>
        </div>
      </div>
    );
  }

  const headers = Object.keys(users[0]);

  return (
    <div className={`relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ${colorClass}`}>
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className={`font-semibold text-lg ${color === "light" ? "text-blueGray-700" : "text-white"}`}>
              {title}
            </h3>
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className={`px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ${tableHeadClass}`}
                >
                  {header.replace("_", " ")}
                </th>
              ))}
              <th
                className={`px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ${tableHeadClass}`}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                {headers.map((header) => (
                  <td
                    key={header}
                    className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                  >
                    {typeof user[header] === "boolean"
                      ? user[header].toString()
                      : user[header]}
                  </td>
                ))}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <button
                    onClick={() => onEdit(user)}
                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(user.id)}
                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

UserTable.defaultProps = {
  color: "light",
  users: [],
};

UserTable.propTypes = {
  title: PropTypes.string,
  users: PropTypes.array,
  color: PropTypes.oneOf(["light", "dark"]),
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};
