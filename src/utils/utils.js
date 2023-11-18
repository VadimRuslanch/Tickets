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


export { transformDate };