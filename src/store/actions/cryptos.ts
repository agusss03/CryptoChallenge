import {createAsyncThunk} from '@reduxjs/toolkit';
import {API_URL} from '@env';
import {CryptoType} from '../../types/crypto';

export const fetchCrypto = createAsyncThunk(
  'crypto/fetchCrypto',
  async (code: string) => {
    try {
      const response = await fetch(`${API_URL}/${code}/metrics`);
      const data = await response.json();
      return data;
    } catch (error) {
      if (!error) {
        throw new Error('Fetch error');
      }
    }
  },
);

export const updateFetchCrypto = createAsyncThunk(
  'crypto/updateFetchCrypto',
  async (crypto: CryptoType[]) => {
    const updatedData = [];

    for (let i = 0; i < crypto.length; i++) {
      const response = await fetch(`${API_URL}/${crypto[i].symbol}/metrics`);
      const data = await response.json();

      updatedData.push(data.data);
    }
    return updatedData;
  },
);
