import React, { Component } from "react";
import Transition from 'react-transition-group/Transition';
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
    state = {
        modalIsOpen: false,
        showBlock: false
    };

    showModal = () => {
        this.setState({modalIsOpen: true});
    };

    closeModal = () => {
        this.setState({modalIsOpen: false});
    };

    render() {
        const { modalIsOpen, showBlock } = this.state;
        return (
            <div className="App">
                <h1>React Animations</h1>
                <button onClick={() => this.setState(state => ({ showBlock: !state.showBlock }))}
                        className="Button">
                    Toggle
                </button>
                <hr/>
                <Transition in={showBlock} timeout={300} mountOnEnter unmountOnExit>
                    {state => (
                        <div style={{
                            backgroundColor: 'red',
                            width: 100,
                            height: 100,
                            margin: '10px auto',
                            transition: 'opacity 300ms ease-in-out',
                            opacity: state === 'exiting' ? 0 : 1
                        }} />
                    )}
                </Transition>
                <Modal show={modalIsOpen} closed={this.closeModal} />
                { modalIsOpen ? <Backdrop show onClick={this.closeModal} /> : null }
                <button className="Button" onClick={this.showModal}>Open Modal</button>
                <h3>Animating Lists</h3>
                <List />
            </div>
        );
    }
}

export default App;
