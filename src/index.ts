import { App} from '../src/main/server'
import { MongoClient } from './infra/database/mongodb';

const app = new App();
const database = new MongoClient();
const port = process.env.PORT || 8000;
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/mkplace';

(async function () {
  await database.connect(uri);
  app.server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
})();

