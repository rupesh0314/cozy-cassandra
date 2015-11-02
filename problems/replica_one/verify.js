var exec=require('child_process').exec
exec('ccm list',function(err,stdout,stderr)
{var check=stdout
if (check.match("mycluster"))
{
console.log("mycluster created successfully");
}
else
{
console.log("mycluster is not created");
}
})
//exec('sudo ccm status',function(err,stdout,stderr)
//{
//var check1=stdout
//if(check1.match("node1: UP"))
//console.log("node1 is up and running");
//else
 
exec('ls ~/.ccm/mycluster/node1/data/mykeyspace',function(err,stdout,stderr)
{
var check2=stdout
if(check2.match("table1"))
console.log("table1 created successfully");
else
console.log("table1 not created");
})
exec ('echo "SELECT * FROM mykeyspace.table1;exit"|sudo ccm node1 cqlsh',function(err,stdout,stderr)
{
check=stdout;
if(check.match("1")&&check.match("hattiesburg")&&check.match("bob")&&check.match("601-111"))
{
console.log("Row entered succesfully");
}
else
{
console.log("Row \"1 | hattiesburg |  bob | 601-111\" is not entered");
}
})
