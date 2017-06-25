module.exports= function(ctx){
	//console.log('setAllowResponse',ctx.method);
	ctx.set('Access-Control-Allow-Origin','*');
	ctx.set('Access-Control-Allow-Headers','Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
	ctx.set('Access-Control-Allow-Methods','PUT, POST, GET, DELETE, OPTIONS');
};