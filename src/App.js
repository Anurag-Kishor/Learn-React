import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import AddTransation from './components/AddTransation';
import { GlobalProvider } from './context/GlobalState';

import TransactionList
 from './components/TransactionList';
import './App.css';

function App() {
  return (
    <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransation />
        </div>
    </GlobalProvider>
  );
}

export default App;
