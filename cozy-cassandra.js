#!/usr/bin/env node

const Workshopper = require('workshopper-jlord'),
      path        = require('path')

function fpath (f) {
    return path.join(__dirname, f)
}

Workshopper({
    name        : 'cozy-cassandra',
    title       : 'cozy-cassandra',
    subtitle    : 'Drive Thru Cassandra',
    appDir      : __dirname,
    menuItems   : [],
    exerciseDir : fpath('./exercises/')
}).init()
