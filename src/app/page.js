"use client";
import React, { useState, useRef} from 'react';
import Header from '../components/layout/header/header';
import SideBar from '../components/layout/sideBar/sideBar';
import Main from '../components/layout/home/home';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function Home() {
  const [close, setClose] = useState(false);

  const queryClientRef = useRef();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 30000, // Set your desired staleTime in milliseconds (e.g., 1 minute)
        },
      },
    });;
  }

  return (

        <>
        <QueryClientProvider client={queryClientRef.current}>
          <div className="main-wrapper">
           <Header />
            <div className="content-wrapper" >
            <SideBar close={close}  setClose = {setClose}/>
            <Main close={close}  setClose = {setClose}/>       
            </div>
          </div>
          </QueryClientProvider>
        </>
      );
}