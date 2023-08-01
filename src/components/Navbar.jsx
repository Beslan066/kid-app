
import '../App.css';
import '../assets/js/main.js';
import jQuery from 'jquery'
import { Link, Outlet } from 'react-router-dom';




function Navbar () {
  return ( 
    <>
      <div className="page-wrapper chiller-theme toggled">
        <button id="show-sidebar" className="btn btn-sm btn-dark">
          <i className="fas fa-bars"></i>
        </button>
        <nav id="sidebar" className="sidebar-wrapper">
          <div className="sidebar-content">
            <div className="sidebar-brand">
              <h3>Берий Тоаба</h3>
              <div id="close-sidebar">
                <i className="fas fa-times"></i>
              </div>
            </div>
            
            <div className="sidebar-menu">
              <ul>
                <li className="header-menu">
                  <span>General</span>
                </li>
                <li className="sidebar-dropdown">
                  <Link to="/">
                    <i className="fa-solid fa-user-graduate"></i>
                    <span>База знаний</span>
                    <span className="badge badge-pill badge-warning">New</span>
                  </Link>
      
                </li>
      
                <li className="sidebar-dropdown">
                  <Link to="/quiz">
                    <i className="fa-solid fa-award"></i>
                    <span>Викторины</span>
                    
                  </Link>
                </li>
                <li className="sidebar-dropdown">
                  <Link to="/books">
                    <i className="fa-solid fa-book"></i>
                    <span>Книги</span>
                    <span className="badge badge-pill badge-danger">3</span>
                  </Link>
                </li>

                <li className="sidebar-dropdown">
                  <Link to="/fairy">
                  <i class="fa-solid fa-hat-wizard"></i>
                    <span>Сказки</span>
                  </Link>
                </li>

                <li className="sidebar-dropdown">
                  <Link to="/stats">
                    <i className="fa fa-chart-line"></i>
                    <span>Рейтинги</span>
                  </Link>
                </li>
                <li className="sidebar-dropdown">
                  <Link to="/mults.">
                    <i className="fa fa-film"></i>
                    <span>Мультфильмы</span>
                  </Link>
                  
                </li>
                
                <li className="sidebar-dropdown">
                  <Link to="/events">
                    <i className="fa fa-calendar"></i>
                    <span>Мероприятия</span>
                  </Link>
                </li>
      
                <li className="sidebar-dropdown">
                  <Link to="/games">
                    <i className="fa-solid fa-puzzle-piece"></i>
                    <span>Игровой раздел</span>
                    <span className="badge badge-pill badge-warning">New</span>
                  </Link>
                </li>
              </ul>

          
            </div>
          
          </div>
          
          <div className="sidebar-footer">
            <Link to="#">
            <i className="fa-solid fa-globe"></i>
              <span className="badge badge-pill badge-warning notification">Рус</span>
            </Link>
            <Link to="#">
              <i className="fa fa-bell"></i>
              <span className="badge badge-pill badge-success notification">7</span>
            </Link>
            <Link >
              <i className="fa fa-cog"></i>
              <span className="badge-sonar"></span>
            </Link>
            <Link>
            <i className="fa-solid fa-user"></i>
            </Link>
          </div>
        </nav>

        <main className="page-content">
          <Outlet/>
        </main>
      </div>


      

    </>

  );
}

export default Navbar;