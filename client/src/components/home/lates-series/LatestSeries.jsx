import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import styles from './LatestSeries.module.css'


export default function LatestSerie({
    _id,
    title,
    genre,
    imgURL,
    summary,
}) {
    
    return(
        <div className="row">
                <div className='col'>
                <Card style={{ width: '18rem', backgroundColor: '#1f2023', boxShadow: '2px 3px 30px black' }}>
                <Card.Img variant="top" className={styles.card_img} src={imgURL} />
                <Card.Body style={{backgroundColor: '#1f2023', color: '#dadada'}}>
                    <Card.Title className='mb-2'>{title}</Card.Title>
                    <Card.Subtitle  className='mb-4'>{genre}</Card.Subtitle>
                    <Card.Text className={styles.summary}>{summary}</Card.Text>
                    <Link to={`/series/${_id}/details`} className="btn btn-primary">More information</Link>
                </Card.Body>
                </Card>
                </div>
        </div>
    )
}