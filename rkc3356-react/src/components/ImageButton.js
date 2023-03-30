import '../App.css';
import { Link } from "react-router-dom";

function ImageButton({ to, name, img, alt }) {
    return (
        <div className='ImageButton'>
            <Link to={to} style={{ width: 100 }}>
                <img src={img} alt={alt} width={100} />
            </Link>
        </div >
    );
}

export default ImageButton;