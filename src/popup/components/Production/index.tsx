import 'antd/lib/select/style/index.css'
import 'antd/lib/slider/style/index.css'
import 'antd/lib/input/style/index.css'

import Input from 'antd/lib/input'
import Select from 'antd/lib/select'
import Slider from 'antd/lib/slider'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setFilterStrictness } from '../../redux/actions/settings'
import {
  setTrainedModel,
  setFilterEffect,
  setWebsiteList
} from '../../redux/actions/settings/index'
import { RootState } from '../../redux/reducers'
import { SettingsState } from '../../redux/reducers/settings'
import { StatisticsState } from '../../redux/reducers/statistics'

import { Container, Stats, DropdownRow, TextBox } from './styles'

const { Option } = Select
export const Production: React.FC = () => {
  const dispatch = useDispatch()
  const {
    filterStrictness,
    trainedModel,
    filterEffect,
    websites
  } = useSelector<RootState>((state) => state.settings) as SettingsState
  const { totalBlocked } = useSelector<RootState>((state) => state.statistics) as StatisticsState

  return (
    <Container>
      <Stats>
        <span>Total blocked: {totalBlocked}</span>
      </Stats>

      <div>Filter strictness: {filterStrictness}%</div>
      <Slider
        min={1}
        max={100}
        onChange={(value: number) => dispatch(setFilterStrictness(value))}
        value={filterStrictness}
        tipFormatter={null}
      />

      <DropdownRow>
        <span>Filter effect</span>
        <Select
          defaultValue={filterEffect}
          style={{ width: 140 }}
          onChange={value => dispatch(setFilterEffect(value))}
        >
          <Option value="hide">Hide</Option>
          <Option value="blur">Blur</Option>
          <Option value="grayscale">Grayscale</Option>
        </Select>
      </DropdownRow>

      <Stats>
        <span>Using MobileNet_v1.2</span>
        {/* <Select
          defaultValue={trainedModel}
          style={{ width: 140 }}
          onChange={value => dispatch(setTrainedModel(value))}
        >
          <Option value={trainedModel}>{trainedModel}</Option>
        </Select> */}
      </Stats>

      <div>Whitelisted websites</div>
      <TextBox>
        <Input
          placeholder="www.twitter.com, www.facebook.com"
          defaultValue={websites.join(', ')}
          onChange={event => {
            // Handle the change event and update the whitelist
            const websites = event.target.value.split(/\s*,\s*/)
            dispatch(setWebsiteList(websites))
            // Update the whitelist/blacklist using the websites array
          }}
        />
      </TextBox>

    </Container>
  )
}
