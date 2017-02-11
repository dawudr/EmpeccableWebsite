$(function(){
$("#elastic_grid_demo").elastic_grid({	
	'hoverDirection': true,
	'hoverDelay': 0,
	'hoverInverse': false,
	'expandingSpeed': 500,
	'expandingHeight': 500,
	'filterEffect': 'popup',
	'items' :
		[
			{
			'title' : 'O2 Shop',
			'description'   : 'O2 wanted a portal to give customers the same information we give our customer services team about it\'s phones and give them the chance to review those phones as well.' +
			'We worked closely with O2\'s internal business and technical teams to understand exactly what they wanted from the first mobile phone review site to be launched by an operator.' +
			'Once the idea was fully developed we got on and built it. Built on time, on budget and on brief. ' +
			'The result is the UKs most successful site about mobile devices and what customers think about them, receiving in excess of 15 million PIs a month.',
			'thumbnail' : ['img/portfolio/small/O2-Telefonica.png'],
			'large' : ['img/portfolio/large/O2 Shop 500x500.jpg'],
			'button_list'   :
			[
			//{ 'title':'Demo', 'url' : 'http://#' },
			//{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['Development', 'Design', 'Media']
			},

			{
			'title' : 'BSkyB Sky Plus',
			'description'   : 'BSkyb wanted Programme planner interface and Set top box application for finding and recording shows using any word, like the name of an actor, director, title or sports team. ' +
			'They wanted an intelligent suggestions app for recommending series and movies to record remotely. ' +
			'Our team assisted in the phase 2 feature enhancement of company\'s £1.2million investment into the set-top box app development and electronic program guides forweb and mobile devices.',
			'thumbnail' : ['img/portfolio/small/Sky_logo.png'],
			'large' : ['img/portfolio/large/BSkyB Homepage 500x500.jpg'],
			'button_list'   :
			[
			//{ 'title':'Demo', 'url' : 'http://#' },
			//{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['Development', 'Media']
			},

			{
			'title' : 'Virgin Media Customer Self Care',
			'description'   : 'Customer Self Care apps and Billing and Payments portal allowing subscribers would be able to access information such as account and billing data via phone calls, ' +
			'the Web or interactive TV services.',
			'thumbnail' : ['img/portfolio/small/Virginmedia_logo.png'],
			'large' : ['img/portfolio/large/Virgin Media Home Page 500x500.jpg'],
			'button_list'   :
			[
			//{ 'title':'Demo', 'url' : 'http://#' },
			//{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['Development', 'Design', 'Media', 'Analysis']
			},

			{
			'title' : 'Research, Analysis & Insight Dashboard',
			'description'   : 'A platform to enabling fund managers to build upon BCA�s deep expertise and experience in data analysis and modelling to quickly identify and support investment ideas. With BCA Analytics users were able to quickly find, build upon and use charts in presentations, rapidly lowering the time this activity used to take.',
			'thumbnail' : ['img/portfolio/small/euromoney-logo.png'],
			'large' : ['img/portfolio/large/BCA Homepage 500x500.jpg'],
			'button_list'   :
			[
			//{ 'title':'Demo', 'url' : 'http://#' },
			//{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['Analytics', 'Development', 'Finance']
			},

			{
			'title' : 'Capacity Intelligence Dashboard',
			'description'   : 'A subscription based platform providing industry executives with the ability to identify new customers, follow partnership announcements and track M&A deal activity.',
			'thumbnail' : ['img/portfolio/small/Capacityintelligence.jpg'],
			'large' : ['img/portfolio/large/CapacityIntelligenceHomePage 500x500.jpg'],
			'button_list'   :
			[
			//{ 'title':'Demo', 'url' : 'http://#' },
			//{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['Development', 'Analytics', 'Finance']
			},

			{
			'title' : 'Pearson Content Authoring Portal',
			'description'   : 'Publishers are transitioning to creating content in digital formats first rather than in print. ' +
			'No more shipping CDS, no ink and paper, they don’t start in InDesign, you start with Pearson Content Authoring Portal —you can also output to print—the value chain is changing. ' +
			'They needed a multimedia authoring tool that allows the creation of media-enriched content distributable through a variety of online channels, ' +
			'as their primary platform for creating digital-first educational content. ' +
			'They wanted to create \"next-gen digital products\", not simply converting print texts into a new digital format. ' +
			'When creating digital-first multimedia-enabled educational content, the platform applies structure to multimedia content so that it shows up in Google searches, ' +
			'allowing consumers to click through on those links directly into the desired online content and purchase it directly in whole or in chapters or even smaller \"chunks\" ' +
			'—and all the content’s multimedia features—video, sound, animation and interactivity—work in the online version. ',
			'thumbnail' : ['img/portfolio/small/pearson_education.png'],
			'large' : ['img/portfolio/large/Pearson Habitat 500x500.jpg'],
			'button_list'   :
			[
			//{ 'title':'Demo', 'url' : 'http://#' },
			],
			'tags'  : ['Media', 'Development', 'Analysis']
			},
			{
			'title' : 'Amnesty International Portal',
			'description'   : 'Amnesty International campaigns to prevent and end grave abuses of human rights across the globe. ' +
			'The organisation did not have an efficient way to collaborate and manage projects with partners or other Amnesty Sections globally. ' +
			//'As a result, members sent documents via e-mail to outside collaborations, resulting in bloated email accounts and lack of version control.#' +
			'They needed a secure document management system that they could host in the cloud and ensure that documents would be available to users anytime, anywhere. ' +
			//'The system needed to provide a secure and easy way for users to collaborate with partners, non-governmental organizations (NGOs) or private organizations.' +
			//'With the initial on-premise implementation, they integrated Alfresco with their existing Active Directory to support single sign-on and to synchronize with its Windows network credentials. ' +
			//'This ensures that users can securely access the repository. whether by folder, individual files, or in the cloud, by network.' +
			'With Alfresco in the cloud, Amnesty International has improved remote access and mobility. ' +
			//'Storing content in the cloud allows users to access documents whenever and wherever they are. ' +
			//'Users can now access content on mobile devices such as the iPhone or iPad using their favorite content apps in an organisation-approved way. ' +
			'Given that a majority of the organisation\'s work is focused on operational projects in specific locations, the ability for field workers to access, ' +
			'create and edit documents on mobile devices is essential in the investigation on human rights abuses. It allows them to submit findings in a fast, flexible and reliable way. ' +
			//'Alfresco in the cloud now serves as a secure central document system for Amnesty\'s policy and project documents. ' +
			'Users can collaborate with outside parties and Amnesty staff working in different locations. ',
			//'Users can created, edit and view documents on any device — laptop, mobile device or desktop. Users have the advanced version control features to help manage changes in project plans, reports and general policy documents. The organization also integrated Alfresco in the cloud with Confluence, an intranet-style wiki. ' +
			//'Users can access documents stored in Alfresco through Confluence in order to share information.',
			'thumbnail' : ['img/portfolio/small/amnestyinternational.png'],
			'large' : ['img/portfolio/large/Amnesty Home Page Screen 500x500.jpg'],
			'button_list'   :
					[
						//{ 'title':'Website', 'url' : 'http://www.amnesty.org' }
					],
			'tags'  : ['Media', 'Development']
			},
			{
				'title' : 'Qatar Ministory of Interior Residency Permit Portal',
				'description'   : 'The General Directorate of Nationality, Borders and Expatriate Affairs at the Ministry ' +
				'of Interior started issuing new Residence Cards instead of Residence Permit Stickers in the passports of residents in June 2015. ' +
				'For this an electronic system was developed, expats applying for a Residency Permit (RPs) can submit an ' +
				'application and choose the delivery service through the post-office.' +
				'They are issued with a new Residence card holds several security features to prevent being tampered ' +
				'with and cannot be faked as well as it carries data of the card holder.',
				'thumbnail' : ['img/portfolio/small/qatar-moi-logo.png'],
				'large' : ['img/portfolio/large/Qatarmoi-rps1.jpg'],
				'button_list'   :
						[],
				'tags'  : ['Government', 'Development']
			},
	 
		]
	});
});