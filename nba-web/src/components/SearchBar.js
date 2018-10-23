import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import nba from 'nba';
import {PROFILE_PIC_URL_PREFIX} from '../constant'

const Option = AutoComplete.Option;

export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    }

    onSelect = (value) => {
        console.log('onSelect', value);
        this.props.loadPlayerInfo(value);
    }

    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : nba.searchPlayers(value).map(
                ({fullName, playerId}) =>
                    <Option key={playerId} value={fullName}>
                        <img className="player-option-pic"
                             alt="Profile"
                             src= {`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}/>
                        <span className="player-option-label">{fullName}</span>
                    </Option>
            )
        });
    }

    render() {
        const { dataSource } = this.state;
        return (
            <AutoComplete
                className="search-bar"
                size="large"
                dataSource={dataSource}
                // style={{ width: '100%', marginBottom: '30px' }}
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="Search NBA player"
                optionLabelProp="value"
            >
                <Input suffix={<Icon type="search" />} />
            </AutoComplete>
        );
    }
}