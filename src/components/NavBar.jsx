import React, { useState } from "react";
import styled from "styled-components";

import { motion } from "framer-motion";

const NavContainer = styled(motion.ul)`
  width: 100vw;
  z-index: 6;
  position: absolute;
  top: ${(props) => (props.click ? 0 : `-${props.theme.navHeight}`)};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease-in;
`;

const MenuItems = styled(motion.ul)`
  position: relative;
  height: ${(props) => props.theme.navHeight};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  list-style: none;

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  padding: 0 10rem;
`;

const MenuItem = styled(motion.li)`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};

  cursor: pointer;
`;

const MenuButton = styled.li`
  background-color: ${(props) => `rgba(${props.theme.textRgba},0.7)`};
  list-style-type: style none;
  color: ${(props) => props.theme.text};
  width: 15rem;
  height: 2.5rem;

  clip-path: polygon(0 0, 100% 0, 71% 100%, 31% 100%);

  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${(props) => props.theme.fontmd};
  font-weight: 600;
  text-transform: uppercase;

  cursor: pointer;
`;

  // const MenuButton = styled.div``;

const NavBar = () => {
  const [click, setClick] = useState(false);

  return (
    <NavContainer
      click={click}
      initial={{
        y: "-100%",
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 2,
        delay: 2,
      }}
    >
      <MenuItems
        drag="y"
        dragConstraints={{
          top: 0,
          bottom: 70,
        }}
        dragElastic={0.05}
        dragSnapToOrigin
      >
        <MenuButton onClick={() => setClick(!click)}>Menu</MenuButton>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, Y: 0 }}
        >
          Home
        </MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, Y: 0 }}
        >
          About
        </MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, Y: 0 }}
        >
          Shop
        </MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, Y: 0 }}
        >
          New Arrival
        </MenuItem>
      </MenuItems>
    </NavContainer>
  );
};

export default NavBar;
