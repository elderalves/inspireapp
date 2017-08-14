import React from 'react';

class AdditionalQuote extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div onClick={this.props.handleClick}>
                <div className="arrow">
                    <img src="images/left-arrow.svg" alt=""/>
                </div>
                <div className="author">
                    <h2>{ this.props.quotation.title.rendered }</h2>
                    <h5>Engineer</h5>
                </div>
            </div>
        )
    }
}

export default AdditionalQuote;