import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getData, getPersonalData} from '../AC';

class ListSide extends Component{
    constructor(props){
        super(props);
        this.state={
            search:''
        }
    }

    componentDidMount(){
        this.props.getData();
    }

    getPersonInformation=(item)=>{
        this.props.getPersonalData(item)
    }

    handleSearch=(ev)=>{
        this.setState({search: ev.target.value})
    }

    render(){
        const {data, loaded, loading}=this.props;
        if(loading) return;

        const filtered=(data,search)=>{
            if(!search) return
            let res=[];
            data.forEach(item=>{
                Object.keys(item).forEach(key=>{
                    Object.keys(item[key]).forEach(elem=>{
                        if(item[key][elem].toLowerCase().indexOf(search.toLowerCase())!==-1){
                            if(res.indexOf(item)==-1)
                                res.push(item)
                        }
                    })
                })
            })
            return res
        }
        const filteredData= filtered(data, this.state.search) || data;

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
                <ul>{createDataList}</ul>
            </div>
        )
    }
};

const mapStateToProps=(state)=>{
    return {
        data: state.getData.data,
        loaded: state.getData.loaded,
        loading: state.getData.data.loading
    }
};

export default connect(mapStateToProps, {getData, getPersonalData})(ListSide)