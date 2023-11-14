import React, { useState, useEffect } from 'react';
import database from '../firebase';


const SearchForm = ({ onSearch }) => {
    const [departure, setDeparture] = useState('');
    const [destination, setDestination] = useState('');
    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        console.log(database);
    })

    const handleSearch = async (e) => {
        e.preventDefault();
        // Используйте database для запроса данных согласно выбранным параметрам
        const ticketsRef = database.ref('tickets');
        const snapshot = await ticketsRef.once('value');
        const tickets = snapshot.val();
        // Фильтруйте билеты в соответствии с выбранными параметрами
        const filteredTickets = Object.values(tickets).filter(
            (ticket) =>
                ticket.departure === departure &&
                ticket.destination === destination &&
                ticket.dateTime === dateTime
        );
        // Передайте результаты поиска обратно в родительский компонент
        onSearch(filteredTickets);
    };

    return (
        <div className='submit__container'>
            <form onSubmit={handleSearch}>
                {/* Добавьте поля ввода и кнопку для фильтрации билетов */}
                <input
                    type="text"
                    placeholder="From"
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="To"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />
                <input
                    type="datetime-local"
                    value={dateTime}
                    onChange={(e) => setDateTime(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchForm;
