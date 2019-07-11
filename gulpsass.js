const gulp = require('gulp');
const sass = require('gulp-sass')
const $ = gulpLoadPlugins();

//编译scss文件
gulp.task('scss', function () {
  gulp.src('./app/styles/*.scss') //要编译的scss文件路径
    .pipe(sass({
      outputStyle: 'expanded' //编译后的css样式尾部的“}”自动换行
    }))
    .pipe($.postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("./app/styles")) //编译后生成的css文件存放位置
});
