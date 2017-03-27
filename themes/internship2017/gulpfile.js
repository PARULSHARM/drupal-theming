var gulp = require('gulp');
var compass = require('gulp-compass');
// var scss = require('gulp-sass');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');


gulp.task('compass', function() {
    gulp.src('scss/**/*.scss')
        .pipe(compass({
            config_file: 'config.rb',
            css: 'css',
            sass: 'scss'
        }))
        .pipe(gulp.dest('css'))
})

// gulp.task('scss', function() {
//     return gulp.src('scss/**/*.scss')
//         .pipe(scss())
//         .pipe(gulp.dest('css'))
//         .pipe(browserSync.reload({
//             stream: true
//         }))
// });


gulp.task('browserSync', function() {
    var files = [
        'css/*',
        'scss/*',
        'index.php'
    ]


    browserSync.init(files, {
        proxy: "http://internship.2017/"
    })
});

gulp.task('images', function() {
    return gulp.src('images/**/*.+(png|jpg|gif|svg)')
        .pipe(imagemin())
        .pipe(gulp.dest('images'))
});

gulp.task('default', ['compass'], function() {
    gulp.watch('scss/**/*.scss', ['compass']);
});




