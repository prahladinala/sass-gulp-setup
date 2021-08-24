const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

// COMPILES SASS INTO CSS in CSS Directory (as specified)
function buildStyles() {
    return src('index.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

// WATCHES SASS File TO COMPILE FOR ANY NEW CHANGES
function watchTask() {
    watch(['index.scss'], buildStyles)
}

// EXPORTS THESE FUNCTIONS in Series(in order)
exports.default = series(buildStyles, watchTask)