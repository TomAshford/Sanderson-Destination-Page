var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	clean = require('gulp-clean-css'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer');


var sassSources = [
		'sass/globals/*.scss',
		'sass/pages/*.scss',
		'sass/*.scss'
	],
	jsSources = [
		'scripts/src/*.js'
	],
	moduleSources = [
		'sass/modules/*.scss'
	]

gulp.task('log', function(){
	gutil.log('== My Log Task ==')
})

gulp.task('sass', function(done){
	gulp.src(sassSources)
	.pipe(sass({
		outputStyle: 'expanded',
		comments:true
	}))
	.on('error', gutil.log)
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	// .pipe(clean({
	// 	compatability: 'ie8'
	// }))
	.pipe(gulp.dest('css'))
	done();
});

gulp.task('modules', function(done){
	gulp.src(moduleSources)
	.pipe(sass({
		outputStyle: 'expanded',
		comments:true
	}))
	.on('error', gutil.log)
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	// .pipe(clean({
	// 	compatability: 'ie8'
	// }))
	.pipe(gulp.dest('css/modules'))
	done();
});

gulp.task('js', function(done){
	gulp.src(jsSources)
	// .pipe(uglify())
	.pipe(concat('script.gen.js'))
	.pipe(gulp.dest('scripts/build'))
	done();
})

gulp.task('watch', function(){
	gulp.watch(moduleSources, gulp.series(['modules', 'sass']));
	gulp.watch(sassSources, gulp.series(['sass']));
	gulp.watch(jsSources, gulp.series(['js']));
})

gulp.task('default', gulp.series('modules', 'sass', 'js', 'watch', function(done){
	done();
}));