
import '../App.css';



function Homepage() {
  return (

            <div className="container-fluid quiz-container">
                <div className="row d-flex">
                    <div className="col-md-12">
                        <ul className="list-group row">
                            <li className="list-group-item col-xs-6" style={{background: 'linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)'}}><i class="fa-solid fa-rocket"></i> <p>Астрономия</p><i class="fa-solid fa-arrow-right arrow"></i></li>
                            <li className="list-group-item col-xs-6" style={{background: 'radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%)'}}><i class="fa-solid fa-dna"></i><p>Биология</p><i class="fa-solid fa-arrow-right arrow"></i></li>
                            <li className="list-group-item col-xs-6" style={{background: 'radial-gradient(circle at 7.5% 24%, rgb(237, 161, 193) 0%, rgb(250, 178, 172) 25.5%, rgb(190, 228, 210) 62.3%, rgb(215, 248, 247) 93.8%)'}}><i class="fa-solid fa-flask-vial"></i><p>Химия</p><i class="fa-solid fa-arrow-right arrow"></i></li>
                            <li className="list-group-item col-xs-6" style={{background: 'linear-gradient(171.8deg, rgb(238, 156, 167) 13.8%, rgb(246, 204, 162) 82.6%)'}}><i class="fa-solid fa-book-open"></i><p>История</p><i class="fa-solid fa-arrow-right arrow" ></i></li>
                            <li className="list-group-item col-xs-6" style={{background: 'linear-gradient(109.6deg, rgb(17, 151, 147) 11.2%, rgb(154, 214, 212) 55.4%, rgb(255, 233, 171) 100.2%)'}}><i class="fa-solid fa-tree-city"></i><p>Экология</p><i class="fa-solid fa-arrow-right arrow"></i></li>
                            <li className="list-group-item col-xs-6" style={{background: 'linear-gradient(15deg, #13547a 0%, #80d0c7 100%)'}}><i class="fa-solid fa-atom"></i><p>Физика</p><i class="fa-solid fa-arrow-right"></i></li>
                       </ul>
                    </div>
                </div>
            </div>
  );
}

export default Homepage;