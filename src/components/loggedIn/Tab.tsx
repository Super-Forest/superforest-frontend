import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import tw from 'twin.macro';
import { mainTabItems } from 'constant';
import { NavLink, useLocation } from 'react-router-dom';
import { capitalize } from 'lib/utils';

const tabContainer = tw`
  flex
  md:w-650px
  w-full
  mx-auto
  px-5
  bg-white
`;

const tabItem = tw`
  flex
  items-center
  justify-center
  flex-1
`;

const tabLink = tw`
  flex
  items-center
  justify-center
  flex-1
  relative
  h-16
  font-medium
  text-black
`;

const seletedTabItem = css`
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 80%;
    height: 5px;
    background-color: black;
  }
`;

const Tab = () => {
  const { search } = useLocation();
  const [selected, setSelected] = useState('today');
  useEffect(() => {
    const tab = new URLSearchParams(search).get('tab');
    if (!tab || !mainTabItems.includes(capitalize(tab))) {
      setSelected('today');
      return;
    }
    setSelected(tab.toLowerCase());
  }, [search]);

  return (
    <div>
      <ul css={tabContainer}>
        {mainTabItems.map((item, idx) => (
          <li css={tabItem} key={idx}>
            <NavLink
              css={[tabLink, selected === item.toLowerCase() && seletedTabItem]}
              to={`?tab=${item.toLowerCase()}`}
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tab;
