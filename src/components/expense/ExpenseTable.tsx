import { Edit, Trash2 } from "lucide-react";


interface Props{

expenses:any[];

onEdit:(expense:any)=>void;

onDelete:(id:number)=>void;

}



export default function ExpenseTable({

expenses,
onEdit,
onDelete

}:Props){



return (

<div className="
bg-white
rounded-2xl
shadow-sm
overflow-hidden
">


<table className="
w-full
text-left
">


<thead className="
bg-slate-100
">


<tr>

<th className="px-6 py-4">
Title
</th>

<th className="px-6 py-4">
Amount
</th>

<th className="px-6 py-4">
Description
</th>

<th className="px-6 py-4">
Category
</th>

<th className="px-6 py-4">
Date
</th>

<th className="px-6 py-4">
Action
</th>

</tr>


</thead>



<tbody>


{
expenses.map((expense)=>(


<tr

key={expense.id}

className="
border-t
hover:bg-slate-50
"

>


<td className="px-6 py-4">

{expense.title}

</td>



<td className="px-6 py-4 font-semibold">

Rs {expense.amount}

</td>




<td className="px-6 py-4">

{expense.description}

</td>



<td className="px-6 py-4">

{expense.category_id}

</td>



<td className="px-6 py-4">

{
new Date(
expense.created_at
).toLocaleDateString()
}

</td>




<td className="
px-6
py-4
flex
gap-3
">


<button

onClick={()=>onEdit(expense)}

className="text-blue-600"

>

<Edit size={20}/>

</button>




<button

onClick={()=>onDelete(expense.id)}

className="text-red-600"

>

<Trash2 size={20}/>

</button>


</td>


</tr>


))

}


</tbody>


</table>


</div>

);


}