import api from "./axios";


export const downloadCSV = async () => {

  const response = await api.get(
    "/export/csv",
    {
      responseType: "blob",
    }
  );

  return response.data;

};



export const downloadExcel = async () => {

  const response = await api.get(
    "/export/excel",
    {
      responseType: "blob",
    }
  );

  return response.data;

};