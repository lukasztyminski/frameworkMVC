'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const runSequence = require('run-sequence');

$.loadSubtasks('tasks/**/*.task.js', $);

//Main tasks
gulp.task('default', done => {
    runSequence(
        'clean',
        'browser-sync',
        [
            'style',
            'javascript'
        ],
        'html',
        'watch',
        done
    );
});

gulp.task('build', done => {
  runSequence(
    'clean',
    [
      'style:prod',
      'javascript:prod'
    ],
    'html:prod',
    done
  );
});

