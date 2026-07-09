import {
PieChart,
Pie,
Cell,
Tooltip,
Legend
} from "recharts";


export default function CategoryPieChart({
data
}:{
data:any[]
}){


return (

<PieChart width={400} height={300}>


<Pie

data={data}

dataKey="total"

nameKey="category"

cx="50%"

cy="50%"

outerRadius={100}

label

>


{
data.map((item,index)=>(

<Cell key={index}/>

))
}


</Pie>


<Tooltip/>

<Legend/>


</PieChart>


);


}