import Http from '../../domain/repository/Http';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

export default class ExpressAdapter implements Http {
    app: any;

    constructor() {
        this.app = express();

        this.app.use(function (req: any, res: any, next: any) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            next();
        });

        this.app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
        this.app.use(bodyParser.json({ limit: '10mb' }));
        this.app.use(bodyParser.raw({ limit: '10mb' }));

        this.app.use(function (req: any, res: any, next: any) {
            return next();
        });
    }

    route(method: string, url: string, role: string[], callback: Function): void {
        this.app[method]('/api/v1' + url, async function (req: Request, res: Response) {
            if (role[0] === 'public') {
                const output = await callback(req.params, req.body, req);
                res.status(output.status).json(output.response);
            } else {

                //AUTENTICAR
                const output = await callback(req.params, req.body, req);                   
                res.status(output.status).json(output.response);
                
            }
        });
    }

    async listen(port: number): Promise<any> {
        this.app.listen(port, () => {
            console.log('Server running in port ' + process.env.PORT);
        });
    }
}
