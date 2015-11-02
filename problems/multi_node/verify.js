#!/usr/bin/env node
var exec=require('child_process').exec
exec('ccm list',function(err,stdout,stderr)
{ var test=stdout
if (err)
{
 console.log("ccm not installed");

}
else
{
console.log("ccm installed successfully");
}
})
exec('sudo ccm status',function(err,stdout,stderr)
{
test=stdout
if(test.match("node1:") && test.match("node2:") && test.match("node3:") && test.match("node4:") && test.match("node5:") )
{
console.log("all nodes created");
}
else
{
console.log("5 nodes are not created ");
}
if(test.match("node4: UP"))
{
console.log("node4 is running");
}
else
{
console.log("node4 is down");
}
})


