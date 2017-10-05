import React, {Component}  from 'react';
import _ from 'lodash'
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import FeatureTable from '../global/table'

import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};


class Feature extends  Component {
    // renderAttributes(attributes){
    //     return _.map(attributes, (attribute,i) => {
    //         let width = 100/attributes.length;
    //         return (
    //             <div key={i} className="col" style={{width:width+'%'}}>
    //               <h6>{Object.keys(attribute)[0]}</h6>
    //               <ul>
    //                   { _.map(attribute[Object.keys(attribute)[0]], (bullet,i)=>{
    //                      return( 
    //                          <p style={{fontSize:'.9rem'}}>{bullet}</p>
    //                     );
    //                   })}
    //               </ul>
    //             </div>
    //         );
    //     });
    // }

    renderFeatures (){
       return _.map(this.props.data.features, (feature, i) => {
            return (
                <Tab key={i} label={feature.title}>
                    <div key={i}  style={{marginTop:'40px'}} className="row">
                        <div className="col m6 z-depth-3 no-padding">
                            <img src={feature.image} alt="" width="100%" />
                        </div>
                        <div className="col m6">
                            <FeatureTable data={feature.attributes} />                    
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m4 offset-m1">
                            <a href={feature.demo} target="_blank">
                                <RaisedButton 
                                primary={true} 
                                fullWidth={true} 
                                label="Vew Feature"
                                icon={<FontIcon className="fa fa-hand-pointer-o" />}
                                />
                            </a>
                        </div>
                        <div className="col m4 offset-m2">
                            <a href={feature.gitHub} target="_blank">
                                <RaisedButton 
                                primary={true} 
                                fullWidth={true} 
                                label="Vew Code"
                                icon={<FontIcon className="fa fa-github" />}
                                />
                            </a>
                        </div>
                    </div>
                </Tab>
            );
        })
    }
    
    render() {
		return (
            <div className="row">
                <h4 style={{display:'inline',float:'left',marginBottom:'0px'}}>
                    Features
                    <span style={{display:'inline-block'}}>
                        <h6 style={{marginLeft:'20px',marginBottom:'0px'}}>{this.props.data.content.project}</h6>
                    </span>
                </h4>
                <Tabs>
                    {this.renderFeatures()}
                </Tabs>
            </div>
		);
	}
}

export default (Feature)