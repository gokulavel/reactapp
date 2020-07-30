import React from 'react';


export default class CustomInput extends React.Component {
    render(){
        return (
            <input 
                type = {this.props.type} 
                placeholder={this.props.placeholder}
                value = {this.props.value}
                onChange = {
                    (event) => {
                        this.props.onChange(event.target.value);
                    }
                }
            />
        )
    }
}