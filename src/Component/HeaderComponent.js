import {Link} from "react-router-dom";
function HeaderComponent(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">WELCOME</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/student">List</Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="#">Feedback</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}
export default HeaderComponent;