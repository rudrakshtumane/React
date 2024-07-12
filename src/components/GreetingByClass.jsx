import React from 'react'

class GreetingByClass  extends React.Component{
    render(){
        console.log(this.props)

        return(
            <>
            <h1 className="text-center p-10 ">Hello, {this.props.name}</h1>
            </>
        )
    }
}



export default GreetingByClass

