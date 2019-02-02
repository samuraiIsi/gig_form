var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    loading = require('gulp-load-plugins')();

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

gulp.task('styles', function() {
    return sass('scss/*.scss', { style: 'compressed' })
        .pipe(gulp.dest('dist/'));

});

gulp.task('watch', function() {
    gulp.watch(jsFiles, ['scripts']);
    gulp.watch('scss/**/*.scss', ['styles']);
    gulp.watch('index.html', ['copy:index']);
});

gulp.task('serve', function() {
    loading.connect.server({
        port: 8044,
        root: './dist'
    });
});

gulp.task('default', ['scripts', 'styles', 'watch', 'copy:index', 'copy:images', 'serve']);