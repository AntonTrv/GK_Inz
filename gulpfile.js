const gulp = require('gulp');
const concatCss = require('gulp-concat-css');//css concatination
const cleanCSS = require('gulp-clean-css');// css minify
const postCss = require('gulp-postcss');//postCss
const imagemin = require('gulp-imagemin');//image compressor
const imgRetina = require('gulp-img-retina');//retina
const autoprefixer = require('gulp-autoprefixer');//prefixer
var gcmq = require('gulp-group-css-media-queries');//group mediaQueries

//tasks



//concatCSS+groupMedia+cleanCSS+autoprefixer
gulp.task('css', function () {
  return gulp.src('app/scss/*.css')
    .pipe(concatCss("styles.css"))
    .pipe(gcmq())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('dist/css'));
});
//imgMin
gulp.task('img-min', function(){
  return gulp.src('app/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/img'))
});
//Retina
gulp.task('retina', function() {

  return gulp.src('app/**/*.html')
    .pipe(imgRetina(retinaOpts))
    .on('error', function(e) {
      console.log(e.message);
    })
    .pipe(gulp.dest('dist/img'));

});


//gulp.task('default', ['css', 'img-min', 'autoprefixer', 'sass', 'stream'], ); //не срабатывает в этой версии gulp
