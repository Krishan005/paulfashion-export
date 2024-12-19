import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const url = "/api/sendmsg";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  data: [],
  loading: false,
  error: null,
};

// Async thunk to fetch posts
export const addMsgs = createAsyncThunk(
  'posts/addMsgs',
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(url, data);
      return response.data; // Axios already parses the JSON
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to fetch posts");
    }
  }
);

export const postsSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addMsgs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addMsgs.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(addMsgs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || "Something went wrong";
      });
  },
});

export default postsSlice.reducer;
