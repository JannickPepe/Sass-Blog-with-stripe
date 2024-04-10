import { icons } from "@/lib/icon";
import React from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import CopyButton from "./CopyButton";
import "highlight.js/styles/atom-one-dark.min.css";
import { cn } from "@/lib/utils";
import { PiTerminalThin } from "react-icons/pi";


export default function MarkdownPreview({content, className = "sm:p-6", } : {content: string; className?: string;}) {

	return (
		<Markdown className={cn("dark:text-gray-200 space-y-6", className)}
			rehypePlugins={[rehypeHighlight]}
			components={{
				h1: ({ node, ...props }) => {
					return <h1 {...props} className="text-3xl font-bold" />;
				},
				h2: ({ node, ...props }) => {
					return (
						<h1
							{...props}
							className="text-2xl font-bold mt-10 mb-10"
						/>
					);
				},
				h3: ({ node, ...props }) => {
					return (
						<h1
							{...props}
							className="text-xl font-bold mt-10 mb-10"
						/>
					);
				},
				code: ({ node, className, children, ...props }) => {

                    // setup the correnct language usage for match
					const match = /language-(\w+)/.exec(className || "");
                    //
					const id = (Math.floor(Math.random() * 100) + 1).toString();

					if (match?.length) {
                        // default icon
						let Icon = PiTerminalThin;
						const isMatch = icons.hasOwnProperty(match[1]);
                        // go through the icons for each instances in the array
						if (isMatch) {
							Icon = icons[match[1] as keyof typeof icons];
						}

						return (
							<div className=" bg-graident-dark text-gray-300 border-[0.5px] rounded-md border-zinc-500">
								<div className="flex items-center justify-between px-5 py-2 border-b-[0.5px] border-zinc-500">
									<div className="flex items-center gap-2">
										<Icon />
										<p className="text-sm text-gray-400">
											{/* @ts-ignore  */}
											{node?.data?.meta}
										</p>
									</div>
                                    {/* pass the id from copyButton so it knows which icon for the state */}
									<CopyButton id={id} />
								</div>
								<div className="overflow-x-auto w-full">
                                    {/* pass the id from copyButton so it knows which icon for the state  for each children*/}
									<div className="p-5" id={id}>
										{children}
									</div>
								</div>
							</div>
						);
					} else {
						return (
							<code className="text-lg break-words bg-zinc-700 px-1 rounded-sm" {...props} >
								{children}
							</code>
						);
					}
				},
			}}
		>
			{content}
		</Markdown>
	);
}