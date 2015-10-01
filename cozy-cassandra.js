#!/usr/bin/env node

const workshopper = require('workshopper'),
      path        = require('path')

function fpath (f) {
    return path.join(__dirname, f)
}

workshopper({
    name        : ‘cozy-cassandra’,
    title       : ‘cassandra demo’,
    subtitle    : 'Learn cassandra lessons’,
    appDir      : __dirname,
    menuItems   : [],
    exerciseDir : fpath('./exercises/')
})
