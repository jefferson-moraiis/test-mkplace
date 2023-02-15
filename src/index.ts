import { App} from '../src/main/server'
const app = new App();
const port = process.env.PORT || 8000;

app.server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
