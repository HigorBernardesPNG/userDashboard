import './cartaoUsuario.css';

const UserCard = ({usuario}) => {
    console.log(usuario);
    return (

        <div className="containerUsuario">

            <div className='containerUsuario__containerConjunto'>
                <img className="containerUsuario__usuarioPicture" src={usuario.picture.large} alt="Foto do usuário" />
                <h2> {usuario.name.first} {usuario.name.last} </h2>
                <div className='containerUsuario__containerConjunto__infosUser'>
                    <p> <b>CPF:</b> {usuario.id.value} </p>
                    <p> <b>Genero:</b> {usuario.gender} </p>
                    <p> <b>Nacionalidade:</b> {usuario.nat} </p>
                    <p> <b>Reside:</b> {usuario.location.city} ({usuario.location.state}) </p>
                </div>
            </div>

            <div className='containerUsuario__containerLogoHT'>
                <img className="containerUsuario__logoHT" src="/LogoHT.png" alt="Foto do usuário" />
            </div>

        </div>

    );
};

export const usuario = {
    id: { value: "123.456.789-00" },
    name: { first: "João", last: "Silva" },
    location: { city: "São Paulo", state: "SP" },
    gender: "Masculino",
    nat: "BR",
    picture: { large: "https://randomuser.me/api/portraits/men/1.jpg" }
  };

export default UserCard