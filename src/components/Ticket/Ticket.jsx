import './Ticket.css'
import { transformDate } from '../../utils/utils';

const Ticket = ({ tickets }) => {

    const date = transformDate(tickets.departure_date);
    return (
        <div className='ticket'>
            <div className='ticket__details'>
                <div className='ticket__dateTime'>

                    <p className='ticket__time'>{tickets.departure_time}</p>
                    <p className='ticket__date'>{date}</p>
                </div>
                <p className='ticket__location'>{tickets.departure}</p>
            </div>
            <div className='ticket__details'>

                <p className='ticket__time'><span className='text-13'>Время пути: </span>00:00</p>
                <p className='ticket__location'>{tickets.arrival}</p>

            </div>
            <div className='ticket__sale'>
                <p className='ticket__price'>от&nbsp;4997₽ </p>
                <button className='ticket__button'>Купить билет</button>
            </div>
        </div>

    );
};

export default Ticket;

