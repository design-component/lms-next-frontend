'use client';
import { Avatar, Button, Form, Input, List, Modal } from 'antd';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export const NotAccSignUp = () => {
	return (
		<p className="mt-10 text-center text-sm/6 text-gray-500">
			Not a have account?{' '}
			<Link
				href={`/auth?in_page=signup`}
				className="font-semibold text-indigo-600 hover:text-indigo-500"
			>
				Sign up now
			</Link>
		</p>
	);
};

export const HaveAccLogin = () => {
	return (
		<p className="mt-10 text-center text-sm/6 text-gray-500">
			Have account?{' '}
			<Link
				href={`/auth?in_page=login`}
				className="font-semibold text-indigo-600 hover:text-indigo-500"
			>
				Log in
			</Link>
		</p>
	);
};

export const BackNavigation = () => {
	const router = useRouter();
	return (
		<Button
			onClick={() => router.back()}
			className="!absolute top-2 left-2  hidden  group-hover:inline-flex"
			icon={<ChevronLeft />}
			type="dashed"
			size="small"
		></Button>
	);
};

export const AddChild = ({
	modal,
	setModalHandler,
	add,
}: {
	modal: {
		status: boolean;
		data: any;
	};
	// eslint-disable-next-line no-unused-vars
	add: (data: any) => void;
	setModalHandler: Function;
}) => {
	type FieldType = {
		username?: string;
		email?: string;
		password?: string;
	};
	const [select, setSelect] = useState('');
	const [form] = Form.useForm<FieldType>();
	const data = [
		{
			title: 'Ant Design Title 1',
		},
		{
			title: 'Ant Design Title 2',
		},
		{
			title: 'Ant Design Title 3',
		},
	];
	const onFinish = (values: FieldType) => {
		console.log('Success:', select);
		add(select);
	};

	return (
		<>
			<Modal
				title="Add Child"
				open={modal.status}
				centered
				onOk={() =>
					setModalHandler({
						status: false,
						data: null,
					})
				}
				onCancel={() =>
					setModalHandler({
						status: false,
						data: null,
					})
				}
			>
				<Form
					initialValues={{ have_child_account: 'yes' }}
					form={form}
					name="parent-auth"
					layout="vertical"
					onFinish={onFinish}
					autoComplete="off"
					className="space-y-2"
				>
					<Form.Item<FieldType>
						label="Email"
						name="email"
						rules={[{ required: true, message: 'Please input your email!' }]}
						className="!mb-0"
					>
						<Input placeholder="Search by email" />
					</Form.Item>

					<Form.Item label={null} className="flex justify-end">
						<Button type="primary" htmlType="submit" size="small">
							Search Account
						</Button>
					</Form.Item>
					<div className="max-h-44 overflow-y-auto">
						<List
							itemLayout="horizontal"
							dataSource={data}
							renderItem={(item, index) => (
								<List.Item
									className={`${select === item.title ? 'bg-gray-100' : ''}`}
									onClick={() => {
										add(item.title);
										setSelect(item.title);
									}}
								>
									<List.Item.Meta
										avatar={
											<Avatar
												src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
											/>
										}
										title={<span>{item.title}</span>}
									/>
								</List.Item>
							)}
						/>
					</div>
				</Form>
			</Modal>
		</>
	);
};
