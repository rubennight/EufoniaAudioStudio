import { useNavigate } from "react-router-dom";

export function Menu() {
  const navigate = useNavigate();

    return (
      <nav className="menu">
        <ul>
          <li>
            <button>Citas</button>
          </li>
          <br />
          <li>
            <button onClick={ () => navigate('/servicios')}>Servicios</button>
          </li>
          <br />
          <li>
            <button onClick={ () => navigate('/artistas-eufonia')}>Artistas</button>
          </li>
          <br />
          <li>
            <button>Belicore</button>
          </li>
        </ul>
      </nav>
    );
  }
  