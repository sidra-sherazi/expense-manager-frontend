import { Edit, Trash2 } from "lucide-react";


interface Props{

categories:any[];

onEdit:(category:any)=>void;

onDelete:(id:number)=>void;

}



export default function CategoryTable({

categories,
onEdit,
onDelete

}:Props){



return (

<div

className="
bg-white
rounded-2xl
shadow-sm
overflow-hidden
"

>


<table className="
w-full
text-left
"


>


<thead

className="
bg-slate-100
"

>

<tr>

<th className="px-6 py-4">
ID
</th>


<th className="px-6 py-4">
Category
</th>


<th className="px-6 py-4">
Actions
</th>


</tr>

</thead>



<tbody>


{
categories.map((cat)=>(


<tr

key={cat.id}

className="
border-t
hover:bg-slate-50
"

>


<td className="px-6 py-4">

{cat.id}

</td>



<td className="px-6 py-4 font-medium">

{cat.name}

</td>




<td className="px-6 py-4 flex gap-3">


<button

onClick={()=>onEdit(cat)}

className="
text-blue-600
hover:text-blue-800
"

>

<Edit size={20}/>

</button>



<button

onClick={()=>onDelete(cat.id)}

className="
text-red-600
hover:text-red-800
"

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