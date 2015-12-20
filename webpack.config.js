var webpack=require('webpack');
module.exports={
    output: {
        filename: "bundle.js"
    },
    module:{
    	loaders:[{
    		test:/\.js$/,
    		loader:'babel',
    		exclude:[/node_modules/]
    	},{
    		test:/\.html$/,
    		loader:'html',
    		exclude:[/node_modules/]
    	}]
    },
    plugins: [
      
    ]
}