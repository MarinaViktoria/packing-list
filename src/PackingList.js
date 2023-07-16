import { Component } from "react";
export class PackingList extends Component {
    constructor(){
        super();
        this.state={
            userInput: "",
            list: []
        }
    }
    onChangeEvent(e) {
        this.setState({userInput: e});
    }
    addItem(newPoint){
        if (newPoint === "") {
            alert("Enter something you need!")
        }
        else {
        let allPoints = this.state.list;
        allPoints.push(newPoint);
        this.setState({
            list: allPoints,
            userInput: ""})
            console.log(allPoints)
        }
    }
    wordCrossed(e){
        const li = e.target;
        li.classList.toggle("crossed")
    }
    deletedItem(){
        let allPoints = this.state.list;
        allPoints = [];
        this.setState({
            list: allPoints
        })
    }
    onFormSubmit(e) {
        e.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
            <div>
            <div className="myPlans">
                <input type="text"
                placeholder="I need..."
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            
                <button onClick={() => this.addItem(this.state.userInput)}
                className="added">Add</button>
                <button onClick={() => this.deletedItem()}
                className="deleted">Delete</button>
            </div>
                <ul>
                    {this.state.list.map((newPoint, index) =>
                    (<li onClick={this.wordCrossed} key={index}>{newPoint}</li>))
                    }    
                </ul>
            </div>
            </form>
        )}}