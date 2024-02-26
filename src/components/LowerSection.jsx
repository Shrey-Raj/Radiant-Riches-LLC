import Typography from 'antd/es/typography/Typography'
import React from 'react'
import LowerSectionCard from './LowerSectionCard'

import { Button, Flex} from 'antd' ; 

const LowerSection = () => {
  return (
    <div className='lower-section'>

    <Typography.Title level={2}>Related Deals you might like for</Typography.Title>
    <Flex className='ls-cards' style={{justifyContent:'space-around'}}>
        <LowerSectionCard/>
        <LowerSectionCard/>
        <LowerSectionCard/>
    </Flex>

    <Flex className='above-footer'>
        <Typography.Title level={2} style={{width:'50%' , fontWeight
        :'400' , color:'grey'}}>
        Sign up and get exclusive <br/> special deals</Typography.Title>
        <Flex className='above-footer-right'>
        <Button style={{background:'#1b7ced', color:'#fff', fontSize:'small'}} >Sign Up</Button></Flex>
    </Flex>

    </div>
  )
}

export default LowerSection