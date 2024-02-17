import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/usersStore/users.thunk.js";

const UserList = () => {
  const dispatch = useDispatch();
  const { data, total } = useSelector((state) => state.users);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("Triggered");
    dispatch(fetchUsers());
  };

  return (
    <div>
      <h1>Users</h1>
      <h6>Total: {total}</h6>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default UserList;
