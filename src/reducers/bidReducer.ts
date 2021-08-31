import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// ! 배포 시 수정
const API_ENDPOINT = 'http://localhost:8000';

// XXX Type 수정해야 함
interface BidState {
  bids: any;
};

export const fetchBid = createAsyncThunk<
    any, { itemName: string; period: string; }
  >
  ('search/fetchBid',
  async (params) => {
    const { itemName, period } = params;

    const response = await fetch(`${API_ENDPOINT}/sj/${itemName}/${period}`);
    return await response.json();
  }
);

const bidSlice = createSlice({
  name: 'search',
  initialState: {
    bids: {},
  } as BidState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBid.fulfilled, (state, action) => {
        state.bids = action.payload;
      });
  },
});

export default bidSlice.reducer;