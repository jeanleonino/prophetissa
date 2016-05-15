var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var browserSync = require('browser-sync')
var plumber = require('gulp-plumber')
var reload = browserSync.reload

var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'Safari >= 7',
  'Opera >= 23',
  'iOS >= 7',
  'ChromeAndroid >= 4.4',
  'bb >= 10'
]

var SOURCE = {
  scss: 'src/**/*.scss',
  css: 'public/css',
  html: 'public/*.html'
}

gulp.task('sass', function () {
  gulp.src(SOURCE.scss)
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({ browsers: AUTOPREFIXER_BROWSERS }))
    .pipe(gulp.dest(SOURCE.css))
    .pipe(reload({ stream: true }))
})

gulp.task('browser-sync', function () {
  browserSync({
    proxy: 'localhost:3000'
  })
})

gulp.task('watch-sass', ['sass', 'browser-sync'], function () {
  gulp.watch(SOURCE.scss, ['sass'])
})
