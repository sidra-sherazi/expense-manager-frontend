import {
getMonthlyReports,
getYearlyReports,
getCategoryReports
} from "../api/reports";


export const reportService = {


monthly(){

return getMonthlyReports();

},


yearly(){

return getYearlyReports();

},


category(){

return getCategoryReports();

}


};