'use strict';

var tap = require('tap');
var tape = require('../');

tap.test('teardown', {timeout: 1000}, function (tt) {
    tt.plan(1);
    tape('dummy test', function (t) {
        t.teardown(function () {
            tt.pass('tape teardown');
        });
        t.end();
    });
});

tap.test('multiple teardown', {timeout: 1000}, function (tt) {
    tt.plan(3);
    tape('dummy test', function (t) {
        t.teardown(function () {
            tt.pass('tape teardown');
        });
        t.teardown(function () {
            tt.pass('tape teardown');
        });
        t.teardown(function () {
            tt.pass('tape teardown');
        });
        t.end();
    });
});

tap.test('teardown with promise', {timeout: 1000}, function (tt) {
    tt.plan(2);
    tape('dummy test', function (t) {
        var resolved = false;
        t.teardown(function () {
            tt.pass('tape teardown');
            var p = Promise.resolve();
            p.then(function () {
                resolved = true;
            });
            return p;
        });
        t.on('end', function () {
            tt.is(resolved, true);
        });
        t.end();
    });
});
