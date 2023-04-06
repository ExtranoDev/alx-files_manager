// controller routes
import redisClient from '../utils/redis';
import dbClient from '../utils/db';

class AppController {
  // appcontroller class
  static getStatus(req, res) {
    const redisLive = redisClient.isAlive();
    const dbLive = dbClient.isAlive();
    res.status(200).json({ redis: redisLive, db: dbLive });
  }

  static async getStats(req, res) {
    const users = dbClient.nbUsers();
    const files = dbClient.nbFiles();
    res.status(200).json({ users, files });
  }
}

export default AppController;
