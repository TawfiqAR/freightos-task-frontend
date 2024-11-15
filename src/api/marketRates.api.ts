import axiosInstance from "../config/axios";

export const getPercentileSavings = async () => {
  const response = await axiosInstance.get(
    "/aggregated_market_rates/calculate_savings/"
  );
  return response;
};
