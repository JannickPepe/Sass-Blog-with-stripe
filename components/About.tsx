"use client";

import React, { useState } from "react";
import useMeasure from "react-use-measure";
import {useDragControls, useMotionValue, useAnimate, motion, } from "framer-motion";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export const About = () => {
  
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-16 mb-20">

      <div className="flex mx-auto justify-center bg-green-600 hover:bg-[#8DECB4] max-w-[800px] rounded-lg">
        <div onClick={() => setOpen(true)} className="rounded space-y-2 px-6 py-6 text-white hover:text-slate-700 transition-colors hover:cursor-pointer" >
          <h3 className="text-center text-3xl font-bold">Want To Know More <span className="border-b-2 border-slate-800">About Us?</span></h3>
          <div className="hover:scale-110 transition delay-200 duration-300">
            <h4 className="text-center text-base md:text-2xl semi-bold text-slate-800 flex items-center justify-center gap-1">Tell Me a Story Journey<MdOutlineArrowRightAlt size={30} /></h4>
          </div>
        </div>
      </div> 

      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="md:grid grid-cols-2 grid-rows-1 mx-auto space-y-4 text-neutral-400">

          <div className="grid-cols-1 px-4 lg:px-10">
            <h2 className="text-3xl font-bold text-neutral-200 py-4">
              The jounrey at Tell Me a Story has been amazing, but also hard work to achieve our initial goal.
            </h2>
            <div className="max-w-[660px] space-y-2">
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
            </div>
          </div>
        

          <div className="grid-cols-1">
            <div className="relative pl-8 sm:pl-32 py-6 group">

              <div className="font-caveat font-medium text-2xl text-green-500 mb-1 sm:mb-0">
                The Idea
              </div>
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-green-700 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-bold uppercase w-20 h-6 mb-3 sm:mb-0 text-slate-500 bg-emerald-100 rounded-full">
                  May, 2020
                </time>
                <div className="text-xl font-bold textwhite">
                  How We Came Up With Tell Me a Story
                </div>
              </div>   
              <div className="text-slate-500 max-w-[600px]">
                  Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.
              </div>
            </div>

            <div className="relative pl-8 sm:pl-32 py-6 group">
              <div className="font-caveat font-medium text-2xl text-green-500 mb-1 sm:mb-0">
                The Planning
              </div>
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-green-700 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-bold uppercase w-20 h-6 mb-3 sm:mb-0 text-slate-500 bg-emerald-100 rounded-full">
                  May, 2021
                </time>
                <div className="text-xl font-bold text-white">
                  Where Even To Begin?
                </div>
              </div>
              <div className="text-slate-500 max-w-[600px]">
                Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.
              </div>
            </div>
                    
            <div className="relative pl-8 sm:pl-32 py-6 group">
              <div className="font-caveat font-medium text-2xl text-green-500 mb-1 sm:mb-0">
                The First Milestone
              </div>
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-green-700 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-bold uppercase w-20 h-6 mb-3 sm:mb-0 text-slate-500 bg-emerald-100 rounded-full">
                  May, 2022
                </time>
                <div className="text-xl font-bold text-white">
                  Our First Functional Client and Server Usercase Done!
                </div>
              </div>
              <div className="text-slate-500 max-w-[600px]">
                Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.
              </div>
            </div>
                    
            <div className="relative pl-8 sm:pl-32 py-6 group">
              <div className="font-caveat font-medium text-2xl text-green-500 mb-1 sm:mb-0">
                Into Production
              </div>
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-green-700 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-bold uppercase w-20 h-6 mb-3 sm:mb-0 text-slate-500 bg-emerald-100 rounded-full">
                  May, 2023
                </time>
                <div className="text-xl font-bold text-white">
                  Building The Infrastructur To Manange Deployment
                </div>
              </div>
              <div className="text-slate-500 max-w-[600px]">
                Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.
              </div>
            </div>
          </div>

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