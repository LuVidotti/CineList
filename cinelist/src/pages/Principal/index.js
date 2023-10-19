import Filme from '../../Components/Filme';
import Form from '../../Components/Form';
import './Principal.css';


function Principal() {
    return (
        <div className='principal'>
            <h1>Filmes Populares</h1>
            <Form />
            <Filme titulo="test de filme nao sei oque"/>
        </div>
    )
}

export default Principal;