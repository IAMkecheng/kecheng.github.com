var data=[];
var dataStr='1、一<br>\
<br>\
导演：谢立文/李俊民<br>\
<br>\
<br>\
2、二<br>\
<br>\
导演：谢立文/李俊民<br>\
<br>\
<br>\
3、三<br>\
<br>\
导演：谢立文/李俊民<br>\
<br>\
<br>\
4、四<br>\
<br>\
导演：谢立文/李俊民<br>\
<br>\
<br>\
5、五<br>\
<br>\
导演：谢立文/李俊民<br>\
<br>\
<br>\
6、六<br>\
<br>\
导演：谢立文/李俊民<br>\
<br>\
<br>\
7、七<br>\
<br>\
导演：谢立文/李俊民<br>\
<br>\
<br>\
8、八<br>\
<br>\
导演：谢立文/李俊民<br>\
<br>\
<br>\
9、九<br>\
<br>\
导演：谢立文/李俊民<br>\
<br>\
<br>\
10、十<br>\
<br>\
导演：谢立文/李俊民<br>\
<br>\
<br>\
11、十一<br>\
<br>\
导演：谢立文/李俊民<br>\
<br>\
<br>\
12、十二<br>\
<br>\
导演：谢立文/李俊民<br>\
<br>\
<br>\
13、十三<br>\
<br>\
导演：谢立文/李俊民<br>\
<br>\
<br>\
14、十四<br>\
<br>\
导演：谢立文/李俊民<br>\
<br>\
<br>\
15、十五<br>\
<br>\
导演：谢立文/李俊民<br>\
<br>\
<br>\
16、十六<br>\
<br>\
导演：谢立文/李俊民<br>\
<br>\
<br>\
17、十七<br>\
<br>\
导演：谢立文/李俊民<br>\
<br>\
<br>\
18、十八<br>\
<br>\
导演：谢立文/李俊民<br>\
<br>\
<br>\
19、十九<br>\
<br>\
导演：谢立文/李俊民<br>\
<br>\
<br>\
20、二十<br>\
<br>\
导演：谢立文/李俊民<br>\
';
var d=dataStr.split('<br><br><br>')
for(var i=0;i<d.length;i++){
	var c=d[i].split('<br><br>');
	data.push({
		img:c[0].replace('、',' ')+'.jpg',
		caption:c[0].split('、')[1],
		desc:c[1]
	});
	console.log(c[0].replace('、',' ')+'.jpg');
}