import SearchForm from "../SearchForm/SearchForm";
import './Main.css'

export default function Main({ allTickets }) {


    return (
        <main className="main">
            <div className="main__container">
                <SearchForm allTickets={allTickets} />
            </div>
        </main>
    )
}