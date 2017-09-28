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
    img: '/images/work/screen-shots/gm-screen-shot.png',
    title: 'Goldstein & McClintock',
    url:'goldmclaw.com',
    slug: 'goldstein-mcclintock',
  },
  {
    img: '/images/work/screen-shots/townhouse.png',
    title: 'Townhouse Wine Bar',
    slug:'townhouse',
    url: 'townhousewinebar.com',
  },
  {
    img: '/images/work/screen-shots/erin-auctions.png',
    title: 'Erin Auctions',
    url: 'erinauctions.com',
    slug:'erin-auctions',
  },
  {
    img: '/images/work/screen-shots/tbg-screen-shot.png',
    title: 'The Bartend Group',
    slug:'the-bartend-group',
    url: 'thebartendgroup.efficacy.io',
  },
];


const GridListExampleSimple = () => (
  <div style={styles.root} className="row">
     <div className="row"> 
      <div className="col m8 offset-m2">
        <h2 className="center-align">My Work</h2>
        <h6 className="center-align">Since all of my projects have been websites, and therefore any 'write' capabilities are private, I though it would be helpful to highlight notable technical components of each project and provide an overview of my infrastructure.</h6>
      </div>
    </div>
    <div className="row">
        
      <div className="col m4 offset-m1">
        <Link to="/work/portfolio">
          <h4  className="black-text center-align">Portfolio</h4>
        </Link>
        <GridList
          cellHeight={100}
          style={styles.gridList}
        >
          {tilesData.map((tile, i) => (
            <Link key={i} to={`/work/portfolio/${tile.slug}`}>
            <GridTile
              key={tile.img}
             // title={tile.title}
              //subtitle={<span><b>{tile.url}</b></span>}
              //actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            >
              <img src={tile.img} alt="" />
            </GridTile>
            </Link>
          ))}
        </GridList>
      </div>
      <div className="col m4 offset-m2">
        <Link to="/work/infrastructure">
          <h4  className="black-text center-align">Infrastructure</h4 >
        </Link>
        <img src="/images/work/diagrams/eio-infrastructure.png" width="100%" alt="" />
      </div>
    </div>

  </div>
);

export default GridListExampleSimple;