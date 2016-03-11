var gulp         = require('gulp');
var del          = require('del');
var runSequence  = require('run-sequence');

var neat         = require('node-neat');

var sourcemaps   = require('gulp-sourcemaps');
var sass         = require('gulp-sass');
var minifyCss    = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

var jade         = require('jade');
var gulpJade     = require('gulp-jade');

var babel        = require("gulp-babel");
var jshint       = require('gulp-jshint');

var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var plumber      = require('gulp-plumber');
var notify       = require('gulp-notify');
// var rename       = require('gulp-rename');

var browserSync  = require('browser-sync');
var reload       = browserSync.reload;

var cache        = require('gulp-cache');
var imagemin     = require('gulp-imagemin');


// Options Variables
var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

var plumberErrorHandler = { errorHandler: notify.onError({
    title: 'Gulp',
    message: 'Error: <%= error.message %>'
    })
};


// // Images
// gulp.task('images', function(){
//     return gulp.src('src/images/**/*.+(png|jpg|gif|svg)')
//     .pipe(cache(imagemin()))
//     .pipe(gulp.dest('app/images'));
// })


// // Fonts
// gulp.task('fonts', function(){
//     return gulp.src('src/fonts/**/*')
//     .pipe(gulp.dest('app/fonts'));
// })


// Jade to HTML
gulp.task('jade', function() {
     gulp.src('src/templates/**/*.jade')
        .pipe(plumber(plumberErrorHandler))
        .pipe(gulpJade({
            jade: jade,
            pretty: true
        }))
        .pipe(gulp.dest('app/'))
        .pipe(reload({stream: true}));
});

// // HTML to HTML
// gulp.task('html', function() {
//      gulp.src('src/templates/**/*.html')
//         .pipe(gulp.dest('app/'))
//         .pipe(reload({stream: true}));
// });


// Compile Sass into CSS
gulp.task('sass', function() {
    return gulp.src('src/styles/**/*.scss')
    // return gulp.src('src/styles/site-styles.scss')
    .pipe(plumber(plumberErrorHandler))
    .pipe(sourcemaps.init())
    .pipe(sass({
        includePaths: neat.includePaths,
    }))
    .pipe(concat('styles.min.css'))
    // .pipe(minifyCss())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sourcemaps.write('.'))        
    .pipe(gulp.dest('app/css/'))
    .pipe(reload({stream: true}));
})


// Compile Babel es6 to JS
gulp.task("babel", function() {
    return gulp.src("src/scripts/**/*.js")
    // .pipe(plumber(plumberErrorHandler))
    //     .pipe(jshint())
    //     .pipe(jshint.reporter('fail'))
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(concat('scripts.min.js'))
    // .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("app/js/"))
    .pipe(reload({stream:true}));
})

//Library
gulp.task('vendor', function() {
    return gulp.src("src/vendor/**/*.*")
    .pipe(gulp.dest("app/vendor"));
})

// Clean Task
gulp.task('cleanFull', function(callback) {
    del('app/**/*');
    return cache.clearAll(callback);
})


// Clean Task - except images
gulp.task('clean', function(callback){
    del(['app/**/*', '!app/images', '!app/images/**/*'], callback)
})


// Build Task
gulp.task('build', function(callback){
    runSequence('cleanFull',
        ['jade', 'sass', 'babel', 'vendor'],
        callback
    )
})



// Watch Task
gulp.task('watch', ['build'], function() {
    gulp.watch('src/styles/**/*.scss', ['sass']);
    gulp.watch('src/scripts/**/*.js', ['babel']);
    gulp.watch('src/**/*.jade', ['jade']);
    // gulp.watch('src/templates/**/*.html', ['html']);
    gulp.watch('src/vendor/**/*.*', ['vendor']);
})


// Proxy Server + watch PHP sass and js
gulp.task('serve',  ['watch'], function() {

    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
});


gulp.task('default', ['serve']);