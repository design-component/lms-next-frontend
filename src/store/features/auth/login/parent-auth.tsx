'use client';

import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import React from 'react';
import { BackNavigation, NotAccSignUp } from '../_ctx';
import { useRouter, useSearchParams } from 'next/navigation';

export function ParentAuth() {
	const searchParams = useSearchParams();
	const router = useRouter();
	type FieldType = {
		email?: string;
		password?: string;
	};

	const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
		console.log('Success:', values);
		router.push('/auth?in_page=otp&from=' + searchParams.get('from'));
	};

	return (
		<div className="flex min-h-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 ">
			<div className="border p-8 rounded-lg max-w-lg w-full mx-auto relative group">
				<BackNavigation />
				<h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
					Sign in to your account
				</h2>
				<div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
					<Form
						name="parent-auth"
						layout="vertical"
						onFinish={onFinish}
						autoComplete="off"
						className="space-y-3"
					>
						<Form.Item<FieldType>
							label="Email"
							name="email"
							rules={[
								{
									required: true,
									message: 'Please input your email!',
									type: 'email',
								},
							]}
							className="!mb-0"
						>
							<Input type="email" placeholder="Enter your email" />
						</Form.Item>

						<Form.Item<FieldType>
							label="Password"
							name="password"
							rules={[
								{ required: true, message: 'Please input your password!' },
							]}
							className="!mb-0"
						>
							<Input.Password />
						</Form.Item>

						<div className="flex justify-end">
							<Link
								className="inline-block"
								href={`/auth?in_page=forget&from=${searchParams.get('from')}`}
							>
								Forget Password
							</Link>
						</div>

						<Form.Item label={null}>
							<Button
								type="primary"
								htmlType="submit"
								className="w-full"
								size="large"
							>
								Submit
							</Button>
						</Form.Item>
					</Form>

					<NotAccSignUp />
				</div>
			</div>
		</div>
	);
}
