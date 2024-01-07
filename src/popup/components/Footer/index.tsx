import BugOutlined from '@ant-design/icons/lib/icons/BugOutlined'
import DollarOutlined from '@ant-design/icons/lib/icons/DollarOutlined'
import { SettingsState } from 'popup/redux/reducers/settings'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  toggleLogging
} from '../../redux/actions/settings/index'
import { RootState } from '../../redux/reducers'

import { Container, CheckboxArea, BugReport, Sponsor, StyledCheckbox, Version } from './styles'

export const Footer: React.FC = () => {
  const dispatch = useDispatch()
  const [version, setVersion] = useState('')

  const {
    logging
  } = useSelector<RootState>((state) => state.settings) as SettingsState

  useEffect(() => {
    const manifestData = chrome.runtime.getManifest()
    setVersion(manifestData.version)
  }, [])

  return (
    <Container>
      <CheckboxArea>
        <StyledCheckbox
          checked={logging}
          onChange={() => dispatch(toggleLogging())}
        >{'Show logs in browser console'}</StyledCheckbox>
      </CheckboxArea>

      <Version>v{version}</Version>
    </Container>
  )
}
