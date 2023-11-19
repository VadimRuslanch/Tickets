import React, { useState, useEffect } from 'react';
import './SearchForm.css';
import TicketsList from '../TicketsList/TicketsList';
import Loader from '../Loader/Loader';
import { filteredTicketsOne } from '../../utils/utils';

const SearchForm = ({ allTickets }) => {
    const initialFormValue = {
        departure: '',
        arrival: '',
        date: '',
        time: '',
    };

    // Получение данных из localStorage при первом рендере
    const storedFormValue = JSON.parse(localStorage.getItem('searchFormValue')) || initialFormValue;
    const [formValue, setFormValue] = useState(storedFormValue);

    const [isLoader, setIsLoader] = useState(false);
    const [filterTick, setFilterTick] = useState([]);

    const handleFilter = (tickets) => {
        setFilterTick(filteredTicketsOne(tickets, formValue.departure, formValue.arrival, formValue.date, formValue.time))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoader(true);
        try {
            await handleFilter(allTickets);
        } catch (error) {
            console.error(error);
        } finally {
            setTimeout(() => {
                setIsLoader(false);
            }, 1000);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value,
        });
    };

    const handleSwap = () => {
        setFormValue({
            ...formValue,
            departure: formValue.arrival,
            arrival: formValue.departure,
        });
    };

    useEffect(() => {
        // Сохранение данных в localStorage при изменении formValue
        localStorage.setItem('searchFormValue', JSON.stringify(formValue));
        handleFilter(allTickets);
    }, [formValue, allTickets]);

    return (
        <>
            <div className='submit__container'>
                <form onSubmit={handleSubmit} className='form'>

                    <div className={`input-container ${formValue.departure ? 'filled' : ''}`}>
                        <input
                            type='text'
                            value={formValue.departure}
                            name='departure'
                            onChange={handleChange}
                            required
                        />
                        <label className='input-label'>Откуда</label>
                    </div>

                    <button className='form__button' type='button' onClick={handleSwap}>
                        Поменять
                    </button>

                    <div className={`input-container ${formValue.arrival ? 'filled' : ''}`}>
                        <input
                            type='text'
                            value={formValue.arrival}
                            name='arrival'
                            onChange={handleChange}
                            required
                        />
                        <label className='input-label'>Куда</label>
                    </div>

                    <div className='input-container'>
                        <input
                            type='date'
                            value={formValue.date}
                            name='date'
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className='input-container'>
                        <input
                            type='time'
                            value={formValue.time}
                            name='time'
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type='submit' className='form__button'>
                        Поиск
                    </button>
                </form>
            </div>
            <TicketsList
                tickets={filterTick}
                isCoincidenceTickets={filterTick.length !== 0}
            />
            <Loader isLoader={isLoader} />
        </>
    );
};

export default SearchForm;
