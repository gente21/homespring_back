"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gbooks_1 = require("./gbooks");
const bodyParser = require('body-parser');
var cors = require('cors');
const app = (0, express_1.default)();
const port = 8081;
const gbookImg = "     __...--~~~~~-._   _.-~~~~~--...__\n" +
    "    //               `V'               \\ \n" +
    "   //                 |                 \\ \n" +
    "  //__...--~~~~~~-._  |  _.-~~~~~~--...__\\ \n" +
    " //__.....----~~~~._\\ | /_.~~~~----.....__\\\n" +
    "====================  |  ====================\n" +
    "        gbooks test `---`";
// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// CORS
cors({ credentials: true, origin: true });
app.use(cors());
app.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.send('This is our Homespring entry point, there\'s nothing of interest here.');
});
app.post('/gbooks', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    (0, gbooks_1.getGoogleBooks)(req, res, next);
});
app.use(express_1.default.json());
app.listen(port, () => console.log(`Running on port ${port}! \r\n \r\n ${gbookImg}`));
//# sourceMappingURL=app.js.map