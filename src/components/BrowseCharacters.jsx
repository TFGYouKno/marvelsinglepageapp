import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/CharacterList.css';

const BrowseCharacters = () => {
    const [characters, setHeroes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHeroes = async () => {
            try {
                const response = await axios.get('https://gateway.marvel.com/v1/public/characters?limit=6&ts=1&apikey=622d9d65b9313973e25890e52cfc48de&hash=18cc4ba93b6ceb6009e066300b4bd121');
                setHeroes(response.data.data.results); 
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchHeroes(); 
    }, []); 

    if (loading) {
        return <h3>Loading characters...please wait</h3>;
    }

    return (
        <div>
            <h3>Characters</h3>
            <div className="grid-container">
                {characters.map(character => (
                    <div key={character.id} className="grid-item">
                        <img 
                        src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                        width="200" 
                        alt={character.name} 
                        className="thumbnail"/>
                        <p>{character.name}</p>
                        <Link to={`/characters/${character.id}`}>View Details</Link>
                    </div>
            ))}
            </div>
        </div>
    );
};

export default BrowseCharacters;