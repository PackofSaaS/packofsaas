import React, { Component } from 'react'

export default class TimeManagement extends Component {

    constructor(props){
        super(props);

        this.state = {
            minutes : 25,
            seconds : 0
        }

        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this)
    }

    startTimer = () => {
        this.myInterval = setInterval(() => {
            console.log("...." +this.state.seconds)
            
            if(this.state.minutes == 0 && this.state.seconds == 0)
            {

                clearInterval(this.myInterval)
                this.setState({
                    minutes : 0,
                    seconds: 0
                })

                return;
            }
           

            if(this.state.seconds == 0)
            {
                this.setState(prevState => ({
                    minutes : prevState.minutes - 1,
                    seconds : 60
                }))
            }

           
            
            this.setState(prevState => ({
                seconds : prevState.seconds - 1,
            }))


           

        }, 1000)
    }

    stopTimer = () =>{
        clearInterval(this.myInterval)
    }

    restartTimer = () => {
        clearInterval(this.myInterval)
        this.setState({
            minutes: 25,
            seconds: 0
        })
    }


    render() {
        return (
            <div>
                <h1 className="heading-style-lg">
                    
                {
                
                this.state.minutes == 0 ? "00" :
                this.state.minutes <10 ? "0"+this.state.minutes :
                this.state.minutes
                
                } : {
                this.state.seconds == 0 ? "00" :
                this.state.seconds < 10 ? "0"+this.state.seconds :
                this.state.seconds
                
                }</h1>

                <div style={{display: "flex", justifyContent: "space-around"}}>

                <button 
                className=" button-style-large"
                onClick={this.startTimer}>Start</button>
                <button 
                className=" button-style-large"
                onClick={this.stopTimer}>Stop</button>
                <button 
                className=" button-style-large"
                onClick={this.restartTimer}>Restart</button>

                </div>
               
            </div>
        )
    }
}
