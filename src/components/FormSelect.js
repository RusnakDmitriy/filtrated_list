import React, {Component} from 'react';

export default class FormSelect extends Component{
    constructor(props){
        super(props);
    }

    handleChange=(ev)=>{
        this.props.onChangeSelect(ev.target.value)
    }

    render() {
        const {selected}=this.props;

        return (
            <form name="selectionFilter">
                <span>I want to filtrate  </span>
                <select name="filter" value={selected} onChange={this.handleChange}>
                    <option value='all'>by all</option>
                    <option value='firstName'>by firstName</option>
                    <option value='lastName'>by lastName</option>
                    <option value='company'>by company</option>
                    <option value='email'>by email</option>
                </select>
            </form>
        )
    }
}
