import React, {Component} from 'react';
import {connect} from 'react-redux';
import {itemSelector} from '../selector';

class InfoSide extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {personalData}=this.props;

        if(!personalData){
            return <div className=" side infoSide"></div>
        } else{
            return(
                <div className="side infoSide">
                    <div className="infoItem">
                        <img src={personalData.general.avatar} />
                        <div>
                            <h1>{personalData.general.firstName} {personalData.general.lastName}</h1>
                            <h3>{personalData.job.title} - {personalData.job.company}</h3>
                        </div>
                        <div>
                            <h5>Address is: {personalData.address.zipCode}, {personalData.address.street}, {personalData.address.city}, {personalData.address.country}</h5>
                            <h5>email: {personalData.contact.email}</h5>
                            <h5>phone: {personalData.contact.phone}</h5>
                        </div>
                    </div>
                </div>
            )
        }
    }
};

const mapStateToProps=(state)=>{
    return {personalData: itemSelector(state)}
};

export default connect(mapStateToProps)(InfoSide)