import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

export default class CardExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  // handleToggle = (event, toggle) => {
  //   this.setState({expanded: toggle});
  // };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };
  unescapeHTML(html) {
      var escapeEl = document.createElement('textarea');
      escapeEl.innerHTML = html;
      return escapeEl.textContent;
  }


  render() {
    return (
      <Card style={{width: '50%', float:'left', paddingLeft:'20px',backgroundColor:'transparent', boxShadow:'none'}} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title={this.props.content.company} 
          subtitle={this.props.content.title +' | '+ this.props.content.date} 
          // avatar={this.props.content.icon} 
          actAsExpander={true}
          showExpandableButton={true}
          titleStyle={{fontSize:'1.3rem'}}
        />
        <CardText style={{fontWeight:'500',fontStyle:'italic',paddingTop:'0', paddingBottom:'0'}}>
          {this.props.content.intro} 
        </CardText>
        <CardText style={{fontSize:'.9rem',paddingTop:'0'}} className="card-text" dangerouslySetInnerHTML={{__html: this.props.content.body}} expandable={true}>
        
        </CardText>
      </Card>
    );
  }
}