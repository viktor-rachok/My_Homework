var gulp=require("gulp"),concat=require("gulp-concat"),cssmin=require("gulp-cssmin"),uglify=require("gulp-uglify"),plumber=require("gulp-plumber"),autoprefixer=require("gulp-autoprefixer"),imagemin=require("gulp-imagemin"),webserver=require("gulp-webserver"),gutil=require("gulp-util");gulp.task("default",["cssConcat","cssMin","jsUglify","watch","webServer"]),gulp.task("release",function(){var s=gutil.env.number;console.log("Number",s)}),gulp.task("webServer",function(){gulp.src("./").pipe(webserver({livereload:!0,directoryListing:!0,open:!0}))}),gulp.task("imageMin",function(){gulp.src("./img/**/*.*").pipe(imagemin()).pipe(gulp.dest("./dist/imgMin"))}),gulp.task("cssConcat",function(){gulp.src("./**/*.css").pipe(autoprefixer()).pipe(plumber()).pipe(concat("all.css")).pipe(gulp.dest("./dist"))}),gulp.task("watch",function(){gulp.watch("./css/**/*.css",["cssMin"]),gulp.watch("./js/**/*.js",["jsUglify"])}),gulp.task("jsUglify",function(){gulp.src(["./js/home_work_js_9_10_*.js","./js/grunt_sad.js"]).pipe(uglify()).pipe(plumber()).pipe(concat("all.min.js")).pipe(gulp.dest("./dist")),gulp.src(["./js/libs/jquery-1.12.2.min.js","./js/libs/jquery.s*.js"]).pipe(uglify()).pipe(plumber()).pipe(concat("all.libs.min.js")).pipe(gulp.dest("./dist"))}),gulp.task("cssMin",function(){gulp.src(["css/reset.css","css/style_jcarousel.css","css/style_s*.css","css/style_menu.css","css/style_ch*.css","css/fff_tusjbold.css"]).pipe(cssmin()).pipe(plumber()).pipe(concat("all.min.css")).pipe(gulp.dest("./dist"))});