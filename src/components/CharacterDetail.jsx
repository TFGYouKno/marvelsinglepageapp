import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

function CharacterDetail() {
    const {id} = useParams();
    const [hero, setHero] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchHero = async () => {
        try{

        const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}?limit=6&ts=1&apikey=622d9d65b9313973e25890e52cfc48de&hash=18cc4ba93b6ceb6009e066300b4bd121`);

        console.log(response.data);
        setHero(response.data.data.results[0]);
        setLoading(false);
        } catch (error){
        console.error("error fetching heroes", error);
        }
    }

        fetchHero();
    }, [id])

    if(loading){
        return <h3>Loading...please wait</h3>
    }

    return (
        <div>
            <br/>
            <Link to={'/characters'}>Back to Characters</Link>
            <br/>

            <div>
                <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                    width="200" alt={hero.name}/>

                <h3>{hero.name}</h3>

                {hero.description &&
                    <div>
                        <h4>Description</h4>
                        <p>{hero.description}</p>
                    </div>
                }

                <h4>Comics:</h4>
                {hero.comics.items.map(comic => (
                    <div key={comic.resourceURI}>
                        {comic.name}
                    </div>
                ))}
            </div>
        </div>
    )



}

export default CharacterDetail;