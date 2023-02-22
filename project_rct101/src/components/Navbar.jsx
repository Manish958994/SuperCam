import React from "react";
import {
  Box,
  Flex,
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
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  PhoneIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import img1 from "../Images/Super.png";
const Navbar = () => {


    const NAV_ITEMS = [
        {
          label: 'Products',
          children: [
            {
              label: 'Explore Design Work',
              subLabel: 'Trending Design to inspire you',
              href: '#',
            },
            {
              label: 'New & Noteworthy',
              subLabel: 'Up-and-coming Designers',
              href: '#',
            },
          ],
        },
        {
          label: 'Find Work',
          children: [
            {
              label: 'Job Board',
              subLabel: 'Find your dream design job',
              href: '#',
            },
            {
              label: 'Freelance Projects',
              subLabel: 'An exclusive list for contract work',
              href: '#',
            },
          ],
        },


        {
            label: 'Find Work',
            children: [
              {
                label: 'Job Board',
                subLabel: 'Find your dream design job',
                href: '#',
              },
              {
                label: 'Freelance Projects',
                subLabel: 'An exclusive list for contract work',
                href: '#',
              },
            ],
          },

          {
            label: 'Find Work',
            children: [
              {
                label: 'Job Board',
                subLabel: 'Find your dream design job',
                href: '#',
              },
              {
                label: 'Freelance Projects',
                subLabel: 'An exclusive list for contract work',
                href: '#',
              },
            ],
          },




        {
          label: 'Learn Design',
          href: '#',
        },
        {
          label: 'Hire Designers',
          href: '#',
        },
      ];










  return (
    <div>
      <div>
        <Box bg="#06c" w="100%" p={1} color="white">
          <div>
            <Text>BUSINESS,EDU & GOV</Text>
            <Text>ADORAMA RENTALS</Text>
            <Text>PRITIQUE</Text>
            <Text>OURBLOG</Text>
          </div>
          <div>
            <Text>
              {" "}
              <PhoneIcon /> 800.223.2500
            </Text>

            <Text> LiveChat</Text>
            <Text> Help</Text>
          </div>
        </Box>
        <Box bg="#06c" w="100%" p={6} color="white">
          <div>
            <Image src={img1} style={{ width: "7%", borderRadius: "50%" }} />

            <Input bg="white" placeholder="Search" width={600} />
          </div>
          This is the Box
        </Box>

        <div>
          <Box bg="#06c" w="100%" p={2} color="white">
            This is the Box
          </Box>
        </div>
      </div>

      <img src={img1} />
    </div>
  );
};

export default Navbar;
