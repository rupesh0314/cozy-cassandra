Connect to cluster 

---------------------------------------------------------------------
## HELP

`>>` Cqlsh is a command line utility for issuing query statements to cassandra like altering schema e.t.c,

`>>` Initially conection to the cluster with the name as assigned to "cluster_name" in bin/cassandra.yaml is established and then start interacting with cassandra using Cqlsh shell.

`>>` After starting cassandra , connecting to it and switching to cqlsh shell can be done by command: 
 
```sh
 $bin/cqlsh
```
`>>` Play around with cqlsh shell.
 ```sh
$help 
```
Above command displays all commands and to get help with each command run:
 ```sh
$help <command>  
```
`>>` cqlsh supports TAB completion. For instance type in `` $DES `` and hit TAB, will fill `$DESC ` for you and other exaple is type in `` $DESC `` and after space hit TAB twice and suggestions will be displayed on what can be slected . ``$DESC <*****>`` will display details of *****

--------------------------------------------------------------------

## Exercise

> Start Cassandra ( if not already started)
> Switch to Cqlsh shell
> Get details of the cluster you are connected to through cqlsh commands

-------------------------------------------------------------------- 
