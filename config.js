const fs = require('fs');
const fileName = '../../package.json';
const config = require(fileName);
config.scripts.generateREADME = "npm explore basic-readme-generator -- npm start";

fs.writeFileSync(fileName, JSON.stringify(config, null, 2));