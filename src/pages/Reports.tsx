import {
  CalendarDays,
  FileSpreadsheet,
  FileText,
  Download,
} from "lucide-react";

import useReports from "../hooks/useReports";

import {
  downloadCSV,
  downloadExcel,
} from "../api/export";



export default function Reports(){


const {

monthly,
yearly,
category,
loading

}=useReports();




if(loading){

return (

<div className="flex justify-center items-center h-64">

<p className="text-slate-500 text-lg">
Loading reports...
</p>

</div>

);

}





return (

<div>



<div className="flex justify-between items-center mb-8">


<div>

<h1 className="
text-3xl
font-bold
text-slate-800
">

Reports

</h1>


<p className="
text-slate-500
mt-2
">

Analyze your expense history

</p>


</div>




<div className="flex gap-3">


<button

onClick={downloadCSV}

className="
bg-green-600
text-white
px-5
py-3
rounded-xl
flex
items-center
gap-2
hover:bg-green-700
"

>

<FileText size={20}/>

CSV

<Download size={18}/>

</button>




<button

onClick={downloadExcel}

className="
bg-blue-600
text-white
px-5
py-3
rounded-xl
flex
items-center
gap-2
hover:bg-blue-700
"

>

<FileSpreadsheet size={20}/>

Excel

<Download size={18}/>

</button>



</div>


</div>





{/* Monthly */}


<ReportTable

title="Monthly Report"

icon={<CalendarDays/>}

columns={["Month","Total"]}

data={monthly}

renderRow={(item:any)=>(

<>

<td className="px-6 py-4">
{item.month}
</td>


<td className="px-6 py-4 font-semibold">
Rs {item.total}
</td>

</>

)}

/>







{/* Yearly */}


<ReportTable

title="Yearly Report"

icon={<CalendarDays/>}

columns={["Year","Total"]}

data={yearly}

renderRow={(item:any)=>(

<>

<td className="px-6 py-4">
{item.year}
</td>


<td className="px-6 py-4 font-semibold">
Rs {item.total}
</td>


</>

)}

/>







{/* Category */}


<ReportTable

title="Category Report"

icon={<CalendarDays/>}

columns={["Category","Total"]}

data={category}

renderRow={(item:any)=>(

<>

<td className="px-6 py-4">
{item.category}
</td>


<td className="px-6 py-4 font-semibold">
Rs {item.total}
</td>


</>

)}

/>




</div>

);

}





function ReportTable({

title,
icon,
columns,
data,
renderRow

}:any){


return (

<div className="
bg-white
rounded-2xl
shadow-sm
mb-8
overflow-hidden
">


<div className="
flex
items-center
gap-3
p-6
border-b
">

<div className="
text-blue-600
">

{icon}

</div>


<h2 className="
text-xl
font-semibold
text-slate-800
">

{title}

</h2>


</div>




<table className="
w-full
text-left
">


<thead className="bg-slate-100">

<tr>


{
columns.map((col:string,index:number)=>(

<th
key={index}
className="px-6 py-4"
>

{col}

</th>

))
}



</tr>

</thead>




<tbody>


{
data.map((item:any,index:number)=>(

<tr

key={index}

className="
border-t
hover:bg-slate-50
"

>

{renderRow(item)}

</tr>

))

}


</tbody>


</table>


</div>


);


}