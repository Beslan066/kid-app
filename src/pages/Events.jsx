import '../App.css';
import '../assets/css/events.css';


function Events() {
    return (

                <div className="container-fluid event-container section-top-border">
                    <div className="row d-flex justify-content-between">
                        <div className="btns-filter">
                            <button className="btn btn-success">Актуальные</button>
                            <button className="btn btn-success">Прошлые</button>
                            <button className="btn btn-success">Скоро</button>
                        </div>

                        <div className="form-outline">
                            <input type="search" id="form1" className="form-control" placeholder="Поиск"
                                   aria-label="Search"/>
                        </div>
                    </div>
                    <div className="row event-item">
                        <div className="col-md-3">
                            <img src="img/cards/BIOLOGY.png" alt="" className="img-fluid"></img>
                        </div>
                        <div className="col-md-9 mt-sm-20 d-flex flex-column">
                            <div>
                                <h3>Конкурс на биологическую викторину "Витамины - чудесные вещества"</h3>
                            </div>

                            <div>
                                <p>Описание</p>
                            </div>
                            <div className="event-card-button d-flex justify-content-between">
                                <div className="d-flex">
                                    <span className="mr-2 text-green">12.11.2023 </span>
                                    <span className="mr-2"> - </span>
                                    <span className="text-red"> 31.12.2023</span>
                                </div>
                                <button className="btn btn-success">Участвовать</button>
                            </div>
                        </div>
                    </div>

                    <div className="row event-item">
                        <div className="col-md-3">
                            <img src="img/cards/BIOLOGY.png" alt="" className="img-fluid"></img>
                        </div>
                        <div className="col-md-9 mt-sm-20 d-flex flex-column">
                            <div>
                                <h3>Конкурс на биологическую викторину "Витамины - чудесные вещества"</h3>
                            </div>

                            <div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quaerat sed quam
                                    alias necessitatibus est non, libero minima unde quis?</p>
                            </div>
                            <div className="event-card-button d-flex justify-content-between">
                                <div className="d-flex">
                                    <span className="mr-2 text-green">12.11.2023 </span>
                                    <span className="mr-2"> - </span>
                                    <span className="text-red"> 31.12.2023</span>
                                </div>
                                <button className="btn btn-success">Участвовать</button>
                            </div>
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

export default Events;