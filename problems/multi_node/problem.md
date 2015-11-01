Create Multiple Nodes On Local Machine

---------------------------------------------------------------------
## HELP

`>>` It is Important to understand the word DISTRIBUTED in cassandra which is a distributed database system. For this purpose you need multiple nodes which represents multiple machines

`>>` To replicate creation of multiple nodes and play around on local machine itself, `ccm` can be used. Exclusive creation of cassandra in foreground or background is not required . Better to close running cassandra.

INSTALLATION OF 'ccm'
  `>>` Navigate to cassandra folder and run:
```sh
$git clone https://github.com/pcmanus/ccm.git
$cd ccm
$./setup.py install
```
`>>` Now navigate back to cassandra folder and run
```sh
$ccm list
```
	which displays nothing . This means no clusters/nodes are created yet.

`>>` to create cluster run:
```sh
$ccm create -v 2.1.5 -n 3 mycluster
```
	Here `2.1.5` is version. It can be other version also and `-n 3` represets cluster with 3 nodes.

`>>`now run `$ccm list` to see the cluster 

`>>` To check the status of nodes run:
```sh
$ccm status
```
`>>` To start the nodes run:
```sh
$ccm start // To start all nodes at a time
$ccm <node> start // To start a specific node

`>>` Now you can switch to cqlsh shell for each node
```sh
$ccm <node> cqlsh
```
`>>` In cqlsh shell run below command to see other nodes which were created using `ccm` and all those are peers to current node.
```sh
cqlsh>select * from system.peers;
``` 
`>>` To stop nodes run
```sh
cqlsh>exit //to get out of cqlsh
$ccm stop // Stops all nodes
$ccm <node> stop //Stopes specific node
```
`>>` Run `ccm help` to look at all commands and play around
*** you may need to create alias for ipadress to create multiple nodes and also if not using system as root , use SUDO <ccm-commands>

--------------------------------------------------------------------

## Exercise

> Install ccm
> Create a cluster 'mycluster' with 5 nodes
> Start all nodes.
> Stop node4

--------------------------------------------------------------------
