import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xd8B6EC5BAe2EB97593b8F7F815383e7b94e06C8E'
);

export default instance;