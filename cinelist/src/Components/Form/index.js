import './Form.css';
import { FaSistrix as Lupa } from "react-icons/fa6";
import { useState } from 'react';

function Form(props) {

    const [input, setInput] = useState('');

    function buscarFilme(e) {
        e.preventDefault();
        
    }

    return (
        <div className='div-form'>
            <form className="form" onSubmit={buscarFilme}>
                <input type="text" placeholder="Digite algum filme para pesquisar..." value={input} onChange={(e) => {setInput(e.target.value)}}/>
                <button type="submit"><Lupa style={{color: '#8A8A8A', fontSize: '20px'}}/></button>
            </form>
        </div>
    )
}

export default Form;