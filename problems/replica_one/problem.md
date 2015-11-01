Replication with Cassandra # 1

---------------------------------------------------------------------
## HELP

`>>` Cassandra being a distributed database , it is powerful in terms of availability
`>>` Consider you have 4 NODES and client interacts with NODE 2 and does a write operation. 
The replicas/copies of the data are created in multiple nodes and at any point of time one or the other node will be ready to serve the data when needed. This replication changes among Strategies. Replication can be controlled by <b>REPLICATION_FACTOR </b>

`>>` Strategies (stated above) :
	> Simple Strategy: Cluster with nodes
	> Network Topology strategy: Clusters with Data centers and racks in which nodes are present
    Here we shall look at Simple Strategy.

`>>` Keyspace is a place where the nodes store information on. More information is in following exercise.

`>>` To create a keyspace with 'simple strategy' and replication factor of 3 :
```sh
cqlsh> CREATE KEYSPACE <keyspacec name> WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 3};
```
`>>` To start creating database you need to create a keyspace and use that keyspace to create table in.
```sh
cqlsh>use <keyspace_name>
cqlsh:<keyspace_name>>CREATE TABLE <table_name>([col1],[col2],..); // atleast one primary key.
cqlsh:<keyspace_name>>INSERT INTO <table_name>([col1],[col2],..)VALUES ([value],[value],..);
```

*** To know how simple strategy replication in detail follow the link ***
``` https://academy.datastax.com/cources/ds201-cassandra-core-concepts/internal-architecture-replication ```

--------------------------------------------------------------------

## Exercise

> Use node1 cqlsh shell and create a keyspace 'mykeyspace' with simple strategy and replication factor as 3
> Get into 'mykeyspace' and create a table "table1" with columns "(id int primary key,name text,address text,phone text)"
> insert a row in 'table1' : (1,'jack','hattiesburg','601-111')

--------------------------------------------------------------------
