const Sequelize = require("sequelize");
const db = require("./../database");

const Todos = db.define(
  "todos",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    completed:{
        type: Sequelize.BOOLEAN,
        default:false,
        allowNull: false
    }
  },
  {
    timestamps: true,
    tableName: "todos",
  }
);

module.exports = Todos;