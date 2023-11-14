import './App.css';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
// import { generateRandomTickets, insertTicketsIntoDatabase } from '../CreateTickets';

// const numTickets = 40;
// const randomTickets = generateRandomTickets(numTickets);

// insertTicketsIntoDatabase(randomTickets);

function App() {
  return (
    <>
      <Header />
      <SearchForm />
    </>
  );
}

export default App;