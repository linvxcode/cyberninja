import Image from '@/common/components/element/Image'
import React from 'react'

const MainImg = () => {
  return (
    <div className="flex flex-wrap flex-row justify-center h-auto max-lg:w-auto  top-[70px] relative max-2xl:right-0 max-xl:ml-[-200px] max-2xl:ml-[-90px]">
    <Image
      src="/img/image11.png"
      className=" h-[610px] xl:h-[600px] md:object-contain object-cover"
      alt="Valhalenn"
      priority
      width={1130}
      height={942}
    />
  </div>
  )
}

export default MainImg
