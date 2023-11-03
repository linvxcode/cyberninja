import Detail from '@/common/modules/allchar/detail';
import React from 'react'

interface allcharacter {
  params: { nickname: string };
}

const page = ({params}: allcharacter) => {
const {nickname} = params;


  return (
    <div>
      <Detail params={{nickname}} />
    </div>
  )
}

export default page
