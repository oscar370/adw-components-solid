import { Button } from "@/core/components/ui/button";
import { HeaderBar } from "@/core/components/ui/header-bar";
import type { Meta, StoryObj } from "storybook-solidjs-vite";

import { X } from "lucide-solid";

const meta = {
	component: HeaderBar,
	tags: ["autodocs"],
} satisfies Meta<typeof HeaderBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		left: <Left />,
		center: <Center />,
		right: <Rigth />,
	},
};

export const Flat: Story = {
	args: {
		left: <Left />,
		center: <Center />,
		right: <Rigth />,
		variant: "flat",
	},
};

function Left() {
	return <Button>Action</Button>;
}

function Center() {
	return <h1 class="text-center font-bold">Title</h1>;
}

function Rigth() {
	return (
		<Button aria-label="Close window" class="size-6 min-h-0 rounded-full px-1">
			<X />
		</Button>
	);
}
