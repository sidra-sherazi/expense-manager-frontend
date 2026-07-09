import { useEffect, useState } from "react";
import { dashboardService } from "../services/dashboardService";


export default function useDashboard(){

  const [data,setData] = useState<any>(null);
  const [loading,setLoading] = useState(true);


  useEffect(()=>{

    dashboardService.getDashboard()
      .then((response)=>{
        setData(response);
      })
      .finally(()=>{
        setLoading(false);
      });


  },[]);


  return {
    data,
    loading
  };

}