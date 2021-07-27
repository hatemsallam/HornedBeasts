import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



class SelectedBeast extends React.Component {


CloseModel= () => {
    this.props.closeModel(false)
}

    render() {
        return (
            <>
              <Modal show={this.props.modelShow} onHide={this.CloseModel}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src = {this.props.imgUrl} width='450px' height='250px' alt = {this.props.title}/>
            <p>{this.props.description}</p></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.CloseModel}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
            </>
             )
            }
}


export default SelectedBeast;