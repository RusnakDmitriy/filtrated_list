import React, {Component} from 'react';

export default class FormSelect extends Component{
    constructor(props){
        super(props);
        /*this.state={
            select:'all'
        }*/
    }

    onChangeSelect=(ev)=>{
        this.props.select=ev.target.value
    }

    render() {
        const {select}=this.props;

        return (
            <form name="selectionFilter">
                <select name="filter" value={select} onChange={this.props.onChangeSelect}>
                    <option value='all'>by all</option>
                    <option value='name'>by name</option>
                    <option value='company'>by company</option>
                    <option value='email'>by email</option>
                </select>
            </form>
        )
    }
}
