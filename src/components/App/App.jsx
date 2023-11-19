import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Loader from '../Loader/Loader';
import { database } from '../../firebase';
import { ref, get } from 'firebase/database';
import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';

function App() {
  // Получаем билеты из БД
  const [allTickets, setAllTickets] = useState([]);
  const [isLoader, setIsLoader] = useState(true);


  useEffect(() => {
    if (allTickets.length === 0) {
      getTickets();
    }
  }, [allTickets]);

  console.log(allTickets);
  const getTickets = async () => {
    setIsLoader(true);
    const dataRef = ref(database, 'tickets');
    try {
      const snapshot = await get(dataRef);
      setAllTickets(snapshot.val());
    } catch (error) {
      console.error('Error fetching tickets:', error);
    } finally {
      setIsLoader(false);
    }
  }

  return (
    <>
      <Header />
      <Main allTickets={allTickets} />
      <Footer />
      <Loader isLoader={isLoader} />
    </>
  );
}

export default App;