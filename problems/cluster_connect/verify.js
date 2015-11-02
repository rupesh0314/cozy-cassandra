#!/usr/bin/env node
var exec=require('child_process').exec
exec('ps auxw|grep "[c]qlsh"',function(err,stdout,stderr)
{
var test=stdout
if (test.match("cqlsh"))
{
//console.log(stdout);
 console.log("Cluster Connection Successful");

}
else
{
console.log("Cqlsh did not start and cluster connection failed");
}
})

//execute('exit',function(err,stdout,stderr){})


