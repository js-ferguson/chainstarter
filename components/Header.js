import React from 'react';
import { Menu } from 'semantic-ui-react';


const header = () => {
    return (
        <Menu style={{ marginTop: '10px' }}>
            <Menu.Item>
                ChainStarter
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item>
                    Campaigns
                </Menu.Item>
                <Menu.Item>
                    +
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
};

export default header;