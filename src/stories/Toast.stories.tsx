/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/core/components/ui/button";
import { Toaster } from "@/core/components/ui/toast";
import { toast } from "solid-sonner";
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import CustomDocs from "./Toast.mdx";

const meta = {
	component: Toaster,
	tags: ["autodocs"],
	parameters: {
		docs: {
			page: CustomDocs,
		},
	},
} satisfies Meta<typeof Toaster>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		message: "Toast description",
	} as any,
	render: (args: any) => (
		<div>
			<DefaultContent message={args.message} />
			<Toaster />
		</div>
	),
};

function DefaultContent(props: { message: string }) {
	return <Button onClick={() => toast(props.message)}>Trigger toast</Button>;
}

export const Success: Story = {
	args: {
		message: "Toast description",
	} as any,
	render: (args: any) => (
		<div>
			<SuccessContent message={args.message} />
			<Toaster />
		</div>
	),
};

function SuccessContent(props: { message: string }) {
	return (
		<Button onClick={() => toast.success(props.message)}>Trigger toast</Button>
	);
}

export const Warning: Story = {
	args: {
		message: "Toast description",
	} as any,
	render: (args: any) => (
		<div>
			<WarningContent message={args.message} />
			<Toaster />
		</div>
	),
};

function WarningContent(props: { message: string }) {
	return (
		<Button onClick={() => toast.warning(props.message)}>Trigger toast</Button>
	);
}

export const Info: Story = {
	args: {
		message: "Toast description",
	} as any,
	render: (args: any) => (
		<div>
			<InfoContent message={args.message} />
			<Toaster />
		</div>
	),
};

function InfoContent(props: { message: string }) {
	return (
		<Button onClick={() => toast.info(props.message)}>Trigger toast</Button>
	);
}

export const Error: Story = {
	args: {
		message: "Toast description",
	} as any,
	render: (args: any) => (
		<div>
			<ErrorContent message={args.message} />
			<Toaster />
		</div>
	),
};

function ErrorContent(props: { message: string }) {
	return (
		<Button onClick={() => toast.error(props.message)}>Trigger toast</Button>
	);
}

export const Loading: Story = {
	args: {
		message: "Toast description",
	} as any,
	render: (args: any) => (
		<div>
			<LoadingContent message={args.message} />
			<Toaster />
		</div>
	),
};

function LoadingContent(props: { message: string }) {
	return (
		<Button onClick={() => toast.loading(props.message)}>Trigger toast</Button>
	);
}
