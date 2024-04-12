import React from 'react'
import HomePage from './Home/homepage'
import ListPage from './List/ListPage'
import HealthPage from './Health/healthpage'
import RoutinePage from './Routine/routinepage'
import FollowPage from './Follow/followpage'
import JoinPage from './Join/joinpage'
function Home() {
  return (
    <main className="main">
       <HomePage/>
       <ListPage/>
       <HealthPage/>
       <RoutinePage/>
       <FollowPage/>
       <JoinPage/>
    </main>
   

  )
}

export default Home