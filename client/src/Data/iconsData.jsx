import React from 'react'

// Recat Icons
import {
  BsSun,
  BsMoonStars,
  BsEye,
  BsEyeSlash,
  BsCheck2Circle
} from 'react-icons/bs'
import {
  BiSearch,
  BiLogInCircle,
  BiLogOutCircle,
  BiUserCircle,
  BiArrowBack
} from 'react-icons/bi'
import { GiFilmSpool } from 'react-icons/gi'
import {
  MdOutlineClose,
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
  MdOutlineMonitor
} from 'react-icons/md'
import { TfiMenu } from 'react-icons/tfi'
import { ImFilm } from 'react-icons/im'
import { RiStarFill } from 'react-icons/ri'
import { GoHome } from 'react-icons/go'

export const iconsData = {
  sunIcon: <BsSun size={'20px'} />,
  moonIcon: <BsMoonStars size={'20px'} />,
  searchIcon: <BiSearch size={'20px'} />,
  login: <BiLogInCircle size={'20px'} />,
  logout: <BiLogOutCircle size={'20px'} style={{ marginRight: '0.25rem' }} />,
  user: <BiUserCircle size={'20px'} />,
  user1: <BiUserCircle size={'20px'} style={{ marginRight: '0.25rem' }} />,
  close: <MdOutlineClose size={'20px'} />,
  close1: <MdOutlineClose size={'25px'} />,
  film: <GiFilmSpool size={'40px'} />,
  movie: (
    <ImFilm size={'20px'} style={{ marginRight: '0.25rem', color: '#fff' }} />
  ),
  tv: (
    <MdOutlineMonitor
      size={'20px'}
      style={{ marginRight: '0.25rem', color: '#fff' }}
    />
  ),
  movie1: (
    <ImFilm size={'20px'} style={{ marginRight: '0.5rem', color: '#fff' }} />
  ),
  tv1: (
    <MdOutlineMonitor
      size={'20px'}
      style={{ marginRight: '0.5rem', color: '#fff' }}
    />
  ),
  star: <RiStarFill size={'20px'} />,
  star1: <RiStarFill size={'20px'} style={{ marginRight: '0.25rem' }} />,
  next: <MdOutlineArrowForwardIos size={'20px'} />,
  prev: <MdOutlineArrowBackIosNew size={'20px'} />,
  menu: <TfiMenu size={'20px'} />,
  back: <BiArrowBack size={'20px'} style={{ marginRight: '0.5rem' }} />,
  eyeOpen: <BsEye />,
  eyeClose: <BsEyeSlash />,
  home: <GoHome size={'20px'} />,
  watchlist: <BsCheck2Circle size={'20px'} style={{ marginRight: '0.25rem' }} />
}
