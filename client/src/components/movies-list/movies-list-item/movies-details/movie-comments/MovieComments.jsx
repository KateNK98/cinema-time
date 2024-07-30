import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function() {
    return(
        <>
        <div className="row">
            <div className="text-center">
                <h2>Comments:</h2>
            </div>
            <div className="col">
                <ul>
                    <li>
                        <p>Content: I rate this one quite highly.</p>
                    </li>
                    <li>
                        <p>Content: The best game.</p>
                    </li>
                </ul>
            </div>
            <div className="col">
                <ul>
                    <li>
                        <p>Content: I rate this one quite highly.</p>
                    </li>
                    <li>
                        <p>Content: The best game.</p>
                    </li>
                </ul>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <p>No comments.</p>
            </div>
        </div>
        <div className="row">
            <div className="text-end">
                <a href="#" className="btn btn-primary">Edit</a>
                <a href="#" className="btn btn-primary">Delete</a>
            </div>
        </div>

        <div>
            <Form.Control as="textarea" rows={3} />
            <Button variant="primary" type="submit">
        Submit
      </Button>
        </div>

        {/* <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form">
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input className="btn submit" type="submit" value="Add Comment"/>
            </form>
        </article> */}
        </>
    )
}