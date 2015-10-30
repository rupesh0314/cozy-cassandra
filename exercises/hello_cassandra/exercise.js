const Exercise = require('workshopper-exercise'); 
module.exports = new Exercise();
var execute=require('workshopper-exercise/execute');
var exec=require('child_process').exec
exec('$CASSANDRA_HOME/data/',function(err,stdout,stderr)
{
var version=stdout.trim();
if (version !="") console.error ("cassandra not started")
else
{
console.log("cassandra started");
}
})

