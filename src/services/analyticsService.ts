import {
  getAnalyticsSummary,
  getCategorySummary
} from "../api/analytics";


export const analyticsService = {


  getSummary(){

    return getAnalyticsSummary();

  },


  getCategorySummary(){

    return getCategorySummary();

  }


};