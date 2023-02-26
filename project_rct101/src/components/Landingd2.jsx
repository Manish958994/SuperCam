import React from 'react'
import { Flex,Box,Text, FlexBox,Icon,} from '@chakra-ui/react'
import styles from "./Landingd2.module.css"
import { BsTelephone,BsChat } from 'react-icons/bs';
import {SlLocationPin  } from 'react-icons/sl';
import {MdSupportAgent  } from 'react-icons/md';
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
const Landingd2 = () => {
  return (
    <Flex gap={'95px'}  height={'250px'} bg="#f7f7f7" width={'100%'} padding={'15px'} >

<Box  margin="auto"  width={'23%'} cursor={'pointer'}  >

    <Box width={'100px'} height={'100px'}  margin={'auto'}  className={styles.Icon} >

            <BsTelephone color='#265f98' fontSize="40px"/>
           
         </Box>
<Text fontSize={'26px'}>Give Us A Call</Text>
<p>Questions? We're happy to help Call us at <span style={{color:"#5698df"}}> 800-223-2500</span> </p>


</Box>
<Box  margin="auto"  width={'23%'} cursor={'pointer'}  >

<Box width={'100px'} height={'100px'}  margin={'auto'}  className={styles.Icon} >

<BsChat color='#265f98' fontSize="40px"/>

</Box>
<Text fontSize={'26px'}>Chat Now</Text>
<p>Need help or have Products Questions? <span style={{color:"#5698df"}}>Chat with an expert.</span> </p>


</Box>
<Box  margin="auto" width={'23%'} cursor={'pointer'}  >

<Box width={'100px'} height={'100px'}  margin={'auto'}  className={styles.Icon} >

<MdSupportAgent color='#265f98' fontSize="40px"/>

</Box>
<Text fontSize={'26px'}>Help Center</Text>
<p style={{fontSize:"15px"}}>For info on shipping, returns, orders and more,<span style={{color:"#5698df"}}>find answers here.</span></p>


</Box>

<Box  margin="auto" cursor={'pointer'} width={'23%'}  >

<Box width={'100px'} height={'100px'}  margin={'auto'}  className={styles.Icon} >

<SlLocationPin color='#265f98' fontSize="40px"/>

</Box>
<Text fontSize={'26px'}>Visit Our Stores</Text>
<p>Visit our <span style={{color:"#5698df"}}  > NYC store</span> for shopping. services,repairs,and more. </p>


</Box>








    </Flex>
  )
}

export default Landingd2