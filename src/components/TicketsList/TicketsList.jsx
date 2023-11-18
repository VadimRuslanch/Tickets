import './TicketsList.css';
import Ticket from '../Ticket/Ticket';
import { useState, useEffect } from 'react';


const TicketsList = ({ tickets, isCoincidenceTickets, searchPerformed }) => {
    const [text, setText] = useState('');

    useEffect(() => {
        if (searchPerformed) {
            if (isCoincidenceTickets) {
                setText('Результат по вашему запросу');
            } else if (tickets.length === 0) {
                setText('Билетов в этом направлении нет');
            } else if (tickets.length > 0) {
                setText('Билетов по вашему запросу нет, возможно вам подойдут эти');
            }
        };

    }, [tickets, isCoincidenceTickets, searchPerformed]);

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