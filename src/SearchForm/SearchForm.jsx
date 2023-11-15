import React, { useState, useEffect } from 'react';
import './SearchForm.css';
import { database } from '../firebase';
import { ref, get } from 'firebase/database';
import { insertTicketsIntoDatabase, generateRandomTickets } from '../CreateTickets';

const SearchForm = () => {

    // const tick = generateRandomTickets(50);
    // insertTicketsIntoDatabase(tick);



    const [departure, setDeparture] = useState(localStorage.getItem('departure') || '');
    const [destination, setDestination] = useState(localStorage.getItem('destination') || '');
    const [date, setDate] = useState(localStorage.getItem('date') || '');
    const [time, setTime] = useState(localStorage.getItem('time') || '');


    useEffect(() => {
        // Сохраняем значения в localStorage при изменении состояния
        localStorage.setItem('departure', departure);
        localStorage.setItem('destination', destination);
        localStorage.setItem('date', date);
        localStorage.setItem('time', date);
    }, [departure, destination, date]);


    const handleSearch = async (e) => {
        e.preventDefault();

        const dataRef = ref(database, 'tickets');

        // Получаем всю базу данных
        const snapshot = await get(dataRef);

        // Получаем данные из снимка
        const tickets = snapshot.val();

        // Фильтруем билеты по городу отправления, городу прибытия и времени с датой

        // Выводим результат
        console.log('Найденные билеты:', tickets);

        // Ваша логика обработки поиска
    };

    const handleSwap = () => {
        // Обмен данными между departure и destination
        const tempDeparture = departure;
        setDeparture(destination);
        setDestination(tempDeparture);
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

                    <div className={`input-container ${destination ? 'filled' : ''}`}>
                        <input
                            type="text"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
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
        </>
    );
};

export default SearchForm;
