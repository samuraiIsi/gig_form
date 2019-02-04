var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    gulp = require('gulp'),
    loading = require('gulp-load-plugins')();

    sass.compiler = require('node-sass');

var jsFiles = 'js/*.js';

gulp.task('copy:index', function(){
    return gulp.src('index.html')
        .pipe(gulp.dest('./dist'))
});

gulp.task('copy:images', function(){
    return gulp.src('images/*.png')
        .pipe(gulp.dest('./dist'))
});

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename('scripts.min.js'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function() {
    gulp.watch(jsFiles, ['scripts']);
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('index.html', ['copy:index']);
});

gulp.task('serve', function() {
    loading.connect.server({
        port: 8044,
        root: './dist'
    });
});

gulp.task('default', ['scripts', 'sass', 'watch', 'copy:index', 'copy:images', 'serve']);