import * as Constants from './Constants';
import Statistics from './Statistics';
import AuthHeader from './AuthHeader';
import History from './history';
import * as DataMani from './datamanipulation';

export default { ...Constants, ...DataMani, Statistics, AuthHeader, History };