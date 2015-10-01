#!/usr/bin/env node

const workshopper = require('workshopper'),
      path        = require('path')

function fpath (f) {
    return path.join(__dirname, f)
}

workshopper({
    name        : 'cozy-cassandra',
    title       : 'cozy-cassandra',
    subtitle    : 'Drive Thru Cassandra',
    appDir      : __dirname,
    menuItems   : [],
    exerciseDir : fpath('./exercises/')
})
