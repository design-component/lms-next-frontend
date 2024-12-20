import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { BackNavigation, NotAccSignUp } from '../_ctx';
import { useRouter, useSearchParams } from 'next/navigation';

export function Otp() {
	const router = useRouter();
	const searchParams = useSearchParams();

	type FieldType = {
		new_password?: string;
		old_password?: string;
		remember?: string;
	};

	const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
		console.log('Success:', values);
		if (searchParams.get('from') === 'parent_login') {
			router.push('/parent');
		} else if (searchParams.get('from') === 'child_login') {
			router.push('/user');
		}
	};

	return (
		<div className="flex min-h-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 ">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm border p-5 rounded-lg relative group">
				<BackNavigation />

				<h2 className="modal_title mb-3">Check your mail for a code</h2>
				<p className="modal_sub_title">
					We’ve sent a code to Johndoe@gmail.com Please enter it in the next
					step to continue. If you don’t see the email, be sure to check your
					spam or junk folder.
				</p>
				<div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
					<Form
						name="dependencies"
						autoComplete="off"
						layout="vertical"
						onFinish={onFinish}
						className="space-y-3"
					>
						<Form.Item
							label={null}
							className="flex justify-center"
							hasFeedback
							validateStatus="success"
						>
							<Input.OTP size="large" length={4} />
						</Form.Item>

						<Form.Item className="!mb-0" label={null}>
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
