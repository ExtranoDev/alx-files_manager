// Database client class for MongoDB
import { MongoClient } from 'mongodb';

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const db = process.env.DV_DATABASE || 'files_manager';
    const uri = `mongodb://${host}:${port}/${db}`;
    this.client = new MongoClient(uri);
    this.client.connect();
  }

  isAlive() {
    return this.client.isConnected();
  }

  async nbUsers() {
    this.db = this.client.db(this.db);
    const userNum = await this.db.users.count();
    return userNum;
  }

  async nbFiles() {
    this.db = this.client.db(this.db);
    const fileNum = await this.db.files.count();
    return fileNum;
  }
}

const dbClient = new DBClient();
export default dbClient;
