import './Ticket.css'

const Ticket = () => {
    return (
        <div className="train-ticket">
            <div className="train-ticket__info">
                <div className="train-ticket__schedule">
                    <div className="train-ticket__date">16 нояб</div>
                    <span className="train-ticket__time">23:39</span>
                </div>
                <span className="train-ticket__station">Ростов-Главный</span>
                <div className="train-ticket__schedule">
                    <div className="train-ticket__date">17 нояб</div>
                    <span className="train-ticket__time">23:09</span>
                </div>
                <span className="train-ticket__station">Восточный вокзал</span>
            </div>
            <div className="train-ticket__details">
                <div className="train-ticket__duration">23 ч 30 мин</div>
                <div className="train-ticket__className">
                    <span className="train-ticket__className-type">купе</span>
                    <span className="train-ticket__className-seats">3</span>
                </div>
                <div className="train-ticket__price">от&nbsp;4 997 ₽</div>
            </div>
            <div className="train-ticket__actions">
                <span className="train-ticket__price">от&nbsp;4 997 ₽</span>
                <a className="train-ticket__select" href="/trains/rostov-on-don--moscow/?direction=backward&amp;forwardSegmentId=9612913_9879173_1700167140&amp;returnWhen=2023-11-17&amp;when=2023-11-16">
                    <span className="train-ticket__select-text">Выбрать поезд туда</span>
                </a>
            </div>
        </div>
    );
};

export default Ticket;

