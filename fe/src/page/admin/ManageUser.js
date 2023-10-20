import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { InputForm, Select } from '../../component';
import { useForm } from 'react-hook-form';
import { BlockStatus, roles } from '../../ultils/contact';
import Swal from 'sweetalert2';

const ManageUser = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    email: '',
    firstname: '',
    lastname: '',
    role: '',
    phone: '',
    status: '',
  });
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/users/')
      .then((response) => {
        setData(response.data.data.getAllUser);
        // console.log(response.data.data.getAllUser);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleID = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        axios.delete(`http://localhost:8080/api/v1/users/${id}`);
        setTimeout(function () {
          window.location.reload();
        }, 2000);
      }
    });
  };

  const handleUpdate = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full">
      <h1 className="h-[75px] flex justify-between items-center text-3xl font-bold p-4 border-b">
        <span>Manage user</span>
      </h1>
      <div className="w-full p-4">
        <div className="flex justify-end py-4">Content</div>
        <form onSubmit={handleSubmit(handleUpdate)}>
          {edit && <button type="submit">Update</button>}
          <table className="table-auto mb-6 text-left w-full">
            <thead className="font-bold bg-gray-700 text-[13px] text-white">
              <tr className="border border-gray-500">
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Email address</th>
                <th className="px-4 py-2">FirstName</th>
                <th className="px-4 py-2">lastName</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, idx) => {
                return (
                  <tr className="border border-gray-500" key={item._id}>
                    <td className="px-4 py-2">{idx + 1}</td>
                    <td className="px-4 py-2">{item.email}</td>
                    <td className="px-4 py-2">{item.firstName}</td>
                    <td className="px-4 py-2">{item.lastName}</td>
                    <td className="px-4 py-2">
                      {edit?._id === item._id ? (
                        <Select
                          register={register}
                          fullWidth
                          error={errors}
                          defaultValue={item.role}
                          id={'email'}
                          validate={{ require: 'Require fill' }}
                          options={roles}
                          errors={errors}
                        />
                      ) : (
                        <span>{item.role}</span>
                      )}
                    </td>
                    <td className="px-4 py-2">{item.phone}</td>
                    <td className="px-4 py-2">
                      {/* {edit?._id === item._id ? (
                      <Select
                        register={register}
                        error={errors}
                        validate={{ require: true }}
                        options={BlockStatus}
                      />
                    ) : ( */}
                      <span>{item.isBlocked ? 'Block' : 'Active'}</span>
                      {/* )} */}
                    </td>
                    <td className="px-4 py-2">
                      <span
                        onClick={() => setEdit(item)}
                        className="px-2 text-orange-600 hover:underline cursor-pointer"
                      >
                        Edit
                      </span>
                      <span
                        onClick={() => handleID(item._id)}
                        className="px-2 text-orange-600 hover:underline cursor-pointer"
                      >
                        Delete
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default ManageUser;
