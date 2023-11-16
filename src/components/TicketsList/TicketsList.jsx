import './TicketsList.css'
import Ticket from '../Ticket/Ticket';

const TicketsList = ({ tickets }) => {
    console.log(tickets);
    return (
        <div className="ticketList">
            {tickets.map((ticket) => (
                <Ticket
                    key={ticket.id}
                    tickets={ticket} />)
            )}
        </div>
    );
};

export default TicketsList;