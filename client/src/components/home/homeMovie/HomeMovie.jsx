import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import styles from '../homeMovie/HomeMovie.module.css'
import { Link } from 'react-router-dom';

export default function HomeMovie({
    _id,
    title,
    genre,
    imgURL,
    summary,
}) {
    
    return(
        <div className="row">
                <div className='col'>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className={styles.card_img} src={imgURL} />
                <Card.Body>
                    <Card.Title className='mb-2'>{title}</Card.Title>
                    <Card.Subtitle  className='mb-4'>{genre}</Card.Subtitle>
                    <Card.Text className={styles.summary}>{summary}</Card.Text>
                    <Link to={`/movies/${_id}/details`}><Button variant="primary">More information</Button></Link>
                </Card.Body>
                </Card>
                </div>
        </div>
    )
}