/* jshint  esversion:6 */
const Sequelize = require('sequelize');
const sequel = new Sequelize('sqlite:./db/quot18.db3');
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
		id: {type:Sequelize.INTEGER },
		qno: {type: Sequelize.STRING},
		qdt:{type:Sequelize.DATE},
		pname: {type: Sequelize.STRING},
		paddr:{type:Sequelize.STRING},
		enqno:{type:Sequelize.STRING},
		enqdt:{type:Sequelize.STRING},
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
		id: {type:Sequelize.INTEGER },
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
		id: {type:Sequelize.INTEGER },
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
sequel.sync().then(function(){
	Quotop.create({
		qno: '00001',
		qdt: '01/04/2018',
		pname: 'Kamlesh Corporation',
		paddr: '89, Nagdevti Street, Mumbai 400 003',
	});
		Quotop.findAll().then(quotations=> {
		console.log(quotations.length);
	});
}) ;


   Quotop.query('Select * from quotop');
/*sequel.close().then(function() {
	console.log("connection closed");
}); */


