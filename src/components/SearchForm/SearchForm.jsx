import React, { useState, useEffect } from 'react';
import './SearchForm.css';
import { database } from '../../firebase';
import { ref, get } from 'firebase/database';
import TicketsList from '../TicketsList/TicketsList';
import Loader from '../Loader/Loader';

const SearchForm = () => {
    const [departure, setDeparture] = useState(localStorage.getItem('departure') || '');
    const [arrival, setArrival] = useState(localStorage.getItem('arrival') || '');
    const [date, setDate] = useState(localStorage.getItem('date') || '');
    const [time, setTime] = useState(localStorage.getItem('time') || '');

    const [isLoader, setIsLoader] = useState(false);

    const [allTickets, setAllTickets] = useState([]);
    const [filterTick, setFilterTick] = useState([]);
    const [isCoincidenceTickets, setIsCoincidence] = useState(false);

    useEffect(() => {
        localStorage.setItem('departure', departure);
        localStorage.setItem('arrival', arrival);
        localStorage.setItem('date', date);
        localStorage.setItem('time', time);
    }, [departure, arrival, date, time]);

    const handleFilter = (tickets) => {
        const oneTick = filteredTicketsOne(tickets);
        if (oneTick.length !== 0) {
            setIsCoincidence(true);
            setFilterTick(oneTick);
        } else {
            const twoTick = filteredTicketsTwo(tickets);
            setIsCoincidence(false);
            setFilterTick(twoTick);
        };
    }


    const filteredTicketsOne = (allTickets) => {
        return Object.values(allTickets).filter((ticket) => {
            return (
                ticket.departure.toLowerCase().includes(departure.toLowerCase()) &&
                ticket.arrival.toLowerCase().includes(arrival.toLowerCase()) &&
                ticket.departure_date.includes(date) &&
                ticket.departure_time.includes(time)
            )
        })
    }


    const filteredTicketsTwo = (allTickets) => {
        return Object.values(allTickets).filter((ticket) => {
            return (
                ticket.departure.toLowerCase().includes(departure.toLowerCase()) &&
                ticket.arrival.toLowerCase().includes(arrival.toLowerCase())
            );
        });
    }


    const getTickets = async () => {

        // Получаем список билетов с БД
        const dataRef = ref(database, 'tickets');
        const snapshot = await get(dataRef);
        const tickets = snapshot.val();

        // Записываем в стейт
        setAllTickets(tickets);
        handleFilter(tickets);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoader(true);
        try {
            if (allTickets.length === 0) {
                await getTickets();
            } else {
                handleFilter(allTickets);
            }
        } catch (error) {
            // Обработка ошибок, если необходимо
            console.error(error);
        } finally {
            setIsLoader(false);
        }
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
                <form onSubmit={handleSubmit} className='form'>
                    <div className={`input-container ${departure ? 'filled' : ''}`}>
                        <input
                            type="text"
                            value={departure}
                            onChange={(e) => {
                                setDeparture(e.target.value);
                            }}
                            required
                        />
                        <label className="input-label">Откуда</label>
                    </div>

                    <button className='form__button' type="button" onClick={handleSwap}>
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

                    <button type="submit" className='form__button'>Поиск</button>
                </form>
            </div>
            <TicketsList
                tickets={filterTick}
                isCoincidenceTickets={isCoincidenceTickets}
                searchPerformed={allTickets.length > 0 || filterTick.length > 0}
            />
            <Loader isLoader={isLoader} />
        </>
    );
};

export default SearchForm;