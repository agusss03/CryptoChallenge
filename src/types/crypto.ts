export type CryptoType = {
  id: number;
  name: string;
  symbol: string;
  metrics: {
    market_data: {
      percent_change_usd_last_24_hours: number;
      price_usd: number;
    };
  };
};
