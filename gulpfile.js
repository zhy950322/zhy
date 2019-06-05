var gulp = require('gulp'),
uglify = require('gulp-uglify'),
rename = require('gulp-rename'),
 imagemin = require('gulp-imagemin'),
 sass = require('gulp-sass'),
 cssnano = require('gulp-cssnano');
//concat = require('gulp-concat');

gulp.task('js',function(){
	gulp.src('./src/js/*.js')
	//.pipe(concat())
	.pipe(uglify())
	.pipe(rename({"suffix" : ".min"}))
	.pipe(gulp.dest('./dist/js'));
})
gulp.task('imagemin',function(){
	gulp.src('./src/img/indeximg/*')
	.pipe(imagemin())
	.pipe(rename({"suffix" : ".min"}))
	.pipe(gulp.dest('./dist/img/indeximg'));
})
gulp.task('imagemin1',function(){
	gulp.src('./src/img/listimg/*')
	.pipe(imagemin())
	.pipe(rename({"suffix" : ".min"}))
	.pipe(gulp.dest('./dist/img/listimg'));
})
gulp.task('imagemin2',function(){
	gulp.src('./src/img/detailsimg/*')
	.pipe(imagemin())
	.pipe(rename({"suffix" : ".min"}))
	.pipe(gulp.dest('./dist/img/detailsimg'));
})

gulp.task('sass',function(){
	gulp.src('./src/sass/*.scss')
	.pipe(sass())
	.pipe(cssnano())
	.pipe(rename({"suffix" : ".min"}))
	.pipe(gulp.dest('./dist/css'))
})
//监听
gulp.task('default',function(){
	gulp.watch('./src/js/*.js',['js']);
	//gulp.watch('./src/img/*',['imagemin']);
	gulp.watch('./src/sass/*.scss',['sass']);
})