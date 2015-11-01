var exec=require('child_process').exec
//exec('$CASSANDRA_HOME/bin/cassandra',function(err,stdout,stderr){})
exec('ccm list',function(err,stdout,stderr)
{var check=stdout.trim()
if (check.match("mycluster"))
{

 console.log("mycluster created successfully");

}
else
{
console.log("mycluster is not created");
}
})
exec('sudo ccm status',function(err,stdout,stderr)
{
var check1=stdout
if(check1.match("node1: UP"))
console.log("node1 is up and running");
else
console.log("node1 is down");
}) 
exec('sudo ccm node1 cqlsh ; DESC TABLES',function(err,stdout,stderr)
{
var check2=stdout
if(check2.match("table1"))
console.log("table1 created successfully");
else
console.log("table1 not created");
})


