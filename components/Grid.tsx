import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data/index'



const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid className="max-w-4xl mx-auto">
            {gridItems.map(({ id, title, description, className,
                img, imgClassName, titleClassName, spareImg
            }) => (
                <BentoGridItem 
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    className={className}
                    img={img}
                    imgClassName={imgClassName}
                    titleClassName={titleClassName}
                    spareImg={spareImg}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid;

// const gridItems = [
//     {
//       id: 1,
//       title: "I prioritize client collaboration, fostering open communication ",
//       description: "",
      
//       imgClassName: "w-full h-full",
//       titleClassName: "justify-end",
//       img: "/b1.svg",
//       spareImg: "",
//     },
//     {
//       id: 2,
//       title: "I'm very flexible with time zone communications",
//       description: "",
      
//       imgClassName: "",
//       titleClassName: "justify-start",
//       img: "",
//       spareImg: "",
//     },
//     {
//       id: 3,
//       title: "My tech stack",
//       description: "I constantly try to improve",
      
//       imgClassName: "",
//       titleClassName: "justify-center",
//       img: "",
//       spareImg: "",
//     },
//     {
//       id: 4,
//       title: "Tech enthusiast with a passion for development.",
//       description: "",
      
//       imgClassName: "",
//       titleClassName: "justify-start",
//       img: "/grid.svg",
//       spareImg: "/b4.svg",
//     },
  
//     {
//       id: 5,
//       title: "Currently building a JS Animation library",
//       description: "The Inside Scoop",
      
//       imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
//       titleClassName: "justify-center md:justify-start lg:justify-center",
//       img: "/b5.svg",
//       spareImg: "/grid.svg",
//     },
//     {
//       id: 6,
//       title: "Do you want to start a project together?",
//       description: "",
      
//       imgClassName: "",
//       titleClassName: "justify-center md:max-w-full max-w-60 text-center",
//       img: "",
//       spareImg: "",
//     },
//   ];
