import React, { useEffect } from 'react';

//*components

import Toolbar from 'components/Toolbar';

//*screens

import Home from 'screen/Home/Home';
//*library
import { createGlobalStyle } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
//*services (api hooks from rtk query)

import { useGetAllPostQuery } from 'redux/api/post/postApi';
import { cleanState, setPostsData } from 'redux/features/postSlice';

interface PostI {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  
  :root{
    font-size:10px;
    --primary-green: green;
    --primary-white: white;
    --primary-black: black;
    --primary-grey: grey;
    --primary-navy: navy;
    --secondary-lightsky: cyan;
  }
`;

const App: React.FC = (): React.ReactElement => {
  //!Using State Of Redux_Toolkit with useSelecctor
  const postStateData = useSelector((state: any) => state.userPosts.postsD);
  const dispatch = useDispatch();

  const { isError, isFetching, isLoading, isSuccess, data }: any =
    //@ts-ignore
    useGetAllPostQuery();
  useEffect(() => {
    if (isSuccess === true && postStateData === null) {
      dispatch(
        setPostsData({
          newPostFromClient: data,
        })
      );
    }
  }, [isSuccess]);

  if (isLoading) {
    return (
      <div>
        <h1>LOADING..</h1>
      </div>
    );
  }

  if (postStateData !== null) {
    return (
      <>
        <GlobalStyle />
        <Toolbar
          logo="https://www.lftechnology.com/wp-content/themes/Froggy/img/logo_leapfrog.svg"
          links={[
            { name: 'What We Do', link: '#' },
            { name: 'Services', link: '#' },
            { name: 'Insights', link: '#' },
            { name: 'Resources', link: '#' },
            { name: 'About Us', link: '#' },
          ]}
        />
        <Home />

        {(() => {
          return postStateData.map(
            (post: PostI, index: number): JSX.Element => {
              return <div key={index}>{post.title}</div>;
            }
          );
        })()}
      </>
    );
  } else {
    return <h1>error</h1>;
  }
};

export default App;

