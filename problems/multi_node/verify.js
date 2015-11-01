#!/usr/bin/env node
var exec=require('child_process').exec
exec('ccm list',function(err,stdout,stderr)
{
if (err)
{
 console.log("ccm not installed");

}
else
{
console.log("ccm installed successfully");
}
})


