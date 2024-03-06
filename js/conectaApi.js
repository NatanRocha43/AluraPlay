
async function listaVideos() {
    const api = 'http://localhost:3000/videos'
    const conexao = await fetch(api);
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos
}