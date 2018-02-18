var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', () => {
    return gulp.src(['src/sass/**/*.sass', 'src/sass/**/*.scss'])
            .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
            .pipe(gulp.dest('src/css'))
});

gulp.task('watch', () => {
    gulp.watch(['src/sass/**/*.sass', 'src/sass/**/*.scss'], ['sass']);
});

gulp.task('default', ['watch']);