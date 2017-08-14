import React from 'react';

class Quote extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="quote">
                <div className="picture">
                    <img src={this.props.quotation.thumbnail} />
                </div>
                <div className="content">
                    <h2>{this.props.quotation.title.rendered}</h2>
                    <h5>{this.props.quotation.acf.author_description}</h5>
                    <p>"{this.props.quotation.plaintext}"</p>
                </div>
            </div>
        )
    }
}

export default Quote;