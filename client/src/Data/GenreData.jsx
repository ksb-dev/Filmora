// React Icons (Genre)
import { BiReset } from 'react-icons/bi'
import {
  GiPunchBlast,
  GiPistolGun,
  GiDualityMask,
  GiUfo,
  GiTank
} from 'react-icons/gi'
import { SlCompass, SlGhost, SlMusicToneAlt } from 'react-icons/sl'
import { BsCameraReels } from 'react-icons/bs'
import { TfiFaceSmile, TfiFaceSad } from 'react-icons/tfi'
import { MdOutlineFamilyRestroom } from 'react-icons/md'
import { RxMagicWand } from 'react-icons/rx'
import { BsHourglassSplit } from 'react-icons/bs'
import { IoFootstepsOutline } from 'react-icons/io5'
import { RiHeartsLine, RiKnifeBloodLine, RiCactusLine } from 'react-icons/ri'

export const genreArray = [
  {
    icon: <BiReset size={'25px'} style={{ marginRight: '0.5rem' }} />,
    icon1: <BiReset size={'20px'} style={{ marginRight: '0.5rem' }} />,
    id: 0,
    genre: 'All'
  },
  {
    icon: <GiPunchBlast size={'25px'} style={{ marginRight: '0.5rem' }} />,
    icon1: <GiPunchBlast size={'20px'} style={{ marginRight: '0.5rem' }} />,
    id: 28,
    genre: 'Action',
    url: `https://api.themoviedb.org/3/discover/movie?&api_key=${
      import.meta.env.VITE_KEY
    }`
  },
  {
    icon: <SlCompass size={'25px'} style={{ marginRight: '0.5rem' }} />,
    icon1: <SlCompass size={'20px'} style={{ marginRight: '0.5rem' }} />,
    id: 12,
    genre: 'Adventure',
    url: `https://api.themoviedb.org/3/discover/movie?&api_key=${
      import.meta.env.VITE_KEY
    }`
  },
  {
    icon: <GiDualityMask size={'25px'} style={{ marginRight: '0.5rem' }} />,
    icon1: <GiDualityMask size={'20px'} style={{ marginRight: '0.5rem' }} />,
    id: 16,
    genre: 'Animation',
    url: `https://api.themoviedb.org/3/discover/movie?&api_key=${
      import.meta.env.VITE_KEY
    }`
  },
  {
    icon: <TfiFaceSmile size={'25px'} style={{ marginRight: '0.5rem' }} />,
    icon1: <TfiFaceSmile size={'20px'} style={{ marginRight: '0.5rem' }} />,
    id: 35,
    genre: 'Comedy',
    url: `https://api.themoviedb.org/3/discover/movie?&api_key=${
      import.meta.env.VITE_KEY
    }`
  },
  {
    icon: <GiPistolGun size={'25px'} style={{ marginRight: '0.5rem' }} />,
    icon1: <GiPistolGun size={'20px'} style={{ marginRight: '0.5rem' }} />,
    id: 80,
    genre: 'Crime',
    url: `https://api.themoviedb.org/3/discover/movie?&api_key=${
      import.meta.env.VITE_KEY
    }`
  },
  {
    icon: <BsCameraReels size={'25px'} style={{ marginRight: '0.5rem' }} />,
    icon1: <BsCameraReels size={'20px'} style={{ marginRight: '0.5rem' }} />,
    id: 99,
    genre: 'Documentary',
    url: `https://api.themoviedb.org/3/discover/movie?&api_key=${
      import.meta.env.VITE_KEY
    }`
  },
  {
    icon: <TfiFaceSad size={'25px'} style={{ marginRight: '0.5rem' }} />,
    icon1: <TfiFaceSad size={'20px'} style={{ marginRight: '0.5rem' }} />,
    id: 18,
    genre: 'Drama',
    url: `https://api.themoviedb.org/3/discover/movie?&api_key=${
      import.meta.env.VITE_KEY
    }`
  },
  {
    icon: (
      <MdOutlineFamilyRestroom
        size={'25px'}
        style={{ marginRight: '0.5rem' }}
      />
    ),
    icon1: (
      <MdOutlineFamilyRestroom
        size={'20px'}
        style={{ marginRight: '0.5rem' }}
      />
    ),
    id: 10751,
    genre: 'Family',
    url: `https://api.themoviedb.org/3/discover/movie?&api_key=${
      import.meta.env.VITE_KEY
    }`
  },
  {
    icon: <RxMagicWand size={'25px'} style={{ marginRight: '0.5rem' }} />,
    icon1: <RxMagicWand size={'20px'} style={{ marginRight: '0.5rem' }} />,
    id: 14,
    genre: 'Fantasy',
    url: `https://api.themoviedb.org/3/discover/movie?&api_key=${
      import.meta.env.VITE_KEY
    }`
  },
  {
    icon: <BsHourglassSplit size={'25px'} style={{ marginRight: '0.5rem' }} />,
    icon1: <BsHourglassSplit size={'20px'} style={{ marginRight: '0.5rem' }} />,
    id: 36,
    genre: 'History',
    url: `https://api.themoviedb.org/3/discover/movie?&api_key=${
      import.meta.env.VITE_KEY
    }`
  },
  {
    icon: <SlGhost size={'25px'} style={{ marginRight: '0.5rem' }} />,
    icon1: <SlGhost size={'20px'} style={{ marginRight: '0.5rem' }} />,
    id: 27,
    genre: 'Horror',
    url: `https://api.themoviedb.org/3/discover/movie?&api_key=${
      import.meta.env.VITE_KEY
    }`
  },
  {
    icon: <SlMusicToneAlt size={'25px'} style={{ marginRight: '0.5rem' }} />,
    icon1: <SlMusicToneAlt size={'20px'} style={{ marginRight: '0.5rem' }} />,
    id: 10402,
    genre: 'Music',
    url: `https://api.themoviedb.org/3/discover/movie?&api_key=${
      import.meta.env.VITE_KEY
    }`
  },
  {
    icon: (
      <IoFootstepsOutline size={'25px'} style={{ marginRight: '0.5rem' }} />
    ),
    icon1: (
      <IoFootstepsOutline size={'20px'} style={{ marginRight: '0.5rem' }} />
    ),
    id: 9648,
    genre: 'Mystery',
    url: `https://api.themoviedb.org/3/discover/movie?&api_key=${
      import.meta.env.VITE_KEY
    }`
  },
  {
    icon: <RiHeartsLine size={'25px'} style={{ marginRight: '0.5rem' }} />,
    icon1: <RiHeartsLine size={'20px'} style={{ marginRight: '0.5rem' }} />,
    id: 10749,
    genre: 'Romance',
    url: `https://api.themoviedb.org/3/discover/movie?&api_key=${
      import.meta.env.VITE_KEY
    }`
  },
  {
    icon: <GiUfo size={'25px'} style={{ marginRight: '0.5rem' }} />,
    icon1: <GiUfo size={'20px'} style={{ marginRight: '0.5rem' }} />,
    id: 878,
    genre: 'Science Fiction',
    url: `https://api.themoviedb.org/3/discover/movie?&api_key=${
      import.meta.env.VITE_KEY
    }`
  },
  {
    icon: <RiKnifeBloodLine size={'25px'} style={{ marginRight: '0.5rem' }} />,
    icon1: <RiKnifeBloodLine size={'20px'} style={{ marginRight: '0.5rem' }} />,
    id: 53,
    genre: 'Thriller',
    url: `https://api.themoviedb.org/3/discover/movie?&api_key=${
      import.meta.env.VITE_KEY
    }`
  },
  {
    icon: <GiTank size={'25px'} style={{ marginRight: '0.5rem' }} />,
    icon1: <GiTank size={'20px'} style={{ marginRight: '0.5rem' }} />,
    id: 10752,
    genre: 'War',
    url: `https://api.themoviedb.org/3/discover/movie?&api_key=${
      import.meta.env.VITE_KEY
    }`
  },
  {
    icon: <RiCactusLine size={'25px'} style={{ marginRight: '0.5rem' }} />,
    icon1: <RiCactusLine size={'20px'} style={{ marginRight: '0.5rem' }} />,
    id: 37,
    genre: 'Western',
    url: `https://api.themoviedb.org/3/discover/movie?&api_key=${
      import.meta.env.VITE_KEY
    }`
  }
]
