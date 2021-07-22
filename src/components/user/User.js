import {useHistory} from "react-router-dom";
import {Button, Card} from "react-bootstrap";
import styles from './User.module.css';

export const User = ({user}) => {

    const history = useHistory();

    return (
        <Card className={ styles.card }>
            <Card.Body className={ styles.cardBody }>
                <Card.Title>{ user.name }</Card.Title>
                <Button onClick={ () => history.push(`/${ user.id }/posts/`) }
                        variant="primary">Posts</Button>
            </Card.Body>
        </Card>
    );
}


