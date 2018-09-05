import React from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

export const Skills = (props) => {
    return (
        <div className="col-md-6 col-sm-6 col-xs-6">

            <div className="card text-center">
                <div className="card-header">
                    <img width={props.skillObjects.width} 
                        height={props.skillObjects.height} 
                        src={props.skillObjects.imageSource} 
                        alt="skill-related-image" 
                    />
                </div>

                <div className="card-body">
                    <h5 className="card-title">
                        {props.skillObjects.title}
                    </h5>

                    <p className="card-text">
                        {props.skillObjects.displayDescription}
                    </p>
                </div>

                <div className="card-footer text-muted">
                    {props.skillObjects.dateOfCompletion}
                </div>
            </div>
        </div>
    );
}