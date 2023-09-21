import React from 'react';

const ManageUser = () => {
  return (
    <div className="w-full">
      <h1 className="h-[75px] flex justify-between items-center text-3xl font-bold p-4 border-b">
        <span>Manage user</span>
      </h1>
      <div className="w-full p-4">
        <div className="flex justify-end py-4">Content</div>
        <table className="table-auto mb-6 text-left w-full">
          <thead className="font-bold bg-gray-700 text-[13px] text-white">
            <tr className="border border-gray-500">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Email address</th>
              <th className="px-4 py-2">Fullname</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Created At</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-gray-500">
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
