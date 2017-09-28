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
      <Card style={{width: this.props.width, float:'left', paddingLeft:'20px',backgroundColor:'transparent', boxShadow:'none'}} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title={this.props.content.title +', '+this.props.content.company} 
          subtitle={this.props.content.date} 
          // avatar={this.props.content.icon} 
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText style={{paddingTop:'0'}}>
          {this.props.content.intro} 
        </CardText>
        {/*<CardMedia
          expandable={true}
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <img src="images/nature-600-337.jpg" alt="" />
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />*/}
        <CardText dangerouslySetInnerHTML={{__html: this.props.content.body}} expandable={true}>
        
        </CardText>
      </Card>
    );
  }
}