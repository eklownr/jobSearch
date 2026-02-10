// Se§
const backend =
	"https://jobsearch.api.jobtechdev.se/search?q=backend&offset=0&limit=4";

const habo =
	"https://jobsearch.api.jobtechdev.se/search?q=håbo&offset=0&limit=23";

const searchJobs = async (path: string, patten: string = "IT") => {
	try {
		const response = await fetch(path);
		const data = await response.json();

		// Check if location exists, or if not, set it to Sweden
		let location: string | undefined = data.freetext_concepts.location[0];
		if (!location) {
			location = "Sweden";
		}

		// Print out total amount of jobs and location
		console.log(
			`Totalt: ${data.total.value} jobs in ${location} \n************************\n`,
		);

		// Find IT-jobs in Bålsta/Håbo
		for (const element of data.hits) {
			if (element.headline.includes(patten)) {
				console.log(`\x1b[33m ${element.headline} \x1b[0m`); // Yellow text if IT
			}

			// Foreach hits print headline, date and webpage
			console.log(element.headline);
			console.log("Last date: ", element.last_publication_date);
			console.log(
				element.webpage_url,
				"\n**************************************\n",
			);
		}
	} catch (error) {
		console.log(error);
	}
};

// The result get blended up
// searchJobs(habo);
// searchJobs(backend);

// Run one job at a time
const jobs = async () => {
	await searchJobs(habo);
	await searchJobs(backend, "Developer"); // Color Developer in yellow
};
jobs();
