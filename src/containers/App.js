import React,{Component} from "react";
import Cardlist from "../components/Cardlist";
import  Scroll  from '../components/Scroll';
import  ErrorBoundry  from '../components/ErrorBoundry';
import SearchBox from "../components/Searchbox";

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.cypress.io/users')
        .then(response=>response.json())
        .then(users =>this.setState({ robots: users})) 
    }

    OnSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render(){ 
        const {robots , searchfield} = this.state
        const filteredRobots = robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        return (
            
            <div className="tc">
                <h1 className="f1">robo Freinds</h1>
                <SearchBox searchChange={this.OnSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <Cardlist  robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }
}

export default App;