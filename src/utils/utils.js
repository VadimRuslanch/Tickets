const transformDate = (inputDate) => {
    const months = [
        "января", "февраля", "марта",
        "апреля", "мая", "июня",
        "июля", "августа", "сентября",
        "октября", "ноября", "декабря"
    ];

    const [year, month, day] = inputDate.split("-");
    const monthIndex = parseInt(month, 10) - 1; // Subtracting 1 to convert to zero-based index

    const transformedDate = `${parseInt(day, 10)} ${months[monthIndex]} ${year}`;

    return transformedDate;
}


const filteredTicketsOne = (allTickets, departure, arrival, date, time) => {
    return Object.values(allTickets).filter((ticket) => {
        return (
            ticket.departure.toLowerCase().includes(departure.toLowerCase()) &&
            ticket.arrival.toLowerCase().includes(arrival.toLowerCase()) &&
            ticket.departure_date.includes(date) &&
            ticket.departure_time.includes(time)
        )
    })
}

const filteredTicketsTwo = (allTickets, departure, arrival) => {
    return Object.values(allTickets).filter((ticket) => {
        return (
            ticket.departure.toLowerCase().includes(departure.toLowerCase()) &&
            ticket.arrival.toLowerCase().includes(arrival.toLowerCase())
        );
    });
}

export { transformDate, filteredTicketsOne, filteredTicketsTwo };