import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

import MainCSS from '../scss/main.scss';

import TitlePage from './components/TitlePage';
import AdditionalQuote from './components/AdditionalQuote';
import Quote from './components/Quote';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            mainQuote: {},
            nextIndex: 1,
            prevIndex: 0,
        }
    }

    componentDidMount() {
        Axios.get(this.props.urlAPI)
             .then((response) => {
                 this.setState({
                     data: response.data,
                     mainQuote: response.data[0],
                     prevIndex: response.data.length
                 });
             })
             .catch(function(error) {
                 console.log(error);
             })
    }

    changeQuote(direction) {
        
        if(direction == "next") {
            let newData = this.state.data.shift();
            this.state.data.push(newData);
            
        } else {
            let newData = this.state.data.pop();
            this.state.data.unshift(newData);
        }

        this.setState({
            data: this.state.data
        })
       
        
    }

    render() {
        if(this.state.data.length > 0) {
            return (
                <div>
                    <header>
                        <TitlePage />
                    </header>
                    
                    <main>
                        <div className="col-small">
                            <AdditionalQuote quotation={this.state.data[this.state.data.length - 1]} handleClick={this.changeQuote.bind(this,'prev')} />
                        </div>
                        <div className="col-big">
                            <Quote quotation={this.state.data[0]} />
                        </div>
                        <div className="col-small">
                            <AdditionalQuote quotation={this.state.data[1]} handleClick={this.changeQuote.bind(this, 'next')} />
                        </div>
                    </main>
                </div>
            );
        } else {
            return (
                <div></div>
            )
        }
        
    }
}

ReactDOM.render(<App urlAPI="http://localhost:8888/mtc/repositories/inpireapp/quote-api/wp-json/wp/v2/posts" />, document.getElementById('root'));