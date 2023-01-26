export type CryptoType = {
  id: number;
  name: string;
  symbol: string;
  market_data: {
    percent_change_usd_last_24_hours: number;
    price_usd: number;
  };
};
