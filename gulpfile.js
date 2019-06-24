const gulp = require('gulp');  
const pug = require('gulp-pug');

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

gulp.task('default', gulp.series(watchTask, pugTask));

