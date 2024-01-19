import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { url } from "inspector"

import {motion} from "framer-motion"

type IProject = {
    title?: string,
    imgSrc: string,
    reference: string,
}

const Project = ({title, imgSrc, reference}: IProject) => {
  return (
    <>
    <Link href={reference} target="_blank" className="flex flex-col gap-2">
        <motion.h2 
        className="font-thin text-lg md:text-3xl text-black text-center w-full uppercase"
        animate={{
            scale: [1, 1.01, 1.01, 1, 1],
          }}
        transition={{ repeat: Infinity, duration: 2 }}
        >
            {title}
        </motion.h2>
        <Card>
            <CardContent className={`bg-${imgSrc} bg-cover border-4 border-black h-[500px]`}>
            </CardContent>
        </Card>
    </Link>
    </>
    )
}

export default Project