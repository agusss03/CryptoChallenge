import {createAsyncThunk} from '@reduxjs/toolkit';
import {API_URL} from '@env';

export const fetchCrypto = createAsyncThunk(
  'crypto/fetchCrypto',
  async (code: string) => {
    try {
      const response: any = await fetch(`${API_URL}/${code}/metrics`);
      const data = await response.json();

      return data;
    } catch (error) {
      if (!error) {
        throw new Error('Fetch error');
      }
    }
  },
);
