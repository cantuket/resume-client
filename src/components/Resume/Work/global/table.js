import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import _ from 'lodash'

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
class SkillsTable extends Component {
    
    renderHeader(){
        return _.map(this.props.skills, (col,i) => {
            return (  
                <th style={{textTransform:'uppercase'}} key={i}>
                    { _.keys(col)[0] }
                </th>
            );
        });
    }

    renderSkills(skills){
        let key =  _.keys(skills)[0];
        return _.map(skills[key], (skill,i) => {
                return (
                    <li key={i}>{skill}</li>
                );
            }
        );
    }
    
    renderColumns(){
        return _.map(this.props.skills, (col,i) => {   
            return (
                <td key={i} style={{verticalAlign: 'top'}}>
                    <ul style={{marginTop:'0'}}>
                        {this.renderSkills(col)}
                    </ul>
                </td>
            );
        });
    }
    
    render (){
        return (
            <table>
                <thead>
                <tr>
                    {this.renderHeader()}
                </tr>
                </thead>
                <tbody>
                <tr>
                    {this.renderColumns()}
                </tr>
                </tbody>
            </table>
        );
    }
};

export default SkillsTable;