import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './app/components/header/Header';
import { Skills } from './app/components/skill/Skill';

import { skillsContainerArray } from './app/models/skills';
import { linksArrayOfObjects } from './app/models/header';
import './root.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.listOfObjects = linksArrayOfObjects;
    }
    render() {
        return (
            <div className="container-fluid">
                <Header name={"Anshuman Upadhyay"}
                    socialNetwork={this.listOfObjects}
                />
                <hr />

                <div className="row root-settings">

                    {skillsContainerArray.map((objectContainer, index) =>
                        <Skills key={index} skillObjects={objectContainer}
                        />

                    )
                    }

                </div>
            </div>

        );
    }

}

ReactDOM.render(<App />, document.getElementById('root')); 