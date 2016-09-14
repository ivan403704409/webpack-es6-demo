//不同环境的配置参数
var ENV = {};

//开发环境配置
ENV.dev = {
	src 		: './src/', 			//源码目录
	env         : 'dev',                //环境
	entry       : './src/app.js',       //入口文件 
	buildPath   : __dirname+'/dev/',  //构建路径
	template    : './src/index.html',  	//html模板
	sourceBasePath : '',					//资源（html, css, js, img）根路径，即网站根目录，异步加载的模块也是以这个为根目录
	apiBasePath : '',	   //api接口地址根路径
	env_name: '开发环境',
};


//联调环境配置
ENV.debug = {
	src 		: './src/', 					//源码目录	
	env         : 'debug',            			//环境
	entry       : './src/app.js',       		//入口文件 
	buildPath   : __dirname+'/debug/',    		//构建路径
	template    : './src/index.html',  			//html模板
	sourceBasePath : '', //资源（html, css, js, img）根路径，即网站根目录，异步加载的模块也是以这个为根目录
	apiBasePath : 'http://192.168.1.164:8080',	   //api接口地址根路径
	env_name: '联调环境',

}

//测试环境配置
ENV.test = {
	src 		: './src/', 					//源码目录	
	env         : 'test',            			//环境
	entry       : './src/app.js',       		//入口文件 
	buildPath   : __dirname+'/test/',    		//构建路径
	template    : './src/index.html',  			//html模板
	sourceBasePath : '', //资源（html, css, js, img）根路径，即网站根目录，异步加载的模块也是以这个为根目录
	apiBasePath : 'http://192.168.1.164:8080',	   //api接口地址根路径
	env_name: '测试环境',

}

//发布环境配置
ENV.production = {
	src 		: './src/', 					//源码目录	
	env         : 'production',            		//环境
	entry       : './src/app.js',       		//入口文件 
	// buildPath   : __dirname.replace(/(\\|\/)([^(\\|\/)]+(\\|\/)?){2}$/,'')+'/Public/production/', //构建路径
	buildPath   : __dirname+'/production', //构建路径
	template    : './src/index.html',  			//html模板
	sourceBasePath : '', //资源（html, css, js, img）根路径，即网站根目录，异步加载的模块也是以这个为根目录
	apiBasePath : 'http://192.168.1.164:8080',	   //api接口地址根路径
	env_name: '发布环境',
}

module.exports = ENV;
