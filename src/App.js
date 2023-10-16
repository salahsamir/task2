import { DbConnect } from "../db/Dbconnected.js";
import { auth } from "./models/Auth/auth.router.js";
import { GlobalError } from "./utilits/handleError.js";

export const App = (express) => {
  const app = express();
  app.use(express.json())
  app.get("/", (req, res) => res.send("Hello World!"));
  app.use('/auth',auth)
  app.all("*", (req, res) => res.send(" router not found !"));
  app.use(GlobalError)
  DbConnect()
  const port = process.env.PORT;
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
};
