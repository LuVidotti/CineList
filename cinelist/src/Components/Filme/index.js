import './Filme.css';

function Filme(props) {
    return (
        <div className='container'>
            <div className='filme'>
                <img src='https://github.com/LuVidotti.png' alt='imagewm minha'/>
                <h4>{props.titulo}</h4>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
        </div>
        
        
    )
}

export default Filme;