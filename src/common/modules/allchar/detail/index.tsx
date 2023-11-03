"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Breakline from "@/common/components/element/Breakline";
import Loading from "@/common/components/element/Loading";
import Back from "@/common/components/element/Back";
import { useApexData } from "@/common/stores/ApexData";
import SectionHeading from "@/common/components/element/SectionHeading";
import Ability from "../component/Ability";


const VideoEmbed = dynamic( () => import('../component/Video'), {
  loading: () => <Loading className="mt-10 mb-10"/>
})

interface ApexProps {
  params: { nickname: string };
}

const Detail = ({ params }: ApexProps) => {
  const { data, fetchData, loading } = useApexData();
  const { nickname } = params;

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const Datas = data?.find((item: any) => item.nickname === nickname);
  const apexData = Datas;

  return (
    <div className="mt-[100px] overflow-hidden md:p-20 p-10 py-0">
      <Back href="/allcharacter" className=" w-auto">
        Back
      </Back>
      {loading ? (
        <>
          <Loading className="mb-10 mt-10" />
        </>
      ) : (
        <div className="">
          <div className=" leading-relaxed">
            <VideoEmbed Datas={Datas} />
            <h1 className="text-3xl mb-3 font-bold leading-relaxed text-neutral-100">
              {apexData?.name}
              <span> ({apexData?.nickname})</span>
            </h1>
            <Breakline className="mb-4" />
            <SectionHeading title="Ability" className=" !text-white" />
            <Breakline className="mt-4" />
            {apexData?.ability ? (
              <Ability ability={apexData.ability} />
            ) : (
              <p>No abilities available.</p>
            )}
            <Breakline className="mb-4" />
            <p className="text-white mb-20">{apexData?.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
