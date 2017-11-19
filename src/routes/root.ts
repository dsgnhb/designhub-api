import {Router} from 'express';
import * as fs from 'fs';
let root_router = Router();

root_router.get('/', getPackageVersion);

let ver: number;
function getPackageVersion(req, res) {
    if (!ver) {ver = JSON.parse(fs.readFileSync('./package.json', 'utf-8')).version; }

    return res.json({version: ver});
}
export default root_router;