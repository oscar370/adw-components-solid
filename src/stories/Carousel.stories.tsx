/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Carousel,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	CarouselProvider,
} from "@/core/components/ui/carousel";
import type { Meta, StoryObj } from "storybook-solidjs-vite";

import { For } from "solid-js";
import CustomDocs from "./Carousel.mdx";

const meta = {
	component: Carousel,
	tags: ["autodocs"],
	subcomponents: {
		CarouselProvider,
		CarouselItem,
		CarouselPrevious,
		CarouselNext,
	},
	parameters: {
		docs: {
			page: CustomDocs,
		},
	},
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		length: 5,
	} as any,
	render: (args: any) => {
		const items = () =>
			Array.from({ length: args.length ?? 5 }, (_, index) => index);

		return (
			<CarouselProvider class="mx-auto w-full max-w-87">
				<Carousel>
					<For each={items()}>
						{(index) => (
							<CarouselItem>
								<div class="bg-card-background flex aspect-square h-full w-full items-center justify-center rounded-lg">
									<span class="text-4xl font-semibold">{index + 1}</span>
								</div>
							</CarouselItem>
						)}
					</For>
				</Carousel>
				<CarouselPrevious />
				<CarouselNext />
			</CarouselProvider>
		);
	},
};
