import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';



class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfBeasts: 0
        }
    }

    incrementNumOfBeasts = () => {
        this.setState({
            numOfBeasts: this.state.numOfBeasts + 1
        })
    }

    dataToApp = () => {
        this.props.modalActivator (this.props.title, this.props.imgUrl, this.props.description, true  );
    };




    render() {
        return (
            <>


                {
                    
                        <Card  onClick={this.incrementNumOfBeasts} style={{ width: "18rem", height: "30rem" }}>
                            <Card.Img onClick={this.dataToApp}  variant="top" src={this.props.imgUrl} />
                            <Card.Body>
                                <Card.Title>{this.props.title}</Card.Title>
                                <Card.Text>
                                    Number of votes ❤  {this.state.numOfBeasts}
                                </Card.Text>
                                <Card.Footer>
                                    {this.props.description}
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    
                }








            </>
        )
    }
}

export default HornedBeasts;