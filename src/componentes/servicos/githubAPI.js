export const buscarRepositorios = async (usuario) => {

    const resposta = await fetch(`https://api.github.com/users/${usuario}/repos`);
    return resposta.json();

};