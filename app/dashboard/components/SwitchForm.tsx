"use client";

import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/use-toast";
import { ChangeEvent } from "react";


export default function SwitchForm({checked, onToggle, name }: {checked: boolean; onToggle: () => Promise<string>; name:string; }) {

	const onSubmit = async (e: any) => {
		e.preventDefault();

		const { error } = JSON.parse(await onToggle());
        
		if(error?.message) {

			toast({
				title: "Failed to update Toggle!!" + name,
				description: (
					<pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
						<code className="text-white">{error.message}</code>
					</pre>
				),
			});
		} else {
			toast({
				title: "Succesfully updated" + name,
			});
		}
	};


	return (
		<form onSubmit={onSubmit}>
			<Switch type="submit" checked={checked} className="bg-green-500" />
		</form>
	);

};