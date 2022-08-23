import express from 'express'
import config from 'config';
import connect from './utils/connect';
import logger from './utils/logger';
import routes from './routes'

const port  = config.get<number>('port')

const app = express();

app.get('/',  (req, res)=>{
    console.log("first")
})

app.listen(port, async ()=> {
    logger.info(`App running on port ${port}`)

    await connect();

    await routes(app);

})