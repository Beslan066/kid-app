
import '../App.css';
import '../assets/css/quiz.css';


function Quiz() {
    return (
        <div className="container-fluid">
            <div className="row">

                <div className="dropdown">
                    <button className="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown">Фильтр по
                        категориям
                        <span className="caret"></span></button>
                    <ul className="dropdown-menu">
                        <input className="form-control" id="myInput" type="text" placeholder="Search.." />
                            <li><a href="#">Астрономия</a></li>
                            <li><a href="#">Биология</a></li>
                            <li><a href="#">География</a></li>
                            <li><a href="#">Физика</a></li>
                            <li><a href="#">Химия</a></li>
                    </ul>
                </div>

            </div>

            <div className="row">
                <div className="card-item">
                    <div className="card" style={{width: '18rem;'}}>
                        <img className="card-img-top" src="img/cards/chemistry.png" alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">Химический карнавал</h5>
                            </div>
                    </div>
                    <a href="#" className="btn btn-success">Изучить</a>
                </div>

                <div className="card-item">
                    <div className="card" style={{width: '18rem;'}}>
                        <img className="card-img-top" src="img/cards/BIOLOGY.png" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Биологическое приключение</h5>
                            </div>
                    </div>
                    <a href="#" className="btn btn-success">Изучить</a>
                </div>

                <div className="card-item">
                    <div className="card" style={{width: '18rem;'}}>
                        <img className="card-img-top" src="img/cards/physics.png" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Физика веселых открытий</h5>
                            </div>
                    </div>
                    <a href="#" className="btn btn-success">Изучить</a>
                </div>

                <div className="card-item">
                    <div className="card" style={{width: '18rem;'}}>
                        <img className="card-img-top" src="img/cards/astro.png" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Звездные приключения</h5>
                            </div>
                    </div>
                    <a href="#" className="btn btn-success">Изучить</a>
                </div>

                <div className="card-item">
                    <div className="card" style={{width: '18rem;'}}>
                        <img className="card-img-top" src="img/cards/Geography.png" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Путешествие по миру</h5>
                            </div>
                    </div>
                    <a href="#" className="btn btn-success">Изучить</a>
                </div>

                <div className="card-item">
                    <div className="card" style={{width: '18rem;'}}>
                        <img className="card-img-top" src="img/cards/ecology.png" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">С заботой о природе</h5>
                            </div>
                    </div>
                    <a href="#" className="btn btn-success">Изучить</a>
                </div>

                <div className="card-item">
                    <div className="card" style={{width: '18rem;'}}>
                        <img className="card-img-top" src="img/cards/history.png" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Приключения в мире экологии</h5>
                            </div>
                    </div>
                    <a href="#" className="btn btn-success">Изучить</a>
                </div>


                <hr/>
            </div>

            <div className="row show-more">
                <div>
                    <button className="btn btn-success">Показать больше</button>
                </div>
            </div>

            <footer className="text-center">
                <div className="mb-2">
                    <small>
                        © 2023 Разработано компанией - <a target="_blank" rel="noopener noreferrer"
                                                          href="https://www.toaba.ru">
                        Тоаба
                    </a>
                    </small>
                </div>
            </footer>
        </div>
    );
}

export default Quiz;