import {createSlice} from '@reduxjs/toolkit';
import {fetchCrypto} from './actions/cryptos';

const initialState: any = {
  cryptos: [],
};

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCrypto.fulfilled, (state, {payload}) => {
      state.cryptos.push(payload.data);
    });
  },
});

export default cryptoSlice.reducer;
