import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import GlobalLoading from "../common/GlobalLoading";
import Footer from "../common/Footer";
import  Topbar  from "../common/Topbar";
import AuthModal from "../common/AuthModal";
import ShareModal from "../common/ShareModal"
import {useDispatch, useSelector} from "react-redux"
import { useEffect} from "react"
import { toast } from "react-toastify";
import userApi from "../../api/modules/user.api";
import favouriteApi from "../../api/modules/favourite.api"
import { setListFavourites,setUser } from "../../redux/features/userSlice";


const MainLayout = () => {
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.user)

  useEffect(() => {
    const authUser = async () => {
      const {response, err} = await userApi.getInfo();
      if(response) dispatch(setUser(response))
      if (err) dispatch(setUser(null))
    }
    authUser()
  },[dispatch])


  useEffect(() => {
    const getFavoutires = async () => {
      const {response, err} = await favouriteApi.getList()
      if(response) dispatch(setListFavourites(response))
      if(err) toast.error(err.message)
    }
    if(user) getFavoutires()
    if(!user) dispatch(setListFavourites([]))
  },[user, dispatch])




  return (
    <>
      {/*global-loading */}
      <GlobalLoading />
      {/*global-loading */}

      {/* login modal */}
      <AuthModal/>

      {/* login modal */}

      {/* share modal */}
      <ShareModal/>
      {/* share modal */}
      <Box display="flex" minHeight="100vh">
        {/*header */}
        <Topbar />
        {/*header */}

        {/*mian */}
        <Box component="main" flexGrow={1} overflow="hidden" minHeight="100vh">
          <Outlet />
        </Box>
        {/*mian */}
      </Box>
      {/*footer */}
      <Footer />
      {/*footer */}
    </>
  );
};

export default MainLayout;
