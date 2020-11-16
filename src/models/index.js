import dotenv from 'dotenv'
import Sequelize from 'sequelize'

dotenv.config();
const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING);
export default sequelize;