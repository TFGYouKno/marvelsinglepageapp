import { useNavigate } from 'react-router-dom'

function NotFound(){

    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/')
    }, 5000)
    return (
        <div>
            <h2>404 - Page Not Found</h2>
            <p>You will be redirected to the homepage in 5 seconds.</p>
        </div>
    );
}

export default NotFound;