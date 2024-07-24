require('dotenv').config();
const express = require('express');
const router = require('./routes');
var cors = require('cors');

const port = process.env.PORT;
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors()); // Permite que el servidor reciba peticiones de cualquier origen Nota: por seguridad es preferible usar el origen específico

app.use(express.static('public'));
app.use(router);

app.listen(port, () => {
	console.log(`... ⚙️  Server Side listening on port ${port}`);
});
