/* jshint  esversion:6 */
const Sequelize = require('sequelize');
const sequel = new Sequelize('sqlite:./db/stkcsm18.db3');
sequel
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Masmfg = sequel.define('mfg',
	{mfg: {type: Sequelize.STRING},
		name: {type: Sequelize.STRING}
	},{
		freezeTableName: true,
	timestamps: false});
sequel.sync().then(function(){
	Masmfg.create({
		mfg: 'LDR',
		name: 'LEADER'
	});
		Masmfg.findAll().then(mfgs => {
		console.log(mfgs.length);
	});
}) ;
   Masmfg.query('Select * from masmfg');
/*sequel.close().then(function() {
	console.log("connection closed");
}); */


