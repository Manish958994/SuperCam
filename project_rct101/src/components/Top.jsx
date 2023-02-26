import React, { useEffect, useState } from 'react'
import {Box ,Flex,Text,Image} from '@chakra-ui/react'
import styles from "./Top.module.css"
const Top = () => {
    const [data , setData] = useState([])

const FetchData = async()=>{

try {
    const res = await fetch(`https://dummyjson.com/products?limit=5&page=1`)
    const da = await res.json()
    console.log(da.products)
setData(da.products)

} catch (error) {
    console.log("errr")
}
}

useEffect(()=>{
FetchData()
},[])


console.log(data)

  return (
    <Box bg={'#003773'} padding={'10px'} paddingTop={'20px'}>

<Text color={'white'} fontSize={'35px'} >OUR TOP DEALS</Text>
<Flex  className={styles.flx}>
{data.map((el)=>(
    <Box key={el.id} className={styles.box}>
<Image src={el.thumbnail} width={'140px'} className={styles.datap} />
<br />
<br />
<Text color={'blue.500'}>Name - {el.title}</Text>
<p>Rating - {el.rating}</p>
<p>Price : ${el.price}</p>
<p>{el.description}</p>
    </Box>
))}
</Flex>







    </Box>
  )
}

export default Top