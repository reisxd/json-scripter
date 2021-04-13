async function compile(jsonLocation, jsLocation) {
    var fs = require('fs')
    fs.readFile(jsonLocation, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
function joinProperties(object) {
  function tokenize(json) {
    let bucket = [];

    for (const [K, V] of Object.entries(json)) {
      bucket.push(K);

      if (V instanceof Object) {
        bucket = bucket.concat(tokenize(V));
        continue;
      }

      bucket.push(V);
    }

    return bucket;
  }

  const [first, ...tokens] = tokenize(object), util = require('util'), { EOL } = require('os');
  let start = false;

  return tokens.reduce((T, O) => T + (start ? (start = false, `${EOL}${O}`) : /\(.*\);?/.test(O) ? (O.endsWith(';') ? start = true : null, O) : `[${util.inspect(O)}]`), first);
}
    
      var result = data.replace(/{|}| |,|"/g, "")
     let ok =  JSON.parse(data)
     let jsCode = joinProperties(ok)
      fs.writeFile(jsLocation, jsCode, 'utf8', function (err) {
         if (err) return console.log(err);
      });
    });
    
} 
module.exports = compile;