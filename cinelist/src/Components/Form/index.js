import './Form.css';
import { FaSistrix as Lupa } from "react-icons/fa6";

function Form() {
    return (
        <div className='div-form'>
            <form className="form">
                <input type="text" placeholder="Digite algum filme para pesquisar..."/>
                <button type="submit"><Lupa style={{color: '#8A8A8A', fontSize: '20px'}}/></button>
            </form>
        </div>
    )
}

export default Form;