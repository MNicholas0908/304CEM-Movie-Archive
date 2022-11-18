import React, { Component } from 'react';

const api_key = '2f84122'

class SearchBar extends Component {
 
    state = {
        inputMovie: ''
    }

    handleChange = (e) => {
        this.setState({inputMovie: (e.target.value)})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        fetch(`http://www.omdbapi.com/?apikey=${api_key}&s=${this.state.inputMovie}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const {Search = [], TotalResults = 0} = data
                console.log({Search, TotalResults})
                this.props.onResults(Search)
            })
    }


    render() {
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" onChange={this.handleChange} type="text" placeholder="Find a Movie"/>
                        </div>
                        <div className="control">
                            <button className="button is-info" href="/">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default SearchBar;