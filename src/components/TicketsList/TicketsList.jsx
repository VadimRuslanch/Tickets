import './TicketsList.css';
import Ticket from '../Ticket/Ticket';
import { useState, useEffect } from 'react';


const TicketsList = ({ tickets, isCoincidenceTickets }) => {
    console.log(isCoincidenceTickets);
    const [text, setText] = useState('');
    useEffect(() => {
        if (isCoincidenceTickets) {
            setText('Выберите куда хотите отправиться');
        } else {
            setText('Билетов в этом направлении нет');
        }
    }, [tickets, isCoincidenceTickets]);


    return (
        <div className='tickets'>
            <h2 className='tickets__title heading-2'>{text}</h2>
            <div className="tickets__list">
                {tickets.map((ticket) => (
                    <Ticket
                        key={ticket.id}
                        tickets={ticket} />)
                )}
            </div>
        </div>
    );
};

export default TicketsList;