import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchUsers = () =>
  createAsyncThunk(
    "users/fetchUsers",
    async (_, { rejectWithValue, fulfillWithValue }) => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await res.json();
        return fulfillWithValue(data);
      } catch (error) {
        return rejectWithValue("Something went wrong while saving users!");
      }
    }
  );
