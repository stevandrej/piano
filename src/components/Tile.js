import React from 'react';

const Tile = (props) =>
{
    return(
        <div className="column no-space">
            <div className="ui segment center aligned tile" onClick={props.click}>
                <span>{props.noteName}</span>
            </div>            
        </div>
    );
}

export default Tile;