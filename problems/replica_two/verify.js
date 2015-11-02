var exec=require("child_process").exec
exec ('echo "SELECT * FROM mykeyspace.table1;exit"|sudo ccm node1 cqlsh',function(err,stdout,stderr)
{
check=stdout;
if(check.match("2")&&check.match("mobile")&&check.match("garry")&&check.match("601-222"))
{
console.log("Row entered successfully");
}
else
{
console.log("Row with details \"2 | mobile | garry | 601-222\" not entered");
}
})
//exec ('echo "SELECT token(id),id from mykeyspace.table1;exit"|sudo ccm node1 cqlsh',function(err,stdout,stderr)
//{
//check=stdout;
//if(check.match("token(id)"))
//{
//console.log("to succesfully");
//}
//else
//{
//console.log("Row \"1 | hattiesburg |  bob | 601-111\" is not 



