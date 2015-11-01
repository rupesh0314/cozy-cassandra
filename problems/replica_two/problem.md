Replication with Cassandra #2

---------------------------------------------------------------------
## HELP

`>>` In previous chapter ,you learned what replication and replication factor are. Here lets see how a node will be chosen to replicate data.

`>>` Every data you write has a primary key and this is passed to a hashing algorithm to get a key value. Below is an example to explain replication

`>>` SUPPOSE entire key range is 100 which is in ring form called a keyspace. This keyspace is partitioned as below among 4 nodes:
	>Node1 - 1 to 25 (First 1/4 of the ring)
	>Node2 - 26 to 50 (Next 1/4 of the ring)
	>Node3 - 51 to 75 (following 1/4 of the ring)
	>Node4 - 76 to 100 (last 1/4 of the ring)
`>>` suppose your primary key got a key value '91' . Each and every node knows what stprage partitions other nodes hold. So the node with which you are interacting "COORDINATING NODE" makes a first replicate of the data on the node to which your key primarily belongs . Here lets say you are interacting with node1 and 91 falls into 76 to 100 range. So node1 makes a replica of data in node4 first and walks down in ring to next node (here node 1,2,..) to replicate data number of times until replication factor is reached.

`>>` To see a keyvalue of your data.
```sh
cqlsh:mykeyspace>select token(<primary key>), [col1],[col2],..from <table_name>
```
Above command displays token value of the primary key along with all details of your data row.Key value can be large. 2^64 value range ( 2^-64 to 2^64) for a cluster is used as single and distributed among nodes.

`>>` To view ring and token ownership of all nodes
```sh
$ccm node1 nodetool ring
```
`>>` To see where you data got replicated 
```sh
$ccm node1 nodetool getendpoints mykeyspace table1 1
```sh

--------------------------------------------------------------------

## Exercise

> Add a new row into table1 of 'mykeyspace' (2,'garry','mobile','601-222')
> Check keyvalues for data with id =1 and id=2 
> Check where the data got replicated with id=1 and id=2 

--------------------------------------------------------------------
