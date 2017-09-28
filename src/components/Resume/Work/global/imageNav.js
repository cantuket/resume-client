import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import _ from 'lodash'

const styles = {
    link: {border:'2px solid #000', borderLeft:'none', height:'200px',overflow:'hidden'},
    linkFirst: {border:'2px solid #000', height:'200px',overflow:'hidden'}
}
class ImageNav extends Component {

    renderLinks () {
        return _.map(this.props.links, (link,i) => {
            return (
                <Link key={i} style={ i < 1 ? styles.linkFirst : styles.link} className="col m4" to={link.path}>
                    <div className="row">
                        <div className="col m12" style={{marginBottom:'20px'}}>
                            <h5 className="black-text center-align">{link.title}</h5>
                        </div>
                        <div className="col m12">
                            <img src={link.image} width="100%" alt="" />
                        </div>
                    </div>
                </Link>
            );
        });
    }

    render() {
        return (
            <div className="row">
                {this.renderLinks()}
            </div>
        );
    }
}

export default ImageNav