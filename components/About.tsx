"use client";

import React, { useState } from "react";
import useMeasure from "react-use-measure";
import {useDragControls, useMotionValue, useAnimate, motion, } from "framer-motion";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export const About = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="mt-16 mb-20">

      <div className="flex mx-auto justify-center bg-green-700 hover:bg-green-600 max-w-[800px] rounded-md">
        <div onClick={() => setOpen(true)} className="rounded space-y-2 px-6 py-6 text-white transition-colors hover:cursor-pointer" >
          <h3 className="text-center text-3xl font-bold">Want To Know More <span className="border-b-2 border-slate-800">About Us?</span></h3>
          <div className="flex items-center justify-center gap-1 hover:scale-110 transition delay-200 duration-300">
            <h4 className="text-center text-2xl semi-bold">Tell Me a Story Journey</h4>
            <MdOutlineArrowRightAlt size={30} />
          </div>
        </div>
      </div> 

      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
          <h2 className="text-4xl font-bold text-neutral-200">
            Drag the handle at the top of this modal downwards 100px to close it
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            laboriosam quos deleniti veniam est culpa quis nihil enim suscipit
            nulla aliquid iure optio quaerat deserunt, molestias quasi facere
            aut quidem reprehenderit maiores.
          </p>
          <p>
            Laudantium corrupti neque rerum labore tempore sapiente. Quos, nobis
            dolores. Esse fuga, cupiditate rerum soluta magni numquam nemo
            aliquid voluptate similique deserunt!
          </p>
          <p>
            Rerum inventore provident laboriosam quo facilis nisi voluptatem
            quam maxime pariatur. Velit reiciendis quasi sit magni numquam quos
            itaque ratione, fugit adipisci atque est, tenetur officiis explicabo
            id molestiae aperiam? Expedita quidem inventore magni? Doloremque
            architecto mollitia, dicta, fugit minima velit explicabo sapiente
            beatae fugiat accusamus voluptatum, error voluptatem ab asperiores
            quo modi possimus.
          </p>
          <p>
            Sit laborum molestias ex quisquam molestiae cum fugiat praesentium!
            Consequatur excepturi quod nemo harum laudantium accusantium nisi
            odio?
          </p>
          <p>
            Deleniti, animi maiores officiis quos eaque neque voluptas omnis
            quia error a dolores, pariatur ad obcaecati, vitae nisi perspiciatis
            fugiat sapiente accusantium. Magnam, a nihil soluta eos vero illo ab
            sequi, dolores culpa, quia hic?
          </p>
        </div>
      </DragCloseDrawer>
    </div>
  );
};

const DragCloseDrawer = ({ open, setOpen, children }: {open:any, setOpen:any, children:any}) => {
  
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};