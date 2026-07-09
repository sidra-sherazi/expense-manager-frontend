import {
  Wallet,
  CalendarDays,
  TrendingUp,
  Folder,
  Receipt,
  Flame,
  Clock,
} from "lucide-react";

import useDashboard from "../hooks/useDashboard";


export default function Dashboard() {


  const {
    data,
    loading
  } = useDashboard();



  if (loading) {

    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg text-slate-500">
          Loading dashboard...
        </p>
      </div>
    );

  }



  const cards = [

    {
      title: "Total Expenses",
      value: `Rs ${data.total_expenses}`,
      icon: Wallet,
      color: "bg-blue-500",
    },


    {
      title: "Expenses Today",
      value: `Rs ${data.expenses_today}`,
      icon: Clock,
      color: "bg-green-500",
    },


    {
      title: "This Week",
      value: `Rs ${data.expenses_this_week}`,
      icon: CalendarDays,
      color: "bg-purple-500",
    },


    {
      title: "This Month",
      value: `Rs ${data.expenses_this_month}`,
      icon: TrendingUp,
      color: "bg-orange-500",
    },


    {
      title: "Total Categories",
      value: data.total_categories,
      icon: Folder,
      color: "bg-indigo-500",
    },


    {
      title: "Expense Records",
      value: data.total_expense_records,
      icon: Receipt,
      color: "bg-pink-500",
    },


    {
      title: "Highest Expense",
      value: `Rs ${data.highest_expense}`,
      icon: Flame,
      color: "bg-red-500",
    },

  ];



  return (

    <div>


      {/* Header */}

      <div className="mb-8">

        <h1 className="
          text-3xl
          font-bold
          text-slate-800
        ">
          Welcome Back
        </h1>


        <p className="
          text-slate-500
          mt-2
        ">
          Here's your expense overview
        </p>


      </div>




      {/* Cards */}

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
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
                hover:shadow-lg
                transition
                p-6
                flex
                items-center
                justify-between
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
                    text-slate-800
                    mt-2
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



    </div>

  );


}