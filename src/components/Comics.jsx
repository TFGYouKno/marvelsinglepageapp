import { useState, useEffect } from 'react';
import axios from 'axios';

const Comics = () => {
    const [comics, setComics] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchComics = async () => {
            try {
                const response = await axios.get('https://gateway.marvel.com/v1/public/comics?limit=6&ts=1&apikey=b97ba94173991a29c43d20160bc378b1&hash=c73d1dea3fa3833da7dd6b35c9b160b0');
                console.log(response.data.data.results);
                setComics(response.data.data.results);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching comics:', error);
            }
        };

        fetchComics();

    }, []);

    if(loading){
        return <h3>Loading...please wait</h3>;
    }

    return (
        <div>
            <h3>Comics</h3>
            <div className="grid-container">
                {comics.map(comic => (
                    <div key={comic.id} className="grid-item">
                        <img 
                        src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                        width="200" 
                        alt={comic.title}
                        className="thumbnail" />
                        <a href={comic.urls[0].url} target="_blank">{comic.title}</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comics;