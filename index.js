const yargs = require("yargs");
const compile = require("./compile/compile");
module.exports.compile = require('./compile/compile')
const options = yargs
 .usage("Usage: -json <json location> -js <where to write js file>")
 .option("json", { alias: "jsonloc", describe: "Json Location", type: "string", demandOption: true })
 .option("js", { alias: "jsloc", describe: "Js Location", type: "string", demandOption: true })
 .argv;

compile(options.json, options.js)