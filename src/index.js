import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './app/components/Header';
import { Home } from './app/components/Home'; 



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homeLink: 'Home',
            homeMounted: true
        };
    }

    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }

    onGreet() {
        alert("Hello!");
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
    }

    render() { 
        let homeComponent = '';
        if (this.state.homeMounted) {
            homeComponent = (
                <Home
                name={'Anshuman'}
                initialAge={24}
                greet={this.onGreet}
                changeLink={this.onChangeLinkName.bind(this)}
                initialLinkName={this.state.homeLink}
                />
            );
            
        }
        return(

            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <Header homeLink={this.state.homeLink}/>                    
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <button onClick={() => this.onChangeHomeMounted()} className="btn btn-primary">
                            (Un)Mount Home Component
                        </button>
                        {homeComponent}
                    </div>
                </div>

            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);