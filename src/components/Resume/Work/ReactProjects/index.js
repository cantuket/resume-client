import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import { Link } from 'react-router-dom'

const styles = {
  root: {
    display: 'inline-block',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: 'auto',
    overflowY: 'auto',
  },
};

const tilesData = [
    {
        img: '/images/projects/p2p/listing-item.gif',
        title: 'Peer-to-peer Marketplace',
        url:'p2p.endbehavior.com',
        slug: 'p2p-app',
    },
];

const tilesData2 = [
  {
    img: '/images/projects/resume/booking.gif',
    title: 'Resume App',
    slug:'resume-app',
    url: 'resume.endbehavior.com',
  },

];


const GridListExampleSimple = () => (
  <div style={styles.root} className="row">
     <div className="row"> 
      <div className="col m8 offset-m2">
        <h2 className="center-align">React Projects</h2>
        <h6 className="center-align">Since all of my projects have been websites, and therefore any 'write' capabilities are private, I though it would be helpful to highlight notable technical components of each project and provide an overview of my infrastructure.</h6>
      </div>
    </div>
    <div className="row">
        
      <div className="col m4 offset-m1">
        <Link to="/work/react-projects/p2p-app">
          <h5  className="black-text center-align">Peer-to-Peer Marketplace</h5>
        </Link>
        <GridList
          cellHeight={200}
          style={styles.gridList}
          cols={1}
        >
          {tilesData.map((tile, i) => (
            <Link key={i} to={`/work/react-projects/${tile.slug}`}>
            <GridTile
              key={tile.img}
              className="z-depth-3"
            >
              <img src={tile.img} alt="" />
            </GridTile>
            </Link>
          ))}
        </GridList>
      </div>
      <div className="col m4 offset-m2">
        <Link to="/work/react-projects/resume-app">
          <h5  className="black-text center-align">Resume App</h5>
        </Link>
        <GridList
          cellHeight={200}
          style={styles.gridList}
          cols={1}
        >
          {tilesData2.map((tile, i) => (
            <Link key={i} to={`/work/react-projects/${tile.slug}`}>
            <GridTile
              key={tile.img}
              className="z-depth-3"
            >
              <img src={tile.img} alt="" />
            </GridTile>
            </Link>
          ))}
        </GridList>

      </div>
    </div>

  </div>
);

export default GridListExampleSimple;