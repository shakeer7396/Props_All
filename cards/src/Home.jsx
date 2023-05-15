import React from 'react';
import Sdata from "./Sdata"
import Card from './Card';


const Home = () => {
  return (
    <div>
        <h1 className='heading_style'>List of top 5 Netflix Series in 2020</h1>
      {Sdata.map((val,index)=>{
        console.log(index)
        return(
            <Card key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.links} />
        )
      })}
    </div>
  )
}

export default Home