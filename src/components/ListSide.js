import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getData, getPersonalData, filtrationSearch, searchData} from '../AC';
import FormSelect from './FormSelect';
import {filtratePersonalData} from '../selector';

class ListSide extends Component{
    constructor(props){
        super(props);
        this.state={
            search:'',
            select: 'all'
        }
    }

    componentDidMount(){
        this.props.getData();
    }

    getPersonInformation=(item)=>{
        this.props.getPersonalData(item)
    }

    handleSearch=(ev)=>{
        this.setState({search: ev.target.value});
        this.props.searchData(ev.target.value)
    }

    handleChangeSelect=(value)=>{
        const {filtrationSearch}=this.props;
        this.setState({select: value});
        filtrationSearch(value)
    }

    render(){
        const {data, loaded, loading, filter}=this.props;
        const {select}=this.state;
        if(loading) return <div>Loading...</div>;

        const filteredData= data;
        const createDataList=filteredData.map((item, i)=>
            <li key={i} className="listItem" onClick={this.getPersonInformation.bind(this, item)}>
                <img src={item.general.avatar} className="itemElement"/>
                <div className="itemElement">
                    <h5>{item.general.firstName}</h5>
                    <h6>{item.job.title}</h6>
                </div>
            </li>
        );

        return(
            <div className="side listSide">
                <input type="text" placeholder="Search..." value={this.state.search} onChange={this.handleSearch} />
                <FormSelect selected={select} onChangeSelect={this.handleChangeSelect} />
                <ul>{createDataList}</ul>
            </div>
        )
    }
};

const mapStateToProps=(state)=>{
    return {
        data: filtratePersonalData(state),
        loaded: state.getData.loaded,
        loading: state.getData.loading,
        filter: state.filter.selected
    }
};

export default connect(mapStateToProps, {getData, getPersonalData, filtrationSearch, searchData})(ListSide)

