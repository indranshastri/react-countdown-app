import React,{ Component } from 'react';
import './App.css';

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state={
            days:0,
            hours:0,
            minute:0,
            sec:0
        }
    }

    getTimeUntil(deadline){
        const time = Date.parse(deadline)-Date.parse(new Date());
        const sec = Math.floor((time/1000)%60);
        const minute = Math.floor((time/1000/60)%60);
        const hours = Math.floor(time/(1000*60*60)%24);
        const days = Math.floor(time/(1000*60*60*24));
        this.setState({
            days,hours,minute,sec
        });
    }

    componentWillMount(){
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount(){
        setInterval(()=>this.getTimeUntil(this.props.deadline),1000);
    }

    leading0(num){
        return (num<10) ? '0'+num: num;
    }

    render(){
        return(
            <div>
                <div className="Clock-days"> {this.leading0(this.state.days)} days </div>
                <div className="Clock-hours"> {this.leading0(this.state.hours)} hours </div>
                <div className="Clock-min"> {this.leading0(this.state.minute)} min </div>
                <div className="Clock-sec"> {this.leading0(this.state.sec)} sec </div>
            </div>
        )
    }
}

export default Clock;
