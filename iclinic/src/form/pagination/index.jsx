

import { Steps } from 'antd';
import React from 'react'

const { Step } = Steps;
function Pagination(props) {
  return (
    <Steps size="small" current={props.current}>
    <Step title="Dados" />
    <Step title="Endereço" />
    <Step title="Dados" />
    <Step title="Dados" />
  </Steps>
  )
}

export default Pagination;

