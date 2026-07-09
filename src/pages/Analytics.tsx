import {
  Wallet,
  DollarSign,
  TrendingUp,
  ArrowUpCircle,
  ArrowDownCircle,
} from "lucide-react";

import useAnalytics from "../hooks/useAnalytics";
import CategoryPieChart from "../components/dashboard/CategoryPieChart";


export default function Analytics(){


const {
summary,
categoryData,
loading

}=useAnalytics();



if(loading){

return (

<div className="flex justify-center items-center h-64">

<p className="text-slate-500 text-lg">
Loading analytics...
</p>

</div>

);

}



const cards = [

{
title:"Total Expenses",
value:summary.total_expenses,
icon:Wallet,
color:"bg-blue-500"
},

{
title:"Total Amount",
value:`Rs ${summary.total_amount}`,
icon:DollarSign,
color:"bg-green-500"
},

{
title:"Average Expense",
value:`Rs ${summary.average_amount}`,
icon:TrendingUp,
color:"bg-purple-500"
},

{
title:"Highest Expense",
value:`Rs ${summary.highest_expense}`,
icon:ArrowUpCircle,
color:"bg-red-500"
},

{
title:"Lowest Expense",
value:`Rs ${summary.lowest_expense}`,
icon:ArrowDownCircle,
color:"bg-orange-500"
}

];



return (

<div>


<h1 className="
text-3xl
font-bold
text-slate-800
mb-8
">

Analytics

</h1>



{/* Summary Cards */}


<div

className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-6
mb-10
"

>


{
cards.map((card,index)=>{


const Icon = card.icon;


return (

<div

key={index}

className="
bg-white
rounded-2xl
shadow-sm
p-6
flex
items-center
justify-between
hover:shadow-lg
transition
"

>


<div>

<p className="
text-sm
text-slate-500
">

{card.title}

</p>


<h2 className="
text-2xl
font-bold
mt-2
text-slate-800
">

{card.value}

</h2>


</div>




<div

className={`
${card.color}
text-white
p-4
rounded-xl
`}

>

<Icon size={28}/>

</div>



</div>


);


})

}


</div>




{/* Chart Section */}


<div

className="
bg-white
rounded-2xl
shadow-sm
p-6
"

>


<h2 className="
text-xl
font-semibold
text-slate-800
mb-6
">

Category Distribution

</h2>



<div className="
flex
justify-center
">

<CategoryPieChart

data={categoryData}

/>


</div>


</div>



</div>

);


}