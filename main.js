

// get orgs repos /orgs/{org}/repos
// await octokit.request('GET /orgs/{org}/repos', {
//   org: 'org'
// })


const express = require("express");
const app = express();
const execSync = require("child_process").execSync;
const https = require("https");
////////////////////////

const defaultPort = 8080;
let apis = [
	// { port: 8080, servicename: "", url: "", serviceCB: "" }
];

console.log("currently turns all dependencies into local apis");
let deps = require("./package.json").dependencies
		
// Object.keys(deps)
// 	.filter((dep)=>{ return dep !== "express" })
// 	.forEach(
// 		(dep)=>{
// 			execSync(`cd ./node_modules && git clone https://github.com/devcore-official/${ dep }.git`);
// 		}
// 	);

// execSync ("cd ./node_modules && git clone https://github.com/devcore-official/DStructs-Wikipedia.git")
// execSync ("cd ./node_modules && git clone https://github.com/devcore-official/DStruct-assembler.git")
// execSync ("cd ./node_modules && git clone https://github.com/devcore-official/Dstruct-intuit.git")
// execSync ("cd ./node_modules && git clone https://github.com/devcore-official/algosynthesis.git")
// execSync ("cd ./node_modules && git clone https://github.com/devcore-official/always-building.git")
// execSync ("cd ./node_modules && git clone https://github.com/devcore-official/always-optimizing.git")
// execSync ("cd ./node_modules && git clone https://github.com/devcore-official/always-solving.git")
// execSync ("cd ./node_modules && git clone https://github.com/devcore-official/always-testing.git")
// execSync ("cd ./node_modules && git clone https://github.com/devcore-official/auto-app-maker.git")
// execSync ("cd ./node_modules && git clone https://github.com/devcore-official/datastructures.git")
// execSync ("cd ./node_modules && git clone https://github.com/devcore-official/everything-api.git")
// execSync ("cd ./node_modules && git clone https://github.com/devcore-official/interface.git")
// execSync ("cd ./node_modules && git clone https://github.com/devcore-official/memory.git")
// execSync ("cd ./node_modules && git clone https://github.com/devcore-official/ml-code-optimization.git")
// execSync ("cd ./node_modules && git clone https://github.com/devcore-official/niche-finder.git")
// execSync ("cd ./node_modules && git clone https://github.com/devcore-official/piworker.git")
// execSync ("cd ./node_modules && git clone https://github.com/devcore-official/polyglot.git")
// execSync ("cd ./node_modules && git clone https://github.com/devcore-official/project-management.git")
// execSync ("cd ./node_modules && git clone https://github.com/devcore-official/registry.git")
// execSync ("cd ./node_modules && git clone https://github.com/devcore-official/schematics.git")
// execSync ("cd ./node_modules && git clone https://github.com/devcore-official/spec-dev.git")
// execSync ("cd ./node_modules && git clone https://github.com/devcore-official/stay-alive.git")

// execSync("npm install");
// execSync("npm install");


Object.keys(deps).filter((dep)=>{ return dep !== "express" }).forEach(
	(dep,index)=>{


	try {

			apis.push(
				{	
					port 		:(defaultPort + index), 
					servicename	:(deps),
					url			:`https://localhost:${defaultPort + index}`,
				    serviceCB	:require(dep),
				    app         :app
				}
			)

			app.listen(apis[index].port);
				pingServicesEverySecond:
			setInterval(()=>{
				// https.request(apis[index].url).then()
				console.log("need to ping apis every second", new Date());
			},1000);



	} catch(error){

		console.log("api didn't load", dep)

	}
	}
);