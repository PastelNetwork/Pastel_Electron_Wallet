import React, { useState } from 'react'

const cx_tab = 'text-sm border-b px-4 pt-1 pb-3 text-gray-b0 border-gray-b0'
const cx_tab_active =
  'text-sm border-b px-4 pt-1 pb-3 text-gray-33 border-gray-33'

const ProfileRelations = (): JSX.Element => {
  const [tab, setTab] = useState('Followers')
  return (
    <div className='w-full xl:w-2/5 flex flex-col flex-grow px-4 xl:pl-10 xl:pr-0'>
      <div className='flex'>
        <div
          className={tab == 'Followers' ? cx_tab_active : cx_tab}
          onClick={() => setTab('Followers')}
        >
          Followers (235)
        </div>
        <div
          className={tab == 'Following' ? cx_tab_active : cx_tab}
          onClick={() => setTab('Following')}
        >
          Following (162)
        </div>
        <div
          className={tab == 'Mutual' ? cx_tab_active : cx_tab}
          onClick={() => setTab('Mutual')}
        >
          Mutual (73)
        </div>
      </div>
      <Followers followers={followers} />
    </div>
  )
}

export interface FollowersProps {
  followers: FollowerProps[]
}

export interface FollowerProps {
  name: string
}

const Followers = ({ followers }: FollowersProps): JSX.Element => {
  return (
    <div className='flex flex-col pt-2 pr-4'>
      {followers.map((follower: FollowerProps, index: number) => (
        <Follower {...follower} key={index} />
      ))}
    </div>
  )
}

const Follower = ({ name }: FollowerProps): JSX.Element => {
  return (
    <div className='flex items-center py-2 text-md'>
      <div className='rounded-full bg-pink-300 w-10 h-10'></div>
      <div className='flex-grow font-bold pl-4 text-gray-23'> {name} </div>
      <div className='text-gray-400 text-sm'>161 followers</div>
    </div>
  )
}

const followers = [
  {
    name: 'Salley Fadel',
    count: 161,
  },
  {
    name: 'Aniya Harber',
    count: 161,
  },
  {
    name: 'Reymundo',
    count: 161,
  },
  {
    name: 'Edwardo Bea',
    count: 161,
  },
  {
    name: 'Aiya Gerald',
    count: 161,
  },
  {
    name: 'Reymundo',
    count: 161,
  },
  {
    name: 'Aniya Harber',
    count: 161,
  },
  {
    name: 'Aniya Harber',
    count: 161,
  },
  {
    name: 'Reymundo',
    count: 161,
  },
  {
    name: 'Edwardo Bea',
    count: 161,
  },
  {
    name: 'Reymundo',
    count: 161,
  },
  {
    name: 'Sally Fadel',
    count: 161,
  },
]

export default ProfileRelations