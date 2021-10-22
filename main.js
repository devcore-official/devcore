

// get orgs repos /orgs/{org}/repos
// await octokit.request('GET /orgs/{org}/repos', {
//   org: 'org'
// })


const express = require("express");
const app = express();
////////////////////////

const defaultPort = 8080;
let apis = [
	// { port: 8080, servicename: "", url: "", serviceCB: "" }
];

console.log("currently turns all dependencies into local apis");
let deps = require("./package.json").dependencies

Object.keys(deps).filter((dep)=>{ return dep !== "express" }).forEach(
	(dep,index)=>{

		apis.push(
			{	
				port 		:(defaultPort + index), 
				servicename	:(deps),
				url			:`localhost:${defaultPort + index}`,
			    serviceCB	:require(dep),
			    app         :app
			}
		)

		app.listen(apis[index].port);
		// pingServicesEverySecond:
		// setInterval(()=>{
		// 	https.request(apis[index].url).then()
		// },1000);
	}
);