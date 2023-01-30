import {CryptoType} from '../types/crypto';

export type initialStateType = {
  cryptos: CryptoType[];
  error: string | null;
  loading: boolean;
};
