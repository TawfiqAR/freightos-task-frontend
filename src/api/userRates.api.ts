import { UploadFile } from "antd";
import axiosInstance from "../config/axios";

export const uploadRates = async (csvFile: UploadFile) => {
  const formData = new FormData();
  formData.append("file", csvFile.originFileObj as Blob);
  const response = await axiosInstance.post("user_rates", formData);
  return response;
};
