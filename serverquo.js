/* jshint  esversion:6 */
/* file: serverquo.js */
const fs = require('fs');
const  express =  require("express");
const bodyParser = require("body-parser");
const sqlite3  = require("sqlite3").verbose() ;


const app = express();

app.use(bodyParser.urlencoded({extended: true}));



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
		incr:{type:Sequelize.DECIMAL},
		nar:{type:Sequelize.STRING }

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
sequel.sync().then(function(){
	console.log("tables ready");
}) ;
/*	Quotop.create({
		qno: '00008',
		qdt: '2018-04-09',
		pname: 'R Jayeshkumar & Co',
		paddr: '84, Nagdevti Street, Mumbai 400 003',
	});
		Quotop.findAll().then(quotations=> {
		console.log(quotations.length);
                sequel.query('Select * from quotop;').then(quote=>{console.log(quote);
			sequel.close().then(()=>{console.log("connection closed");});
		});
	});
*/
app.listen(3000 , function() {
 console.log( "Listening on port 3000");
});


app.get('/',(req,res) => {
  res.sendFile(__dirname + '/index.html');
});

