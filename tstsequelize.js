/* jshint  esversion:6 */
const Sequelize = require('sequelize');
const sequel = new Sequelize('sqlite:./db/quot18.db3');
const Op = Sequelize.Op
sequel
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Quotop = sequel.define('quotop',
	{
		id: {type:Sequelize.INTEGER,primaryKey:true },
		qno: {type: Sequelize.STRING},
		qdt:{type:Sequelize.DATE},
		pname: {type: Sequelize.STRING},
		paddr:{type:Sequelize.STRING},
		enqno:{type:Sequelize.STRING},
		enqdt:{type:Sequelize.DATE},
		tel:{type:Sequelize.STRING},
		email:{type:Sequelize.STRING}
	},{
		freezeTableName: true,
	timestamps: false});
/* sequel.sync().then(function(){
	Quotop.create({
		qno: '00001',
		qdt: '01/04/2018',
		pname: 'Kamlesh Corporation',
		paddr: '89, Nagdevti Street, Mumbai 400 003',
	});
		Quotop.findAll().then(quotations=> {
		console.log(quotations.length);
	});
}) ; */
const Quoitm = sequel.define('quoitm',
	{
		id: {type:Sequelize.INTEGER,primaryKey:true },
		qno: {type: Sequelize.STRING},
		sr:{type:Sequelize.INTEGER},
		desc: {type: Sequelize.STRING},
		qty:{type:Sequelize.DECIMAL},
		unt:{type:Sequelize.STRING},
		rate:{type:Sequelize.DECIMAL},
		disc:{type:Sequelize.DECIMAL},
		tax:{type:Sequelize.DECIMAL},
		cost:{type:Sequelize.DECIMAL},	
		fac:{type:Sequelize.DECIMAL},
		incr:{type:Sequelize.DECIMAL}

	},{
		freezeTableName: true,
	timestamps: false});

const Quotc= sequel.define('quotc',
	{
		id: {type:Sequelize.INTEGER,primaryKey: true },
		qno: {type: Sequelize.STRING},
		vld:{type:Sequelize.INTEGER},
		vldunt:{type:Sequelize.STRING},	
		pmt: {type: Sequelize.STRING},
		pmtunt:{type:Sequelize.STRING},
		dlvtm:{type:Sequelize.DECIMAL},
		dlvunt:{type:Sequelize.STRING},
		dlvloc:{type:Sequelize.STRING},
		tax:{type:Sequelize.DECIMAL},
		disc:{type:Sequelize.DECIMAL},
		wrt:{type:Sequelize.STRING},
		nar1:{type:Sequelize.STRING},	
		nar2:{type:Sequelize.STRING},
		nar3:{type:Sequelize.STRING}

	},{
		freezeTableName: true,
	timestamps: false});
sequel.sync().then(() =>{console.log("creating RJ"); 
	Quotop.create(
		{
		qno: '00008',
		qdt: '2018-04-09',
		pname: 'R Jayeshkumar & Co',
		paddr: '84, Nagdevti Street, Mumbai 400 003'
		})
}).then( ()=> {
	    console.log("finding all");
	Quotop.findAll().then((quotations)=> 
		{
			console.log(quotations.length);
			console.log("total Quotations");
		})

	}).then( ()=> {
		console.log("Destroyer in action");
		Quotop.destroy( {where:{id : {[Op.gt]: 7}}})
	}).then( ()=> {
		console.log("bulk Creator in action")
		quotes = [{qno:"00012"},{qno:"00013"}]
		Quotop.bulkCreate(quotes);
	
	}).then( ()=> {
		Quotop.update( {pname:"Kapoor & Co"},{where:{id:{[Op.eq]: 10}}}).catch((error)=>{console.log(error)})
	
	}).then(  ()=> {
		Quotop.findAll( {where: {pname: {[Op.eq]:null}}}).then((results)=>{
			console.log(results[0].get({plain:true}));	
		})
	}).then(  function() {
		process.nextTick( ()=>{
		sequel.close().catch( (error)=>{console.log(error)});
		console.log("connection closed");	
		})
	}).catch((error)=> {console.log(error )})
