import React, {Component}  from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../actions'
import { Link } from 'react-router-dom'


class Project extends  Component {
	render() {
		return (
			<div>
			<h1>Erin Auctions</h1>
			<pre>
				{`
					Auction.add({
						name: { type: String},
						auctionDate: { type: Types.Date, initial: true, required:true},
						status: {type: Types.Select, options: 'upcoming,past,draft'},
						deleteProducts: {type: Types.Boolean, default: true, label: 'Delete Associated Products?', note:'If this box is checked all Products associated w/ this Auction will be deleted.'},
						description: { type: Types.Html, wysiwyg: true, height: 150},
						hbidLink: {type: String},
						auctionPreview: { type: String, default:'5:00 pm'},
						auctionStart: { type: String, default:'6:00 pm'},
						auctioneer: { type: String, default:'Steven Parr'},
						mainImage: { type: Types.CloudinaryImage },
						publishedDate: { type: Types.Datetime, default: Date.now }
					});
					Product.add({
						name: { type: String, initial:true},
						auction: { type: Types.Relationship, ref: 'Auction', many: false, initial:true, required:true,label:'Auctions'},
						image:{
							type: Types.LocalFile,
							dest:  thisRoot+'/public/local-images/full',
							filename: function(item, file){
								var newName = file.originalname.replace(/\s+/g, '-').toLowerCase();
								return moment().format('YYYY-MM-DD[@]h:mm:ss:a') + '-' + newName
							},
							format: function(item, file){
								return '<img src="/local-images/full/'+file.filename+'" style="max-width: 300px">'
							}
						},
						width: { type: String,noedit:true,hidden:true},
						height: { type: String,noedit:true,hidden:true},
						flipImage: { type: Boolean, default: false, label: 'Flip Image 90deg (save and repeate until correct position is achieved)'},
						featuredProduct: { type: Boolean, default: false },
						key: { type: String},
						publishedDate: { type: Date, default: Date.now }
					});
				`}
			</pre>
			- Overview
			- Components
				- Auctions
					- Data structure
					- Features
						add and rotate images
						saves thumbnails and large versions
						creat auctions in draft mode
						share products with diffrent auctions

				- Classifieds  
					- Data structure
					- Features
			- Technologies
				- Keystone.js (Express.js CMS)
				- Mongo
				- Jade/Pug	 (node templating)
			- Infrastructure
			 	- Managed Mongo replica set (Atlas)
				- 2 failover VPS Express Apps
				- 2 Nginx Web Servers
				- 1 Goolge LB
				- Cloudinary
				- Mandrill
			- design

			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    message: state.auth.message
  }
}

export default connect(mapStateToProps, actions)(Project)