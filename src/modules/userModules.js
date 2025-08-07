import { sequelize } from "../config/tasks_users_db.js"
import { DataTypes } from "sequelize"


//                                      USER                                             //


export const User = sequelize.define("User", {

    name: {
        type: DataTypes.STRING(100), allowNull: false, unique: true
    },
    email: {
        type: DataTypes.STRING(100), unique: true, allowNull: false
    },
    password: {
        type: DataTypes.STRING(100), allowNull: false
    }
});


//                                      TASK                                             //


export const Task = sequelize.define("Task", {

    title: {
        type: DataTypes.STRING(100), unique: true, allowNull: false
    },
    description: {
        type: DataTypes.STRING(100), allowNull: false
    },
    isComplete:{
        type: DataTypes.BOOLEAN, defaultValue:false
    }
});










