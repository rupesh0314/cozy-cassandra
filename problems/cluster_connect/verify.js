#!/usr/bin/env node
var exec=require('child_process').exec
//exec('$CASSANDRA_HOME/bin/cassandra',function(err,stdout,stderr){})
exec('/Users/rupeshreddyt/Documents/study/WORK/CSC695_MURALI/cassandra/apache-cassandra-2.2.1/bin/cqlsh',function(err,stdout,stderr)
{
if (err)
{
console.log(stdout);
 console.log("Cluster Connection Successful");

}
else
{
console.log("Cqlsh did not start and cluster connection failed");
}
})

//execute('exit',function(err,stdout,stderr){})


