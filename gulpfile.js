const gulp = require('gulp'),
      del = require("del"),
      csso = require('gulp-csso'),
      terser = require('gulp-terser'),
      concat = require('gulp-concat'),
      sass = require('gulp-sass'),
      plumber = require('gulp-plumber'),
      sourcemaps = require('gulp-sourcemaps')
      cp = require('child_process'),
      imagemin = require('gulp-imagemin'),
      bsync = require('browser-sync').create();

// var jekyllCommand = (/^win/.test(process.platform)) ? 'jekyll.bat' : 'bundle';
var jekyllCommand = 'bundle';

/*
 * Build the Jekyll Site
 * runs a child process in node that runs the jekyll commands
 */
function jekyll() {
  return cp.spawn(jekyllCommand,
    ['exec', 'jekyll', 'build'],
    {stdio : 'inherit'}
  );
}

/*
 * Build the jekyll site and launch browser-sync
 */
function browserSync(done) {
  bsync.init({
    server: {
      baseDir : "_site"
    }
  });
  done();
}

/*
 * BrowserSync reload
 */
function browserSyncReload(done) {
  bsync.reload();
  done();
}

/*
 * Compile and minify sass/scss
 */
function css() {
  return gulp
    .src('src/scss/**/*.scss')
    .pipe(sourcemaps.init({loadMaps : true}))
    .pipe(plumber())
    .pipe(sass({
      outputStyle : 'expanded'
    })).on('error', sass.logError)
    .pipe(sourcemaps.write())
    .pipe(csso())
    .pipe(gulp.dest('assets/css/'));
}

/*
 * Minify images
 */
function images() {
  return gulp
    .src('src/img/**/*.{jpg,png,gif}')
    .pipe(plumber())
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true }))
    .pipe(gulp.dest('assets/img/'));
}

/**
 * Compile and minify js
 */
function scripts() {
  return gulp
    .src('src/js/**/*.js')
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(terser())
    .pipe(gulp.dest('assets/js/'))
    // .pipe(browsersync.stream())
}

/**
 * Watch for file changes
 */
function watchFiles() {
  gulp.watch('src/styles/**/*.scss', css);
  gulp.watch('src/js/**/*.js', scripts);
  gulp.watch('src/img/**/*.{jpg,png,gif}', imagemin);
  gulp.watch(
    [
      '*html',
      '_includes/**/*',
      '_layouts/**/*',
      '_pages/**/*',
      '_posts/**/*',
    ],
    gulp.series(jekyll, browserSyncReload)
  );
}

/*
 * Clean assets
 */
function clean() {
  return del(["_site/assets/"]);
}

// define complex tasks
const watch = gulp.parallel(watchFiles, browserSync);
const build = gulp.series(clean, gulp.parallel(css, images, scripts, jekyll));

// export tasks
exports.images = images;
exports.css = css;
exports.js = scripts;
exports.jekyll = jekyll;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = build
