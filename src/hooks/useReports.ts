import { useEffect, useState } from "react";
import { reportService } from "../services/reportService";


export default function useReports(){


const [monthly,setMonthly]=useState<any[]>([]);

const [yearly,setYearly]=useState<any[]>([]);

const [category,setCategory]=useState<any[]>([]);

const [loading,setLoading]=useState(true);



useEffect(()=>{


const loadReports=async()=>{


try{


const m =
await reportService.monthly();


const y =
await reportService.yearly();


const c =
await reportService.category();



setMonthly(m);

setYearly(y);

setCategory(c);



}
catch(error){

console.log(error);

}
finally{

setLoading(false);

}


};


loadReports();


},[]);



return {

monthly,
yearly,
category,
loading

};


}