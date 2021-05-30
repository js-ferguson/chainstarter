import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x3A444C1A5A9824626ceCf7beD737c77E3edf8a2C'
);

export default instance;