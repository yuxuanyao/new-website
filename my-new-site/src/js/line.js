import React from 'react';


const horizontalLineStyle = {
    height: '1px',
    width: '70%',
    backgroundColor: '#e3e3e3',
    margin: 'auto',
    marginTop: '2%',
    marginBottom: '0px',
}

class HorizontalLine extends React.Component {
    render() {
        return (
            < div style={horizontalLineStyle} ></div >
        );
    }
}


export default HorizontalLine;