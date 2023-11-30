import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	reactjs,
	redux,
	nodejs,
	mongodb,
	git,
	altice,
	infosys,
	piramal,
	pyspark,
	cryptrade,
	gcp,
	power_bi,
	python,
	sql,
	ml,
	dl,
	pytorch,
	databricks,
	airflow,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Data Engineer',
		icon: web,
	},
	{
		title: 'Data Scientist',
		icon: mobile,
	},
	{
		title: 'Data Analyst',
		icon: backend,
	},
	{
		title: 'ML Engineer',
		icon: creator,
	},
];

const technologies = [
	{
		name: 'Python',
		icon: python,
	},
	{
		name: 'SQL',
		icon: sql,
	},
	{
		name: 'GCP',
		icon: gcp,
	},
	{
		name: 'Power BI',
		icon: power_bi,
	},
	{
		name: 'Pytorch',
		icon: pytorch,
	},
	{
		name: 'Data Bricks',
		icon: databricks,
	},
	{
		name: 'Airflow',
		icon: airflow,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'git',
		icon: git,
	},
];

const experiences = [
	{
		title: 'Data Engineering',
		company_name: 'Altice',
		icon: altice,
		iconBg: '#383E56',
		date: 'Jun 2023 - Dec 2023',
		points: [
			`Automated Multi-Cloud Metrics Analysis: Created an automated system for daily unit testing on production data, leading to rapid bug detection. Detected discrepancies exceeding 20 million data points (8% of Total)`,
			'Real-time Impression Tracking: Designed a real-time dashboard to monitor impression trends, facilitating data-driven insights through segmentation for over 2 billion impressions.',
		],
	},
	{
		title: 'Specialist Programmer',
		company_name: 'Infosys',
		icon: infosys,
		iconBg: '#E6DEDD',
		date: 'Jul 2021 - Jul 2022',
		points: [
			'ETL Architect: Architected scalable Big-data ETL pipelines that processed and fed 1 Petabytes of organization-wide data daily into Google Cloud Platform, utilizing Google Composer and Apache Airflow.',
			'Data Modelling: Established low-latency, strongly consistent pipelines for replicating data from the data warehouse todata marts at a high hourly rate, crucial for reporting and MIS generation activities.',
		],
	},
	{
		title: 'Data Scientist',
		company_name: 'Piramal Finance',
		icon: piramal,
		iconBg: '#383E56',
		date: 'Jan 2019 - Jul 2021',
		points: [
			'Risk Modelling: Created an Credit Analytics Rule Engine, using customer’s Cibil bureau data, to identify customer credit risk and saved USD 7.5 M in default risk at a pre-sanction stage',
			'Business Intelligence: Led a team of 3 for creation and automation of various KPIs and MISs across various business departments (Operations, Sales, Marketing) thus saving 400+ hours/year',
		],
	},
];

const testimonials = [];

const projects = [
	{
		name: 'Model Scalability across Distributed Nodes',
		description: `Conducted ML performance analysis using multiple ML models, evaluating time and accuracy across varying data sizes and node configurations.`,
		tags: [
			{
				name: 'PySpark',
				color: 'blue-text-gradient',
			},
			{
				name: 'DataProc',
				color: 'green-text-gradient',
			},
			{
				name: 'Databricks',
				color: 'pink-text-gradient',
			},
		],
		image: pyspark,
		source_code_link:
			'https://docs.google.com/presentation/d/1GHlSwBnMAWNqlyTCMx7i77YIZF_mkcQf/edit?usp=sharing&ouid=112492963422032957289&rtpof=true&sd=true',
	},
	{
		name: 'Crypto Currency Trading Platform',
		description:
			'Facilitated virtual currency trading between users and exchanges, offering automated time-delayed, stop loss, and limit orders for increased trading efficiency.',
		tags: [
			{
				name: 'React',
				color: 'blue-text-gradient',
			},
			{
				name: 'EC2',
				color: 'green-text-gradient',
			},
			{
				name: 'MongoDB',
				color: 'pink-text-gradient',
			},
			{
				name: 'RDS',
				color: 'green-text-gradient',
			},
		],
		image: cryptrade,
		source_code_link: 'https://github.com/beingstoic/cryptrade',
	},
];

export { services, technologies, experiences, testimonials, projects };
