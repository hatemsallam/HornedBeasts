import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/Main';
import Data from './components/asessts/data.json';
import SelectedBeast from './components/SelectedBeast';





class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = { title: 'title', imgUrl: 'URL', description: 'imgDescription', showMod: false };
  }

  modalActivator = (title, imgUrl, description, showMod) => {
    this.setState({ title: title, imgUrl: imgUrl, description: description, showMod: showMod });
  };

  showModel = (showMod) =>{ this.setState ({showMod:showMod})
}
  render() {
    return (
      <>
        <Header />
        <SelectedBeast title={this.state.title} imgUrl={this.state.imgUrl} description={this.state.description} modelShow={this.state.showMod} closeModel = {this.showModel} />
        <Main data={Data} modalActivator={this.modalActivator} />
        <Footer />
      </>
    )
  }
}

export default App;