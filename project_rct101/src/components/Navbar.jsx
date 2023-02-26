import React from "react";
import {
  Box,
  Flex,
VStack,
  Input,
  Image,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Center,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  PhoneIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChatIcon,InfoOutlineIcon,
  
} from "@chakra-ui/icons";
import { BiCart } from "react-icons/bi";
import img1 from "../Images/Super.png";
import { IoChat } from 'react-icons/io';
import styles from "./Navbar.module.css"
const Navbar = () => {



  return (
    <Box>
     

<Stack bg={'black'} width="100%" height={'28px'} direction="row" alignItems={'center'} justifyContent="center">
<Text color={"yellow.200"}>UNLOCK EXCLUSIVE OFFERS</Text>
<p style={{color:"white",fontSize:"13px" , marginTop:"3px"}} >when you sign up for e-mail & texts.</p>
<Link  color={'blue.200'} fontSize={'14px'}>SIGN UP NOW<span style={{fontSize:"20px"}}><ChevronRightIcon /></span></Link>
</Stack>

<Stack bg={'#004184'} spacing={"5px"} width="100%" height={'28px'} fontSize={'13px'} direction="row" alignItems={'center'} color={'white'} justifyContent={'space-between'} >
  
<Flex display={'flex'} margin={'15px'} textDecoration={"none"}>
  <Link textDecoration={'none'}marginRight={'15px'}>BUSINESS,EDU & GOV</Link>
  <Link textDecoration={'none'}marginRight={'15px'}>ADORAMA RENTALS</Link>
  <Link textDecoration={'none'}marginRight={'15px'}>PRINTIQUE</Link>
  <Link textDecoration={'none'}marginRight={'15px'}>OUR BLOG</Link>
  
</Flex>
<Flex margin={'15px'}>
  <Link textDecoration={'none'} marginRight={'15px'}> <PhoneIcon />  800.223.2500</Link>
  <Link textDecoration={'none'} marginRight={'15px'}><ChatIcon/> Live Chat</Link>
  <Link textDecoration={'none'} marginRight={'25px'}><InfoOutlineIcon/> Help <ChevronDownIcon/></Link>
</Flex>
</Stack>


<Flex justifyContent={'space-between'} bg="#003473">
  <Image src={img1} width="100px"   border={'1px solid'} borderRadius={'50%'} marginLeft={'50px'} />
  <Flex justifyContent={'center'} justify={'center'} alignItems={"Center"}>
 
    <Input  placeholder="Search" className={styles.inp}/>
  <Box color={'white'}>
    <p>Sign in</p>
    <Text >My Account</Text>
  </Box>
<BiCart color="white" className={styles.cart} />
  
  </Flex>
</Flex>
<Stack bg={'#0051a3'} spacing={"5px"} width="100%" height={'28px'} fontSize={'13px'} direction="row" alignItems={'center'} color={'white'} justifyContent={'space-between'}>
  <Flex>
<Link paddingLeft={'15px'} marginRight={'15px'}>Products <ChevronDownIcon/></Link>
<Link marginRight={'15px'}>Brands<ChevronDownIcon/></Link>
<Link marginRight={'15px'}>Used<ChevronDownIcon/></Link>
<Link marginRight={'15px'}>Deals<ChevronDownIcon/></Link>
  </Flex>
<Flex>
<Link marginRight={'15px'}>Deal of the Day</Link>
<Link marginRight={'15px'}>Adorama Credit Card</Link>
<Link marginRight={'15px'}>VIP Rewards</Link>
<Link marginRight={'15px'}>Gift Cards</Link>
<Link marginRight={'15px'}>Students</Link>
<Link marginRight={'15px'}>#CreateNoMatterWhat</Link>

</Flex>



</Stack>

    </Box>
  );
};

export default Navbar;
