import { promisify } from 'util';
import pkg from '../../../package.json';
import { log } from '../../utils/log';

const figlet = promisify(require('figlet'));

export const version = async () => {
  const info = await figlet(`${pkg.name}`);
  log.success(`${info}  ${pkg.version}`);
};
