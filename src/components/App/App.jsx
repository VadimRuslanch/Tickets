import './App.css';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Main from '../Main/Main';
// import { generateRandomTickets, insertTicketsIntoDatabase } from '../CreateTickets';

// const numTickets = 40;
// const randomTickets = generateRandomTickets(numTickets);

// insertTicketsIntoDatabase(randomTickets);

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;