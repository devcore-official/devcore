

// get orgs repos /orgs/{org}/repos
// await octokit.request('GET /orgs/{org}/repos', {
//   org: 'org'
// })


const express = require("express");
const app = express();
const execSync = require("child_process").execSync;
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
// 			console.log(`execSync ("git clone https://github.com/devcore-official/${ dep }.git")`);
// 		}
// 	);

execSync ("git clone https://github.com/devcore-official/DStructs-Wikipedia.git")
execSync ("git clone https://github.com/devcore-official/DStruct-assembler.git")
execSync ("git clone https://github.com/devcore-official/Dstruct-intuit.git")
execSync ("git clone https://github.com/devcore-official/algosynthesis.git")
execSync ("git clone https://github.com/devcore-official/always-building.git")
execSync ("git clone https://github.com/devcore-official/always-optimizing.git")
execSync ("git clone https://github.com/devcore-official/always-solving.git")
execSync ("git clone https://github.com/devcore-official/always-testing.git")
execSync ("git clone https://github.com/devcore-official/auto-app-maker.git")
execSync ("git clone https://github.com/devcore-official/datastructures.git")
execSync ("git clone https://github.com/devcore-official/everything-api.git")
execSync ("git clone https://github.com/devcore-official/interface.git")
execSync ("git clone https://github.com/devcore-official/memory.git")
execSync ("git clone https://github.com/devcore-official/ml-code-optimization.git")
execSync ("git clone https://github.com/devcore-official/niche-finder.git")
execSync ("git clone https://github.com/devcore-official/piworker.git")
execSync ("git clone https://github.com/devcore-official/polyglot.git")
execSync ("git clone https://github.com/devcore-official/project-management.git")
execSync ("git clone https://github.com/devcore-official/registry.git")
execSync ("git clone https://github.com/devcore-official/schematics.git")
execSync ("git clone https://github.com/devcore-official/spec-dev.git")
execSync ("git clone https://github.com/devcore-official/stay-alive.git")

Object.keys(deps).filter((dep)=>{ return dep !== "express" }).forEach(
	(dep,index)=>{


		// apis.push(
		// 	{	
		// 		port 		:(defaultPort + index), 
		// 		servicename	:(deps),
		// 		url			:`localhost:${defaultPort + index}`,
		// 	    serviceCB	:require(dep),
		// 	    app         :app
		// 	}
		// )

		// app.listen(apis[index].port);
		// pingServicesEverySecond:
		// setInterval(()=>{
		// 	https.request(apis[index].url).then()
		// },1000);
	}
);