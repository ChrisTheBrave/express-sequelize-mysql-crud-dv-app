require('dotenv').config();

module.exports = (sequelize, Sequelize) => {
    const Neighborhood = sequelize.define("neighborhood", {
      neighborhood_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      neighborhood_name: {
        type: Sequelize.STRING
      }
    });
  
    return Neighborhood;
  };