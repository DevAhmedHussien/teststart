import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../lib/utils";

// ** Fetch All Seminars
export const fetchSeminars = createAsyncThunk("seminars/fetchAll", async () => {
  const response = await api.get("/seminars");
  return response.data;
});

// ** Fetch Single Seminar by ID
export const fetchOneFromSeminars = createAsyncThunk("seminars/fetchOne", async (id) => {
  const response = await api.get(`/seminars/${id}`);
  return response.data;
});

// ** Add New Seminar
export const addSeminar = createAsyncThunk("seminars/add", async (newSeminar) => {
    const response = await api.post("/seminars", newSeminar);
    return response.data;
  });
 
// ** Delete Seminar
export const deleteSeminar = createAsyncThunk("seminars/delete", async (id) => {
  await api.delete(`/seminars/${id}`);
  return id;
});

// ** Update Seminar
export const updateSeminar = createAsyncThunk("seminars/update", async (updatedSeminar) => {
  const response = await api.put(`/seminars/${updatedSeminar.id}`, updatedSeminar);
  return response.data;
});

// ** Seminar Slice
const seminarSlice = createSlice({
  name: "seminars",
  initialState: {
    items: [],
    item: null, 
    status: "idle",
    itemStatus: "idle",
    error: null,
    itemError: null, 
    searchQuery: "",
  },
  reducers: {
    searchItem: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // ** Fetch All Seminars **
      .addCase(fetchSeminars.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSeminars.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchSeminars.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchOneFromSeminars.pending, (state) => {
        state.itemStatus = "loading";
      })
      .addCase(fetchOneFromSeminars.fulfilled, (state, action) => {
        state.itemStatus = "succeeded";
        state.item = action.payload;
      })
      .addCase(fetchOneFromSeminars.rejected, (state, action) => {
        state.itemStatus = "failed";
        state.itemError = action.error.message;
      })

      // ** Delete Seminar **
      .addCase(deleteSeminar.fulfilled, (state, action) => {
        state.items = state.items.filter((seminar) => seminar.id !== action.payload);
      })

      // ** Update Seminar **
      .addCase(updateSeminar.fulfilled, (state, action) => {
        const index = state.items.findIndex((seminar) => seminar.id === action.payload.id);
        if (index !== -1) state.items[index] = action.payload;
      });
  },
});

export const { searchItem } = seminarSlice.actions;
export default seminarSlice.reducer;
