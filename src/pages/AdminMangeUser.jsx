import React from "react";
import { useAdminFunctions } from "../provider/AdminProvider";

function AdminMangeUser() {
  const {
    users,
    handleRoleChange,
    handleAddUser,
    activeTab,
    newUser,
    setNewUser,
  } = useAdminFunctions();

  return (
    <>
      {" "}
      {activeTab === "manage-users" && (
        <div>
          <h2 className="text-2xl font-bold mb-4">User Management</h2>

          {/* Add New User */}
          <div className="mb-6">
            <h3 className="text-lg mb-2">Add New User</h3>
            <input
              type="text"
              placeholder="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              className="p-2 mr-2 text-white"
            />
            <select
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              className="p-2 text-white"
            >
              <option className="text-black" value="user">
                User
              </option>
              <option className="text-black" value="admin">
                Admin
              </option>
            </select>
            <button
              onClick={handleAddUser}
              className="ml-2 bg-purple-600 px-4 py-2 rounded hover:bg-purple-800"
            >
              Add User
            </button>
          </div>

          {/* Users Table */}
          <table className="w-full text-left border-collapse border border-white ">
            <thead>
              <tr>
                <th className="border border-white px-4 py-2">ID</th>
                <th className="border border-white px-4 py-2">Name</th>
                <th className="border border-white px-4 py-2">Role</th>
                <th className="border border-white px-4 py-2">Edit</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="border border-white px-4 py-2">{user.id}</td>
                  <td className="border border-white px-4 py-2">{user.name}</td>
                  <td className="border border-white px-4 py-2">{user.role}</td>
                  <td className="border border-white px-4 py-2">
                    <select
                      value={user.role}
                      onChange={(e) =>
                        handleRoleChange(user.id, e.target.value)
                      }
                      className="text-white p-1"
                    >
                      <option className="text-black" value="user">
                        User
                      </option>
                      <option className="text-black" value="admin">
                        Admin
                      </option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default AdminMangeUser;
