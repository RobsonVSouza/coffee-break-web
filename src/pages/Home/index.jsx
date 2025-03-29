import './style.css';
import Coffee from '../../assets/cafe.png'

function Home() {
  return (
    <div className="app">
      {/* Sidebar */}
      <nav className="sidebar">
        <div className="menu-header">
          <h2>Menu</h2>
          <div className="coffee-icon">
            <img src={Coffee} alt="Grão de Café" />
          </div>
        </div>

        <ul>
          <li><a href="#">🏠 Home</a></li>
          <li><a href="#">📦 Pedidos</a></li>
          <li><a href="#">📊 Relatórios</a></li>
          <li><a href="#">⚙️ Configurações</a></li>
        </ul>
      </nav>

      {/* Conteúdo Principal */}
      <div className="content">
        <div className="container">
          <h1>Bem-vindo!</h1>
          <p>Escolha uma opção no menu ao lado.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
