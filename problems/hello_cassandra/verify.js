var exec=require('child_process').exec
//exec('export CASSANDRA_HOME=/Users/rupeshreddyt/Documents/study/WORK/CSC695_MURALI/cassandra/apache-cassandra-2.2.1/',function(err,stdout,stderr){})
//exec('echo $CASSANDRA_HOME',function(err,stdout,stderr){})
exec('cd $CASSANDRA_HOME/data',function(err,stdout,stderr)
{
if (err){
 console.log("Cassandra not started");
}
else
{
console.log("Cassandra started");
}
})

