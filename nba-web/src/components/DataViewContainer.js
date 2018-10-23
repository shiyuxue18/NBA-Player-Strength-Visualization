import React from 'react';
import { Radio, Switch, Row, Col } from 'antd';
import _ from 'lodash';
import {ShotChart} from './ShotChart'
import {CountSlider} from './CountSlider'

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
        chartType: "hexbin",
        displayToolTips: true
    }

    onCountSliderChange= (minCount) => {
        this.setState({
            minCount
        });
    }

    onChartTypeChange = (e) => {
        this.setState({
            chartType: e.target.value,
        });
    }

    ondTooltipChange = (displayToolTips) => {
        this.setState({
            displayToolTips
        });
    }

    render() {
        const { minCount, chartType, displayToolTips } = this.state;
        return (
          <div className="data-view">
              <ShotChart
                  playerId={this.props.playerId}
                  minCount={minCount}
                  displayToolTips={displayToolTips}
                  charTypes={chartType}
              />
              {
                  chartType === "hexbin" ? (
                      <CountSlider
                          value={minCount}
                          onChange={_.debounce(this.onCountSliderChange, 500)}
                      />
                  ) : null
              }


              <Row>
                  <Col span={8} offset={7}>
                      <RadioGroup onChange={this.onChartTypeChange} value={chartType}>
                          <Radio value={"hexbin"}>Hexbin</Radio>
                          <Radio value={"scatter"}>Scatter</Radio>
                      </RadioGroup>
                  </Col>
                  <Col span={2}>
                      <Switch
                          checkedChildren="On"
                          unCheckedChildren="Off"
                          defaultChecked
                          onChange={this.ondTooltipChange}
                      />
                  </Col>
              </Row>
          </div>

        );
    }
}