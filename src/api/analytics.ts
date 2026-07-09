import api from "./axios";


export const getAnalyticsSummary = async () => {

  const response = await api.get(
    "/analytics/summary"
  );

  return response.data;

};



export const getCategorySummary = async () => {

  const response = await api.get(
    "/analytics/category-summary"
  );

  return response.data;

};