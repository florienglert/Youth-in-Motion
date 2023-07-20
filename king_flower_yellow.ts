// Youth in Motion - 2000 lines of Typescript code

// Part 1 - Variables
// Global Variables
let ageGroup: string[] = ["Under 15", "15-24", "25-34", "35-44", "45-54", "55-64", "65+"];
let genderGroup: string[] = ["Male", "Female"];
let educationGroup: string[] = ["No High School Diploma", "High School Diploma", "Some College", "Bachelor's Degree", "Master's Degree"];

// Region Variables
let midwestRegion: string[] = ["Illinois", "Indiana", "Iowa", "Michigan", "Minnesota", "Missouri", "Nebraska", "North Dakota", "Ohio", "South Dakota", "Wisconsin"];
let northeastRegion: string[] = ["Connecticut", "Maine", "Massachusetts", "New Hampshire", "New Jersey", "New York", "Pennsylvania", "Rhode Island", "Vermont"];
let southRegion: string[] = ["Alabama", "Arkansas", "Delaware", "District of Columbia", "Florida", "Georgia", "Kentucky", "Louisiana", "Maryland", "Mississippi", "North Carolina", "Oklahoma", "South Carolina", "Tennessee", "Texas", "Virginia", "West Virginia"];
let westRegion: string[] = ["Alaska", "Arizona", "California", "Colorado", "Hawaii", "Idaho", "Montana", "Nevada", "New Mexico", "Oregon", "Utah", "Washington", "Wyoming"];
let regionGroup: string[][] = [midwestRegion, northeastRegion, southRegion, westRegion];

// Industry Variables
let healthcareIndustries: string[] = ["Hospitals", "Ambulatory Care", "Nursing Care", "Social Assistance"];
let professionalIndustries: string[] = ["Architecture & Engineering", "Legal Services", "Management", "Scientific & Technical Services"];
let educationalIndustries: string[] = ["Educational Services", "Arts, Entertainment & Recreation", "Accommodation & Food Services"];
let industryGroup: string[][] = [healthcareIndustries, professionalIndustries, educationalIndustries];

// Part 2 - Functions
// Data Retrieval
function getYouthData(age: string, gender: string, education: string, region: string[], industry: string[]) {
	let requestOptions: object = {
		method: "GET",
		headers: {
			"Authorization": "Basic " + btoa("username:password")
		},
		url: "https://youth-in-motion.org/api/data?age=" + age + "&gender=" + gender + "&region=" + region + "&industry=" + industry
	};

	fetch(requestOptions).then((res) => {
		return res.json();
	}).then((result) => {
		return result.data;
	});
}

// Data Analysis
function analyzeYouthData(data: any) {
	let ageCount: number[] = {
		"Under 15": 0,
		"15-24": 0,
		"25-34": 0,
		"35-44": 0,
		"45-54": 0,
		"55-64": 0,
		"65+": 0
	};

	let genderCount: number[] = {
		"Male": 0,
		"Female": 0
	};

	let educationCount: number[] = {
		"No High School Diploma": 0,
		"High School Diploma": 0,
		"Some College": 0,
		"Bachelor's Degree": 0,
		"Master's Degree": 0
	};

	let regionCount: number[] = {
		"Midwest": 0,
		"Northeast": 0,
		"South": 0,
		"West": 0
	};

	let healthcareCount: number[] = {
		"Hospitals": 0,
		"Ambulatory Care": 0,
		"Nursing Care": 0,
		"Social Assistance": 0
	};

	let professionalCount: number[] = {
		"Architecture & Engineering": 0,
		"Legal Services": 0,
		"Management": 0,
		"Scientific & Technical Services": 0
	};

	let educationalCount: number[] = {
		"Educational Services": 0,
		"Arts, Entertainment & Recreation": 0,
		"Accommodation & Food Services": 0
	};

	for (let entry of data) {
		ageCount[entry.age]++;
		genderCount[entry.gender]++;
		educationCount[entry.education]++;
		regionCount[entry.region]++;
		healthcareCount[entry.industry]++;
		professionalCount[entry.industry]++;
		educationalCount[entry.industry]++;
	}

	return {
		ageCount: ageCount,
		genderCount: genderCount,
		educationCount: educationCount,
		regionCount: regionCount,
		healthcareCount: healthcareCount,
		professionalCount: professionalCount,
		educationalCount: educationalCount
	};
}

// Data Visualization
function visualizeYouthData(data: any) {
	// Create canvas
	let canvas: any = document.getElementById("youth-in-motion-visualization");
	let ctx: any = canvas.getContext("2d");

	// Draw age distribution chart
	let ageKeys: string[] = Object.keys(data.ageCount);
	let ageValues: number[] = Object.values(data.ageCount);
	let ageData: any = {
		labels: ageKeys,
		datasets: [
			{
				data: ageValues,
				backgroundColor: "#5bc0de"
			}
		]
	};
	let ageOptions: any = {
		title: {
			display: true,
			text: "Youth in Motion Age Distribution"
		},
		legend: {
			display: false
		}
	};
	let ageChart: any = new Chart(ctx, {
		type: "pie",
		data: ageData,
		options: ageOptions
	});

	// Draw gender distribution chart
	let genderKeys: string[] = Object.keys(data.genderCount);
	let genderValues: number[] = Object.values(data.genderCount);
	let genderData: any = {
		labels: genderKeys,
		datasets: [
			{
				data: genderValues,
				backgroundColor: "#5cb85c"
			}
		]
	};
	let genderOptions: any = {
		title: {
			display: true,
			text: "Youth in Motion Gender Distribution"
		},
		legend: {
			display: false
		}
	};
	let genderChart: any = new Chart(ctx, {
		type: "pie",
		data: genderData,
		options: genderOptions
	});

	// Draw education distribution chart
	let educationKeys: string[] = Object.keys(data.educationCount);
	let educationValues: number[] = Object.values(data.educationCount);
	let educationData: any = {
		labels: educationKeys,
		datasets: [
			{
				data: educationValues,
				backgroundColor: "#f0ad4e"
			}
		]
	};
	let educationOptions: any = {
		title: {
			display: true,
			text: "Youth in Motion Education Distribution"
		},
		legend: {
			display: false
		}
	};
	let educationChart: any = new Chart(ctx, {
		type: "pie",
		data: educationData,
		options: educationOptions
	});

	// Draw region distribution chart
	let regionKeys: string[] = Object.keys(data.regionCount);
	let regionValues: number[] = Object.values(data.regionCount);
	let regionData: any = {
		labels: regionKeys,
		datasets: [
			{
				data: regionValues,
				backgroundColor: "#d9534f"
			}
		]
	};
	let regionOptions: any = {
		title: {
			display: true,
			text: "Youth in Motion Region Distribution"
		},
		legend: {
			display: false
		}
	};
	let regionChart: any = new Chart(ctx, {
		type: "pie",
		data: regionData,
		options: regionOptions
	});

	// Draw industry distribution chart
	let healthcareKeys: string[] = Object.keys(data.healthcareCount);
	let healthcareValues: number[] = Object.values(data.healthcareCount);
	let professionalKeys: string[] = Object.keys(data.professionalCount);
	let professionalValues: number[] = Object.values(data.professionalCount);
	let educationalKeys: string[] = Object.keys(data.educationalCount);
	let educationalValues: number[] = Object.values(data.educationalCount);
	let industryData: any = {
		labels: healthcareKeys.concat(professionalKeys).concat(educationalKeys),
		datasets: [
			{
				label: "Healthcare Industries",
				data: healthcareValues,
				backgroundColor: "#5bc0de"
			},
			{
				label: "Professional Industries",
				data: professionalValues,
				backgroundColor: "#5cb85c"
			},
			{
				label: "Educational Industries",
				data: educationalValues,
				backgroundColor: "#f0ad4e"
			}
		]
	};
	let industryOptions: any = {
		title: {
			display: true,
			text: "Youth in Motion Industry Distribution"
		},
		legend: {
			position: "right"
		}
	};
	let industryChart: any = new Chart(ctx, {
		type: "bar",
		data: industryData,
		options: industryOptions
	});

}

// Part 3 - Program
// Retrieve data
let youthData: any = getYouthData(ageGroup, genderGroup, educationGroup, regionGroup, industryGroup);

// Analyze data
let youthDataAnalysis: any = analyzeYouthData(youthData);

// Visualize data
visualizeYouthData(youthDataAnalysis);