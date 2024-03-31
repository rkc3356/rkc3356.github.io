import '../App.css';
import { Link } from "react-router-dom";

function ImageButton({ to, name, img, alt, width, divStyle }) {
    return (
        <div className='ImageButton' style={divStyle}>
            <Link to={to} style={{ width: width ? width : 100 }}>
                <img src={img} alt={alt} width={width ? width : 100} />
            </Link>
        </div >
    );
}

export default ImageButton;