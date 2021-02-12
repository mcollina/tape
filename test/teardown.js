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
