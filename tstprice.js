/* jshint  esversion:6 */
const Sequelize = require('sequelize');
const sequel = new Sequelize('sqlite:./db/price18.db3');
const Op = Sequelize.Op
sequel
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const  Itmmas= sequel.define('Itmmas',
	{
		id: {type:Sequelize.INTEGER,primaryKey:true },
		mfg: {type: Sequelize.STRING},
		icode:{type:Sequelize.STRING},
		desc:{type:Sequelize.STRING},
		ddescenqno:{type:Sequelize.STRING},
		lcode:{type:Sequelize.STRING},
		ri:{type:Sequelize.DECIMAL},
	},{
		freezeTableName: true,
	timestamps: false});
 sequel.sync().then(function(){
	Itmmas.create({
		mfg: 'LDR',
		icode: 'GATCL1',
		lcode: 'IS 001',
		ri: 0
	})
 });

		Itmmas.findAll().then( (itms)=> {
		console.log(itms.length);
	});

const Itmpri = sequel.define('Itmpri',
	{
		id: {type:Sequelize.INTEGER,primaryKey:true },
		mfg: {type: Sequelize.STRING},
		icode:{type:Sequelize.STRING},
		lcode: {type: Sequelize.STRING},
		asize: {type: Sequelize.STRING},
		rate:{type:Sequelize.DECIMAL},
		mrp:{type:Sequelize.DECIMAL},

	},{
		freezeTableName: true,
	timestamps: false});

 Itmpri.belongsTo(Itmmas);



sequel.sync().then(() =>{console.log("item"); 
	Itmmas.create(
		{
		mfg:"LDR", 
		icode: "GATCL1",
		desc: "",
		ddesc: "",
		lcode: "",
		ri:0
		})
}).then( ()=> {	    console.log("finding all");
	Itmmas.findAll().then((Itms)=> {
			console.log(Itms.length);
			console.log("Total Items");
		})
 })
 Itmpri.create(
	{
		mfg: "LDR" ,
		icode:"GATCL1",
		lcode: "IS 001",
		asize: "D",
		rate: 333.00,
		mrp: 400.30

	}
)
	
	
	/*:w

	.then(  function() {
		process.nextTick( ()=>{
		sequel.close().catch( (error)=>{console.log(error)});
		console.log("connection closed");	
		})
*/
