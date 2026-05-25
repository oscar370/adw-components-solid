/* eslint-disable @typescript-eslint/no-explicit-any */
import { Separator } from "@/core/components/ui/separator";
import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	SidebarTrigger,
} from "@/core/components/ui/sidebar";
import { For } from "solid-js";
import type { Meta, StoryObj } from "storybook-solidjs-vite";

const meta = {
	component: Sidebar,
	tags: ["autodocs"],
	subcomponents: {
		SidebarProvider,
		SidebarHeader,
		SidebarContent,
		SidebarMenu,
		SidebarMenuItem,
		SidebarMenuButton,
		SidebarTrigger,
	},
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		startItems: [
			{ to: "/home", label: "Home" },
			{ to: "/dashboard", label: "Dashboard" },
		],
		componentsItems: [
			{ to: "/button", label: "Button" },
			{ to: "/input", label: "Input" },
		],
		pathname: "/dashboard",
	} as any,
	render: (args: any) => (
		<SidebarProvider>
			<Sidebar>
				<SidebarHeader>Sidebar</SidebarHeader>
				<SidebarContent>
					<SidebarMenu>
						<For each={args.startItems}>
							{(si: any) => (
								<SidebarMenuItem>
									<SidebarMenuButton
										isActive={si.to === args.pathname}
										as={"a"}
										href={si.to}
									>
										{si.label}
									</SidebarMenuButton>
								</SidebarMenuItem>
							)}
						</For>
					</SidebarMenu>

					<Separator />

					<SidebarMenu>
						<For each={args.componentsItems}>
							{(si: any) => (
								<SidebarMenuItem>
									<SidebarMenuButton
										isActive={si.to === args.pathname}
										as={"a"}
										href={si.to}
									>
										{si.label}
									</SidebarMenuButton>
								</SidebarMenuItem>
							)}
						</For>
					</SidebarMenu>
				</SidebarContent>
			</Sidebar>

			<main class="flex h-fit items-center gap-2">
				<SidebarTrigger />
				<p>App content</p>
			</main>
		</SidebarProvider>
	),
};
