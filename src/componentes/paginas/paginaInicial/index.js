import './paginas.css';
import { useState, useEffect } from 'react';
import { buscarUsuario } from '../../servicos/userAPI';
import { buscarClima } from '../../servicos/weatherAPI';
import UserCard from '../../componentesReutilizaveis/cartaoUsuario/index';
import WeatherCard from '../../componentesReutilizaveis/cartaoClima/index';

const Home = () => {
  const [usuario, setUsuario] = useState(null);
  const [clima, setClima] = useState(null);
  
  const carregarDados = async () => {

    const dadosUsuario = await buscarUsuario();
    setUsuario(dadosUsuario);

    if (dadosUsuario?.location?.city){

      const dadosClima = await buscarClima(dadosUsuario.location.city);
      setClima(dadosClima);

    }


  };

  useEffect(() => {
    carregarDados(); // Chama automaticamente ao iniciar
  }, []);
  
  return (
    <section className='containerIndex'>
      <div className='containerIndex_user'>
       {usuario && <UserCard usuario={usuario} />}
      </div>
      <div className='containerIndex_clima'>
        {clima && <WeatherCard clima={clima} />}

        <div className='containerIndex__button'>
          <button onClick={carregarDados} className='btn btn-primary'>Gerar Usuário</button>
        </div>

      </div>
    </section>
  );
};
export default Home;