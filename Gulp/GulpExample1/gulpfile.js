var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');

// Basic Gulp task syntax
gulp.task('task1', function () {
    console.log('Hello Satya...!');
})

// start browsersync server
gulp.task('browserSync', function () {
    browserSync({
        server: {
            basedir: 'app'
        }
    })
})



gulp.task('sassTask', function () {
    return gulp.src('app/scss/**/*.scss') // gets all files ending with .scss in app/scss and children dirs
      .pipe(sass()) // passes it through a gulp-sass
      .pipe(gulp.dest('app/css')) // outputs it in the css folder
      .pipe(browserSync.reload({ // reloading with browser sync
          stream: true
      }));
})

gulp.task('watchMe', function () {
    // Gulp watch syntax
    gulp.watch('app/scss/**/*.scss', ['sassTask']);
})


// Optimization Tasks 
// ------------------

// Optimizing CSS and JavaScript 
gulp.task('useref', function () {

    return gulp.src('app/*.html')
      .pipe(useref())
      .pipe(gulpIf('*.js', uglify()))
      .pipe(gulpIf('*.css', cssnano()))
      .pipe(gulp.dest('dist'));
});


// Optimizing Images 
gulp.task('images', function () {
    return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
      // Caching images that ran through imagemin
      .pipe(cache(imagemin({
          interlaced: true,
      })))
      .pipe(gulp.dest('dist/images'))
});


gulp.task('fonts', function () {
    return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
})


// cleaning 
gulp.task('clean:dist', function () {
    return del.sync(['dist/**/*', '!dist/images', '!dist/images/**/*']);
});

//// Build Sequences
//// ---------------

gulp.task('default', function (callback) {
    console.log('default task executed...');
    runSequence(['sassTask', 'browserSync'], 'watchMe',
      callback
    )
})

gulp.task('build', function (callback) {
    runSequence(
      'clean:dist',
      'sassTask',
      ['useref', 'images', 'fonts'],
      callback
    )
})