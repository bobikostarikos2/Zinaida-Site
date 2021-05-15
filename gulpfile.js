let gulp = require ('gulp');

//КОНВЕРТАЦИЯ PUG
let pug = require ('gulp-pug');

gulp.task('pug', function(){
    return gulp.src('#src/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('#src/../'))
});

gulp.task('pug_2', function(){
    return gulp.src('#src/modules/docs/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('#src/../'))
});

//СЛЕЖКА ФАЙЛОВ
gulp.task('watch', function(){
    gulp.watch('#src/**/*.pug', gulp.parallel('pug'));
    gulp.watch('#src/modules/docs/*.pug', gulp.parallel('pug_2'));
});

gulp.task('default', gulp.parallel('watch'));