import { useEffect, useState } from "react";
import { analyticsService } from "../services/analyticsService";


export default function useAnalytics(){


const [summary,setSummary] = useState<any>(null);

const [categoryData,setCategoryData] = useState<any[]>([]);

const [loading,setLoading] = useState(true);



useEffect(()=>{


const loadData = async()=>{


try{


const summaryResponse =
await analyticsService.getSummary();



const categoryResponse =
await analyticsService.getCategorySummary();



setSummary(summaryResponse);

setCategoryData(categoryResponse);



}
catch(error){

console.log(error);

}
finally{

setLoading(false);

}


};


loadData();


},[]);



return {

summary,

categoryData,

loading

};


}