import React from 'react';
import ReactDOM from 'react-dom';

/*
let Mixin = InnerComponent => class extends React.Component{
    constructor(){
        super();
        this.state = {
            value: 0
        }
        this.update = this.update.bind(this);
    }
    update(){
        this.setState({
            value: this.state.value +1
            //esercizio sui riferimenti
            //red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
             /!*green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
             blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value,
             black: ReactDOM.findDOMNode(this.refs.black.refs.inp).value*!/
        })
    }
    render(){
        return (
            <InnerComponent update ={this.update}
                {...this.state}
                {...this.props}
            />
        )
    }
}
*/

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            red:0,
            value: 0
        }
        
        this.update = this.update.bind(this);
    }
    update(e){
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
            value: this.state.red
            //esercizio sui riferimenti
            //red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
            /*green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
             blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value,
             black: ReactDOM.findDOMNode(this.refs.black.refs.inp).value*/
        })
    }
    render(){
        //Esercizio sui Children
        return (
            <div>
                <NumInput ref="red"
                          update={this.update}
                          min={0}
                          max={100}
                          step={1}
                          label="Red"
                          type="number"
                          value={+this.state.value}
                />
                <label>{this.state.red}</label>
                <div>
                    <h1>

                        <hr />
                    </h1>
                </div>
            </div>
        )
    }
}
/*
const Button = (props)=> <button onClick={props.update}>{props.txt} - {props.value}</button>

const Label = (props)=> <label onMouseMove={props.update}>{props.txt} - {props.value}</label>
*/

/*
let ButtonMixed = Mixin(Button)
let LabelMixed = Mixin(Label)
*/

/*    const Widget = (props) => {
        return(
        <div>
        <input type="text" onChange={props.update}/>
        <h4>{props.txt}</h4></div>
    );
    }*/
class NumInput extends React.Component{
    render(){
        let label = this.props.label !== '' ? <label>{this.props.label} - {this.props.value}</label> : ''
        return(
            <div>
                <input
                    type={this.props.type}
                    ref="inp"
                    min={this.props.min}
                    max={this.props.max}
                    defaultValue = {this.props.value}
                    step = {this.props.step}
                    onChange={this.props.update}/>
                {label}
            </div>
        );    
    }
}
NumInput.propTypes={
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number,
    value: React.PropTypes.number,
    label: React.PropTypes.string,
    update: React.PropTypes.func.IsRequired,
    type: React.PropTypes.oneOf(['range','number'])
}

/*
class Button extends React.Component{
    constructor() {
        super();
        this.state = {
            value: 0
        };
    }
        // esercizio su mount ed unmount
      /!*  this.val = this.val.bind(this);
        this.mount = this.mount.bind(this);
        this.unmount = this.unmount.bind(this);
    }

    mount(){
        this.componentWillMount();
        ReactDOM.render(<App/>,document.getElementById('tobehidden'));
        this.componentDidMount();
    }

    unmount(){
        this.componentWillUnmount();
        ReactDOM.unmountComponentAtNode(document.getElementById('tobehidden'));
        this.componentDidUnmount();
    }
    componentWillMount(){
        console.log('Mounting');
    }

    componentWillUnmount(){
        console.log('Unmounting');
    }

    componentDidMount(){
        console.log('Mounted!');
    }

    componentDidUnmount(){
        console.log('Unmounted!');
    }
    val(){
        this.setState({value: this.state.value+1});
        if (this.state.value % 5 === 0) console.log('multiplo di 5!');
        else console.log('Non multiplo di 5');
    }*!/
    render(){
        
      return  (
          <div>
            <button onClick={this.mount}>Mount</button>
              <button onClick={this.unmount}>Unmount</button>
            <button onClick={this.val}>{this.state.value}</button>
            <div id="tobehidden"></div>
          </div>
              );
    }
}
*/

//esercizio "children"
//const Star = () =>  <span className="glyphicon glyphicon-heart"></span>

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}
App.defaultProps = {
    txt: 'Default txt property',
    cat: 0
}
//const App = () => <div><h1>Son of a bAtch</h1></div>
export default App;