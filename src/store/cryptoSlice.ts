import {createSlice} from '@reduxjs/toolkit';
import {fetchCrypto} from './actions/cryptos';
import {initialStateType} from './types';

const initialState: initialStateType = {
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
        if (
          state.cryptos.filter(cryptos => cryptos.id === payload.data.id)
            .length > 0
        ) {
          state.error = 'This Cryptocurrency was already added';
        } else {
          state.cryptos.push(payload.data);
        }
      } else {
        state.error = 'Error on Fetch';
      }
      state.loading = false;
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
