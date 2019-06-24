const gulp = require('gulp');  
const pug = require('gulp-pug');
const sass = require('gulp-sass');

function sassTask() {
    return gulp
        .src('*.scss') 
        .pipe(sass().on('error', sass.logError)) 
        .pipe(gulp.dest('build'));
}
gulp.task(sassTask);

function pugTask() {
    return gulp
        .src('*.pug')
        .pipe(pug()) // pipe to pug plugin
        .pipe(gulp.dest('build'));
}
gulp.task(pugTask);

function watchTask() {
    return gulp.watch('*.pug', gulp.series(pugTask));
}
gulp.task(watchTask);

gulp.task('default', gulp.series(sassTask, pugTask, watchTask));

