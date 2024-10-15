import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const goToUseRef = () => {
        navigate('/useref');
    };

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={goToUseRef}>Go to Use ref</button>

            <nav>
                <Link to="/">Home</Link>
                <NavLink to="/about"  >
                    About
                </NavLink>
            </nav>

        </div>
    )
}
