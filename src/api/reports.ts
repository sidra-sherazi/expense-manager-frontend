import api from "./axios";


export const getMonthlyReports = async()=>{

const response = await api.get(
    "/reports/monthly"
);

return response.data;

};



export const getYearlyReports = async()=>{

const response = await api.get(
    "/reports/yearly"
);

return response.data;

};



export const getCategoryReports = async()=>{

const response = await api.get(
    "/reports/category"
);

return response.data;

};