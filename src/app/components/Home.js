import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            age: props.initialAge,
            homeLink: props.initialLinkName
        };

        console.log('Constructor');
    }

    componentWillMount() { // Just before rendering
        console.log('Component will mount');
    }

    componentDidMount() {
        console.log('Component did mount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('Console will receive props', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should component update', nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component will update', nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component Did Update', prevProps, prevState);
    }

    componentWillUnmount() {
        console.log('Component will Unmount');
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink)
    }

    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        });
    }

    render() {
        return(
            <div>
                <p>In a new Component</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <hr/>
                {/* <button 
                className="btn btn-primary"
                onClick={this.onMakeOlder.bind(this)}>
                    Make me Older!
                </button> */}
                <button 
                className="btn btn-primary"
                onClick={() => this.onMakeOlder()}>
                    Make me Older!
                </button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">
                    Greet!
                </button>
                <hr/>
                <input type="text" value={this.state.homeLink} 
                onChange={(event) => this.onHandleChange(event)} 
                />
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">
                    Change the Link!
                </button>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initalAge: PropTypes.number,
    greet: PropTypes.func,
    changeLink: PropTypes.func,
    initialLinkName: PropTypes.string
};