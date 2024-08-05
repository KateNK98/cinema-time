import Card from 'react-bootstrap/Card'; 
import { Link } from 'react-router-dom';

import styles from './RatedMovie.module.css'

export default function RatedMovie({
    _id,
    title,
    genre,
    summary,
    year,
    rate,
  }) {
    
    return(
        <>
            <Card style={{ width: '18rem', backgroundColor: '#1f2023', boxShadow: '2px 3px 30px black', marginBottom: '5%' }}>
                <Card.Body style={{backgroundColor: '#1f2023', color: '#dadada'}}>
                    <Card.Title className='mb-2'>{title}</Card.Title>
                    <Card.Subtitle  className='mb-4'>Year: {year} &#x2756; Genre: {genre} &#x2756; Rating: {rate}</Card.Subtitle>
                    <Card.Text className={styles.summary}>{summary}</Card.Text>
                    <Link to={`/movies/${_id}/details`} className="btn btn-primary" >More information</Link>
                </Card.Body>
            </Card>
        </>
    )
}