import { createContext, useState } from "react";

export const ExpenseContext = createContext();

function ExpenseProvider({ children }) {

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: "Team Lunch",
      paidBy: "Pallavi",
      amount: 1850,
    },

    {
      id: 2,
      title: "Office Tea",
      paidBy: "Rahul",
      amount: 650,
    },

    {
      id: 3,
      title: "Printer Ink",
      paidBy: "Priya",
      amount: 2200,
    },
  ]);

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        setExpenses,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseProvider;