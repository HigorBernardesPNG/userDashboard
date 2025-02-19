export const buscarUsuario = async () => {

    const resposta = await fetch (`https://randomuser.me/api/?nat=br`);
    const dados = await resposta.json();
    return dados.results[0];

};