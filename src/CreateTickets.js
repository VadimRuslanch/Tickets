import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCFkAMEQOLx_RHuT-91KTjbncB_0PXC8VA",
    authDomain: "teckets-b3e61.firebaseapp.com",
    databaseURL: "https://teckets-b3e61-default-rtdb.firebaseio.com",
    projectId: "teckets-b3e61",
    storageBucket: "teckets-b3e61.appspot.com",
    messagingSenderId: "382274279134",
    appId: "1:382274279134:web:d01e3a309275a8608c144f"
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

function getRandomCity() {
    const cities = ["Москва", "Санкт-Петербург", "Лондон", "Париж", "Берлин", "Нью-Йорк", "Токио"];
    return cities[Math.floor(Math.random() * cities.length)];
}

function getRandomDate() {
    const year = 2023;
    const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
    return `${year}.${month}.${day}`;
}

function getRandomTime() {
    const hours = String(Math.floor(Math.random() * 24)).padStart(2, '0');
    const minutes = String(Math.floor(Math.random() * 60)).padStart(2, '0');
    return `${hours}:${minutes}`;
}

function generateRandomTicket(id) {
    return {
        "id": id,
        "departure": getRandomCity(),
        "arrival": getRandomCity(),
        "departure_date": getRandomDate(),
        "departure_time": getRandomTime(),
        "arrival_date": getRandomDate(),
        "arrival_time": getRandomTime()
    };
}

function generateRandomTickets(numTickets) {
    const tickets = [];
    for (let i = 1; i <= numTickets; i++) {
        tickets.push(generateRandomTicket(i));
    }
    return tickets;
}

const insertTicketsIntoDatabase = async (tickets) => {
    const ticketsRef = ref(database, 'tickets');
    await set(ticketsRef, tickets);
    console.log('Tickets inserted into the database.');
};


export { insertTicketsIntoDatabase, generateRandomTickets };



