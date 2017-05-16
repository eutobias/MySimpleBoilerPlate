'use strict';

const CONFIG = require("./gulp/config");

const gulp = require("gulp");
const watch = require("gulp-watch");

gulp.task('test', ()=>{
	watch(CONFIG.JS_PATH, () => {

	});
});
