Set up Cassandra in local system.

---------------------------------------------------------------------
## HELP

Prerequisite is to have Stable version of Java 7 or Java 8. get it from
`www.oracle.com/technetwork/java/javase/downloads/index.html`

`>>` Now doanload stable cassandra from: `www.cassandra.apache.org/download/`

`>>` Extract the cassandra folder and then have a look at the files and folders inside.

`>>` All the configuration files will be located in ``conf`` directory.

`>>` Main configuration fil in which most of the configurations are edited is `conf/cassandra.yaml`

`>>` cassandra path variable can be set by
```sh
$CASSANDRA_HOME= < ~/apache-cassandra-*.*.*/ >
```
`>>` Cassandra can be started in foreground and background

To start in foreground :
Naviate to cassandra folder and
 ```sh
$sudo bin/cassandra -f
```
-- leave the terminal open and work in other terminal.
To start Cassandra in background:
```sh
$Sudo bin/cassandra
```
To stop cassandra in forground,
just perform ctrl+c in the terminal window where cassandra was started in foreground.

To stop cassandra in background:
```sh
$ps auxw|grep cassandra
```
and obtain pid of the cassandra process
```sh
$sudo kill <pid>
```
# If rpc-server doesnot start automatically then go to cassandra.yaml file and change "start_rpc:" value to "true".`

--------------------------------------------------------------------

## Exercise

> Install Cassandra
> Set $CASSANDRA_PATH
> Start cassandra in foreground

--------------------------------------------------------------------

When you are done, you must run:

```sh
$ {appname} verify
```

to proceed. Your program will be tested, a report will be generated, and the lesson will be marked 'completed' if you are successful.

----------------------------------------------------------------------
