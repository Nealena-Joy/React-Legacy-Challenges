import React, {Component} from 'react';

export default class DogIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: '',
        };
        this.getDoggy = this.getDoggy.bind(this);
    };

    getDoggy() {
        console.log('Component Mounted')

        fetch(`https://dog.ceo/api/breeds/image/random/.json`)
        .then((res) => res.json())
        .then((data) => (this.setState({img: data.message})))
        .catch(error => console.log("This error:", error))
    };
    
    componentDidMount() {
        this.getDoggy();
    }
   
    render() {
        return(
            <div>
                <h4>Random Doggy Photo</h4>
                <button onClick={this.getDoggy}>Fetch the Random Doggy</button>
                <br/><br/>
                <img src={this.state.img} alt="doggy" size="100px"/>
            </div>
        )
    }


    
}