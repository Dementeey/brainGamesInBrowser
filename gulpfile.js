/* eslint-disable */
'use strict';

const gulp = require('gulp');
const prefixer = require('gulp-autoprefixer');
const watch = require('gulp-watch');
const cssmin = require('gulp-clean-css');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const browserSync = require("browser-sync");
const reload = browserSync.reload;
const rimraf = require('rimraf');
const svgmin = require('gulp-svgmin');
const imageminJpegoptim = require('imagemin-jpegoptim');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

const path = {
  build: {                                  // Тут мы укажем куда складывать готовые после сборки файлы
    html: 'build/',
    js: './build/js/',
    css: 'build/css/',
    img: 'build/',
    svg: 'build/img/'
  },
  src: {                                    // Пути откуда брать исходники
    html: 'src/**/*.html',                  // Синтаксис src/**/*.html говорит gulp что мы хотим взять все файлы с расширением .html из всех папок после src
    js: 'src/js/**/*.js',
    style: 'src/sass/index.sass',        // for SASS
    img: 'src/img/**/*.+(png|jpg)',             // Синтаксис img/**/*.* означает - взять все файлы всех расширений
    svg: 'src/img/**/*.svg'                // Синтаксис img/**/*.* означает - взять все файлы всех расширений
  },
  watch: {                                  // Тут мы укажем, за изменением каких файлов мы хотим наблюдать
    html: 'src/**/*.html',
    js: 'src/js/**/*.js',
    style: 'src/**/*.sass',              // for SASS
    img: 'src/img/**/*.+(png|jpg)',
    svg: 'src/img/**/*.svg'
  },
  clean: './build'
};

const configServer = {
  server: {
    baseDir: "./build"
  },
  tunnel: true,   // ВКЛ\ВЫКЛ  временный адрес для просмотра вне локальной сети
  host: 'localhost',
  port: 9000,
  logPrefix: "BrainGAMES"
};

gulp.task('locale', function () {           // Web server port: 9000
  return browserSync(configServer);
});

gulp.task('clean', function (cb) {          // remove build/**
  rimraf(path.clean, cb);
});

gulp.task('html:build', function () {
  gulp.src(path.src.html)
    .pipe(gulp.dest(path.build.html))
    .pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
  return gulp.src(path.src.js)
    .pipe(eslint())
    .pipe(eslint.formatEach('compact', process.stderr))
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest(path.build.js))
    .pipe(reload({stream: true}));
});

gulp.task('style:build', function () {
  return gulp.src(path.src.style)           // Выберем наш main.scss
    .pipe(sass())                           // Скомпилируем
    .pipe(prefixer())                       // Добавим вендорные префиксы
    .pipe(cssmin())                         // Сожмем
    .pipe(gulp.dest(path.build.css))        // И в build
    .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
  return gulp.src(path.src.img)             // Выберем наши картинки
    .pipe(imagemin({                        // Сожмем их
      progressive: true,
      optimizationLevel: 5,
      use: [
        pngquant({quality: '60', speed: 5}),
        imageminJpegoptim({progressive: true, max: 85, stripAll: true})
      ],
      interlaced: true
    }))
    .pipe(gulp.dest(path.build.img))        // И бросим в build
    .pipe(reload({stream: true}));
});

gulp.task('imageSvg:build', function () {
  return gulp.src(path.src.svg)             // Выберем наши SVG картинки
    .pipe(svgmin({
      plugins: [{
        removeDoctype: true
      }, {
        removeComments: true
      }, {
        cleanupNumericValues: {
          floatPrecision: 2
        }
      }, {
        convertColors: {
          names2hex: false,
          rgb2hex: false
        }
      }]
    }))
    .pipe(gulp.dest(path.build.svg))        // И бросим в build
    .pipe(reload({stream: true}));
});

gulp.task('build', [
  'html:build',
  'js:build',
  'style:build',
  'image:build',
  'imageSvg:build'
]);

gulp.task('watch', function(){
  watch([path.watch.html], function(event, cb) {
    gulp.start('html:build');
  });
  watch([path.watch.style], function(event, cb) {
    gulp.start('style:build');
  });
  watch([path.watch.js], function(event, cb) {
    gulp.start('js:build');
  });
  watch([path.watch.img], function(event, cb) {
    gulp.start('image:build');
  });
  watch([path.watch.svg], function(event, cb) {
    gulp.start('imageSvg:build');
  });
});

gulp.task('default', ['build', 'locale', 'watch']);
