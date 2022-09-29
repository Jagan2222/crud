const {Sequelize , DataTypes}  = require('sequelize');
const sequel = new Sequelize('crud', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
});

const db={}
 db.Sequelize=Sequelize;
 db.sequel=sequel;

 const crudData = db.sequel.define('crudData', {
    id: {
        type: DataTypes.INTEGER,  
         primaryKey: true,
         autoIncrement: true,

    }, 
    age: {
      type: DataTypes.INTEGER,  
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false

    },
    place: {
        type: DataTypes.STRING,
        allowNull: false
  
    }
  });
  db.sequel.sync().then(()=>{
    console.log("sync")}
  )

  module.exports = crudData;