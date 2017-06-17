var gulp = require('gulp');
var minify = require('gulp-minify-css');
var concat = require("gulp-concat");
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var gulpSequence = require('gulp-sequence');  
var del = require('del');
var desc = "./build";
var src = './src/js';

gulp.task('js', function () {
    gulp.src([
            // src + '/lib/jquery-1.12.js',
            // src + '/lib/jquery.pjax.js',
            // src + '/lib/nprogress.js',
            // src + '/lib/swiper-3.4.2.jquery.min.js',
            src + '/**/*.js',
            //'!' + src + '/**/*.alone.js',
            '!' + src + '/lib/*.js'
        ])  
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest(desc + '/js'))
        .pipe(reload({stream: true}));

        // gulp.src([src + '/**/*.alone.js',src + '/lib/*.js'])
        // .pipe(uglify())
        // .pipe(gulp.dest(desc + '/js'))
        // .pipe(reload({stream: true}));
        
    gulp.src([src + '/lib/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest(desc + '/js'))
        .pipe(reload({stream: true}));
});

gulp.task('css', function () {
    gulp.src(['src/css/**/*.css'])
        .pipe(minify())
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest(desc + '/css'))
        .pipe(reload({stream: true}));
});

gulp.task('images', function () {
    gulp.src(['src/img/**/*'])  
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest(desc + '/img'));
});

gulp.task('fonts', function(){
    gulp.src(['src/fonts/**/*'])
    .pipe(gulp.dest(desc + '/fonts'));
});

gulp.task('clean', function(cb) {
    del(['clean', desc + '/img', desc + '/js', desc + '/css'], desc + '/*.html' , cb)
});

gulp.task('serve',['css', 'js','images','fonts'], function() {
    browserSync.init({
        server: "./",
        port: 8080
    });
    gulp.watch("./src/js/**/*.js", ['js']);
    gulp.watch("./src/css/**/*.css", ['css']);
    gulp.watch("./*.html").on('change', reload);
});

gulp.task('default',['clean','css', 'js','images','fonts']);