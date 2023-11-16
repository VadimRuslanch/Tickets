import React, { useState, useEffect } from 'react';
import './SearchForm.css';
import { database } from '../../firebase';
import { ref, get } from 'firebase/database';
import TicketsList from '../TicketsList/TicketsList'

const SearchForm = () => {




    const [departure, setDeparture] = useState(localStorage.getItem('departure') || '');
    const [arrival, setArrival] = useState(localStorage.getItem('arrival') || '');
    const [date, setDate] = useState(localStorage.getItem('date') || '');
    const [time, setTime] = useState(localStorage.getItem('time') || '');

    const [filterTick, setFilterTick] = useState([])


    useEffect(() => {
        localStorage.setItem('departure', departure);
        localStorage.setItem('arrival', arrival);
        localStorage.setItem('date', date);
        localStorage.setItem('time', time);
    }, [departure, arrival, date, time]);


    const handleSearch = async (e) => {
        e.preventDefault();

        const dataRef = ref(database, 'tickets');

        const snapshot = await get(dataRef);

        const tickets = snapshot.val();

        // console.log(tickets);


        const filteredTickets = Object.values(tickets).filter(ticket => {
            return (
                ticket.departure.toLowerCase().includes(departure.toLowerCase()) ||
                ticket.arrival.toLowerCase().includes(arrival.toLowerCase()) ||
                ticket.departure_date.includes(date) ||
                ticket.departure_time.includes(time)
            );
        });
        // console.log(filteredTickets);
        setFilterTick(filteredTickets);
        // console.log('Найденные билеты:', filteredTickets);
    };

    const handleSwap = () => {
        // Обмен данными между departure и arrival
        const tempDeparture = departure;
        setDeparture(arrival);
        setArrival(tempDeparture);
    };

    return (
        <>
            <div className='submit__container'>
                <form onSubmit={handleSearch} className='form'>

                    <div className={`input-container ${departure ? 'filled' : ''}`}>
                        <input
                            type="text"
                            value={departure}
                            onChange={(e) => setDeparture(e.target.value)}
                            required
                        />
                        <label className="input-label">Откуда</label>
                    </div>

                    <button type="button" onClick={handleSwap}>
                        Поменять
                    </button>

                    <div className={`input-container ${arrival ? 'filled' : ''}`}>
                        <input
                            type="text"
                            value={arrival}
                            onChange={(e) => setArrival(e.target.value)}
                            required
                        />
                        <label className="input-label">Куда</label>
                    </div>

                    <div className='input-container'>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>

                    <div className='input-container'>
                        <input
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className='input__button'>Поиск</button>
                </form>
            </div>
            <TicketsList
                tickets={filterTick}
            />
        </>
    );
};

export default SearchForm;