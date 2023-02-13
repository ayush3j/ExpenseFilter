import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const DummyData = [
    {
      id: "e1",
      title: "car insurance",
      amount: 200,
      date: new Date(2023, 5, 5),
    },
    {
      id: "e2",
      title: "tractor insurance",
      amount: 300,
      date: new Date(2023, 5, 2),
    },
    {
      id: "e3",
      title: "bike insurance",
      amount: 100,
      date: new Date(2023, 5, 2),
    },
    {
      id: "e4",
      title: "car insurance",
      amount: 400,
      date: new Date(2022, 5, 2),
    },
  ];

  const [expenses, setExpenses] = useState(DummyData);

  const onAddExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
