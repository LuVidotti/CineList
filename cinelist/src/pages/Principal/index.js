import Filme from '../../Components/Filme';
import Form from '../../Components/Form';
import './Principal.css';
import { useState, useEffect } from 'react';


function Principal() {
    const apiKey = '3acd99fa1b180cb1eb86ebe52bfdb5a6';
    const urlImagem = `https://image.tmdb.org/t/p/w300`
    
    const [filmes, setFilmes] = useState([]);
    const [pagina, setPagina] = useState(1);

    useEffect(() => {
        async function listaFilmes() {
            const resposta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${pagina}&language=pt-BR`);
            const dados = await resposta.json();
    
            setFilmes(dados.results);
        }

        listaFilmes()
    }, [pagina])

    console.log(filmes);

    return (
        <div className='principal'>
            <h1>Filmes Populares</h1>
            <Form />
            <ul>
                {filmes.map(filme => <Filme titulo={filme.title} texto={filme.overview} imagem={`${urlImagem}${filme.poster_path}`} key={filme.id}/>)}
            </ul>

            <div className='paginacao'>
                <button onClick={() => setPagina(pagina - 1)} disabled={pagina === 1}>Página Anterior</button>
                <button onClick={() => setPagina(pagina + 1)}>Próxima Página</button>
            </div>
        </div>
    )
}

export default Principal;