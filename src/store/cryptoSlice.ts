import {createSlice} from '@reduxjs/toolkit';
import {fetchCrypto} from './actions/cryptos';

const initialState: any = {
  cryptos: [],
  error: null,
  loading: false,
};

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCrypto.fulfilled, (state, {payload}) => {
      if (payload.data) {
        state.cryptos.push(payload.data);
      } else {
        state.error = 'Error on Fetch';
      }
      state.loadign = false;
    });
    builder.addCase(fetchCrypto.rejected, state => {
      state.loading = false;
      state.error = 'Error on fetch';
    });
    builder.addCase(fetchCrypto.pending, state => {
      state.loading = true;
    });
  },
});

export const {clearError} = cryptoSlice.actions;
export default cryptoSlice.reducer;
