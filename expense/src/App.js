import React from "react";
import {Header} from "./Components/Header";
import {Balance} from "./Components/Balance";
import {IncomeExpenses} from "./Components/IncomeExpenses";
import {TransactionList} from "./Components/TransactionList";
import {AddTransactions} from "./Components/AddTransactions";
import './App.css';
import {GlobalProvider} from "./Context/GlobalState";
function App() {
  return (
    <GlobalProvider >
    <Header />
      <div class="container">
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransactions />
      </div>
    </GlobalProvider>
  );
}

export default App;
