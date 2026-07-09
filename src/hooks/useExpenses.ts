import { useEffect, useState } from "react";
import { expenseService } from "../services/expenseService";


export default function useExpenses(){

const [expenses,setExpenses] = useState<any[]>([]);
const [loading,setLoading] = useState(true);


const [pagination,setPagination] = useState({
    total:0,
    page:1,
    limit:10,
    pages:1
});



const fetchExpenses = async(filters:any={})=>{

try{

const data = await expenseService.getAll(filters);


setExpenses(data.items);

setPagination({

total:data.total,
page:data.page,
limit:data.limit,
pages:data.pages

});


}
catch(error){

console.log(error);

}
finally{

setLoading(false);

}


};



useEffect(()=>{

fetchExpenses();

},[]);



const addExpense = async(data:any)=>{

await expenseService.create(data);

fetchExpenses();

};



const removeExpense = async(id:number)=>{

await expenseService.remove(id);

fetchExpenses();

};



const editExpense = async(
id:number,
data:any
)=>{

await expenseService.update(id,data);

fetchExpenses();

};



return {

expenses,
loading,
pagination,
fetchExpenses,
addExpense,
removeExpense,
editExpense

};


}