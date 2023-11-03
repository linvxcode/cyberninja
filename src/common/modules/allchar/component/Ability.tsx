import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import Image from "@/common/components/element/Image";

const Ability = ({ ability }: { ability: any[] }) => {
  return (
    <Accordion selectionMode="multiple" className="px-0">
     {ability.map((item, index) => (
        <AccordionItem key={index} aria-label={`Accordion ${index}`} title={item.title}>
          <div>
            <p>Type: {item.type}</p>
            <p>Description: {item.desc}</p>
            <Image src={item.icon} alt={item.title} width={400} height={400} className="w-full h-auto" />
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default Ability
