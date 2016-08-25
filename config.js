/**
 * 参数说明
 * {
 * 	  "JSENTER":"入口文件夹",
 * 	  "VIEWENTER":"打包模板文件夹",
 * 	  "CDN":"cdn路径,deploy时更改静态文件路径",
 * 	  "OUTPUT:"指定生产打包路径",
 * 	  "STATICPATH":"静态资源路径前缀"
 * }
 */


module.exports={
	//webpack页面打包文件入口
	"JSENTER":["./src/js/page"],
	//webpack模板打包入口
	"VIEWENTER":["./templete"]
}