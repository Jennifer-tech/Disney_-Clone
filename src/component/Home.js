import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import db from "./firebase";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import { getFirestore, collection, getDocs, onSnapshot, doc, getDocFromServer } from 'firebase/firestore';
import { async } from '@firebase/util';

function Home() {

  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  // const getMovies = async(db) => {
    async function getMovies(db){
    const moviesCol = collection(db, "movies");
    // console.log(moviesCol);
    const movieSnapshot = await getDocs(moviesCol);
    // console.log(movieSnapshot);
    const moviesList = movieSnapshot.docs.map(doc => doc.data());
    return moviesList;
    // console.log(moviesList);
  }
  



  useEffect(() => {

    const _setMovies = async() => {
      const _movies = await getMovies(db);
      console.log(_movies)
      setMovies(_movies)
    }
    _setMovies()

    const colRef = collection(db, "movies")
    const unsub = onSnapshot(colRef)
    console.log(unsub)
    // dispatch(setMovies(moviesList));
    
    // return () => {
  
      // }
  }, [])

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
      <Wrap>
        <img src="/images/home-background.png" alt="home-background"/>
      </Wrap>
      
    </Container>
  )
}

export default Home

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  overflow-x: hidden;
  ${'' /* position: relative; */}

  ${'' /* &:before {
    background: url("/images/home-background.png") center center / cover no-repeat fixed; 
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    botttom: 0;
    z-index: -1;

  }  */}
` 
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  position: fixed;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  right: 0;
  botttom: 0;
  z-index: -1;
  
`