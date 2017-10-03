import React, {Component}  from 'react';

import Features from './features'

const data = {
    content: {
        project: 'Peer-to-peer Marketplace'
    },
    features:[
        {
            title:'Image Upload Field',
            gitHub:'https://github.com/cantuket/p2p-client/blob/master/src/components/listings/items/ItemInfo.js',
            demo:'http://p2p.endbehavior.com/listing/59b60e0be8e1e33017a2cbd2',
            attributes:[
                {'Current':[
                    'Upload preview',
                    'Drag-and-drop files',
                    'Convert file to binary for API POST (avoid conflict with body parse for multi form data)',
                    'Convert to blob on server for S3 storage',
                    'Delete image on replace',
                    ]
                },
                {'To Do':[
                    'Add formatting options',
                    'Add multiple image upload',
                    'Delete image option',
                    'Delete image on Item delete',
                    'Delete image on parent Listing delete'
                    ]
                }
            ],
            image:'/images/projects/p2p/image-upload.gif'
        },
        {
            title:'Sub-collections and Controlled Forms',
            gitHub:'https://github.com/cantuket/p2p-client/blob/master/src/components/listings/EditListing.js',
            demo:'http://p2p.endbehavior.com/listing/59b60e0be8e1e33017a2cbd2',
            attributes:[
                {'Current':[
                    'Create Listing',
                    'Add items to listing',
                    'Initialize redux form values for nested components and dynamically generated form components.',
                    'Convert to blob on server for S3 storage',
                    'Flexible/Extensible data model on front and back end'
                    ]
                },
                {'To Do':[
                    'Field validation',
                    'Field ordering/sorting positions',
                    'Add image option when adding item and adding listing',
                    'Add Item and Listing ‘name’ fields',
                    'Formatting'
                    ]
                }
            ],
            image:'/images/projects/p2p/listing-item.gif'
        }
    ]
}

class Feature extends  Component {
    
    render() {
		return (
            <Features data={data} />
		);
	}
}

export default (Feature)