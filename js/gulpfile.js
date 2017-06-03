//1������gulp��
var gulp = require("gulp");
//����sass�����Ӧ��ģ��
var sass = require("gulp-sass");
//����ϲ��ļ���Ӧ��ģ��
var concat = require("gulp-concat");
//����ѹ����ģ��
var uglify = require("gulp-uglify");
//�����������ģ��
var rename = require("gulp-rename");
//����ѹ��CSS��ģ��
var minifycss = require('gulp-minify-css');

//2��д��copy�ļ�������
gulp.task("copy-index",function(){
//	gulp.src("index.html").pipe(gulp.dest("dist"));
	//�ѿ����Ĵ��벿�𵽷������ϡ�
	gulp.src("index.html").pipe(gulp.dest("D:/phpStudy/WWW/web.1702"));
});

gulp.task("copy-images",function(){
	gulp.src("img/*.jpg").pipe(gulp.dest("D:/phpStudy/WWW/day16gulp/img"));
});

//

//sass��������
gulp.task("sass",function(){
	gulp.src("common.scss")//Դ�ļ�
	.pipe(sass())//��sassԤ���루��ʲô��Ĵ��?
	.pipe(gulp.dest("css/"));//�ѽ����ںδ���
	
});


//�ϲ�
gulp.task("concatJS",function(){
	gulp.src(["js/index.js","js/goodsList.js"])
	.pipe(concat("all.js"))
	.pipe(gulp.dest("dist/js"));
});

//�ϲ���ѹ��
gulp.task("uglify",function(){
	gulp.src(["js/index.js","js/goodsList.js"])
	.pipe(concat("all.js"))//�ϲ�
	.pipe(uglify())//ѹ��
	.pipe(gulp.dest("dist/js"));
});

//�ϲ���ѹ����������
gulp.task("concatuglifyrename",function(){
	gulp.src(["js/index.js","js/goodsList.js"])
	.pipe(concat("all.js"))//�ϲ�
	.pipe(gulp.dest("dist/js"))
	.pipe(uglify())//ѹ��
	.pipe(rename("all.min.js"))
	.pipe(gulp.dest("dist/js"));
});


gulp.task("minifycss",function(){
	gulp.src("css/index.scss")
	.pipe(sass())
	.pipe(minifycss())//ѹ��
	.pipe(gulp.dest("dist/css"));
});


gulp.task("watchAll",function(){
	gulp.watch("index.html",["copy-index"]);
	gulp.watch("img/*.jpg",["copy-images"]);
	
});

























