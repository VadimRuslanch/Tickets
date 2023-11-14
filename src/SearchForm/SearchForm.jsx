import React, { useState } from 'react';
import './SearchForm.css';
import { database } from '../firebase';
import { ref, get } from 'firebase/database';

const SearchForm = () => {
    const [departure, setDeparture] = useState('');
    const [destination, setDestination] = useState('');
    const [dateTime, setDateTime] = useState('');





    const handleSearch = async (e) => {
        e.preventDefault();

        const dataRef = ref(database, 'tickets');
        const snapshot = await get(dataRef);
        if (snapshot.exists()) {
            const data = snapshot.val();
            console.log(data);
            console.log(e.target);
        } else {
            console.log('Данные не найдены');
        }

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
                            value={dateTime}
                            onChange={(e) => setDateTime(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className='input__button' >Поиск</button>
                </form>
            </div>
        </>
    );
};

export default SearchForm;
