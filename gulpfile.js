// QUICK GULPFILE

const gulp = require('gulp');
const babel = require('gulp-babel');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const eslint = require('gulp-eslint');

gulp.task('pug', function buildHTML() {
  return gulp.src('app/pug/*.pug')
  .pipe(pug({
    // Your options in here.
  }))
  .pipe(gulp.dest('public/dist'))
});

gulp.task('stylus', function () {
  return gulp.src('app/stylus/stylesheet.styl')
    .pipe(stylus())
    .pipe(gulp.dest('public/dist'));
});

gulp.task('babel', function() {
// Node source
        gulp.src(["es6/**/*.js", "public/es6/*.js"])
          .pipe(eslint())
          .pipe(eslint.format());
        gulp.src("app/js/**/*.js")
          .pipe(babel())
          .pipe(gulp.dest("public/es6"));
        gulp.src("es6/**/*.js")
          .pipe(babel())
          .pipe(gulp.dest("dist"))
});

// WATCH - STYLUS, PUG,

gulp.task('default', ['pug','stylus','babel'], function(){
  gulp.watch('app/stylus/*.styl',['stylus']);
  gulp.watch('app/pug/*.pug',['pug']);
  gulp.watch('app/js/*.js',['babel']);
  gulp.watch('es6/**/*.js',['babel']);
})
