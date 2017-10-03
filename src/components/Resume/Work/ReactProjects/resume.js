import React, {Component}  from 'react';

import Features from './features'

const data = {
    content: {
        project: 'React Resume App'
    },
    features:[
        {
            title:'Scheduling Tool',
            gitHub:'https://github.com/cantuket/resume-client/blob/master/src/components/Resume/Contact.js',
            demo:'http://resume.endbehavior.com/contact',
            attributes:[
                {'current':[
                    'Event scheduling',
                    'Google Location Autocomplete'
                    ]
                },
                {'Future':[
                    'Scheduling validation',
                    'Click-drag time selection',
                    'Visibility and formatting by user',
                    'Google calendar invite creation',
                    'Create admin capabilities',
                    ]
                },
                {'Learnings/Questions':[
                    'Achieving consistency of data format (JS Date object) with mongo storage and retrieval',
                    ]
                }
            ],
            image:'/images/projects/resume/booking.gif'
        },
        {
            title:'Portfolio Overview',
            gitHub:'https://github.com/cantuket/resume-client/blob/master/src/components/Resume/Work/Portfolio/Project/index.js',
            demo:'http://resume.endbehavior.com/work/portfolio/goldstein-mcclintock',
            attributes:[
                {'Current':[
                        'Compostable components for all ‘overview sections’ (project root)'
                    ]
                },
                {'Future':[
                        'Compostable components dynamically by route parameters for all sections',
                        'Fix Gallery image sizing execution order',
                        'Create admin capabilities '
                    ]
                },
                {'Learnings/Questions':[
                        'Segmenting components by routes?',
                        'Where and when is most efficient place in DOM tree to retrieve data?',
                
                    ]
                }
            ],
            image:'/images/projects/resume/portfolio-overview.png'
        },
        {
            title:'Breadcrubs',
            gitHub:'https://github.com/cantuket/resume-client/blob/master/src/components/Resume/Work/global/breadcrumbs.js',
            demo:'http://resume.endbehavior.com/work/portfolio/goldstein-mcclintock/routes',
            attributes:[
                {'Current':[
                        'Breadcrumbs for all ‘Work Sections’',
                        'Generated from parse react-router location properties'
                    ]
                },
                {'Future':[
                        'Add site-wide',
                        'Optimization an configuability'
                    ]
                }
            ],
            image:'/images/projects/resume/breadcrumbs.gif'
        },
        {
            title:'Signin URLs',
            gitHub:'https://github.com/cantuket/resume-client/blob/master/src/components/Resume/UrlSignin.js',
            demo:'',
            attributes:[
                {'Current':[
                
                        'Admin area to generate users and signin URLs',
                        'Customize ‘Welcome Page’ content'
                    ]
                },
                {'Future':[
                        'Separate from Signin Form controllers and API (hacked together right now)',
                        'Add tokenized and encrypted option URL options',
                        'Add URL expiration options'
                    ]
                }
            ],
            image:'/images/projects/resume/url-signin.gif'
        },
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