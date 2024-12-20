'use client';

import type { FormProps } from 'antd';
import { Avatar, Button, Form, Input, List, Modal, Radio } from 'antd';
import Link from 'next/link';
import React from 'react';
import { AddChild, BackNavigation, HaveAccLogin } from '../_ctx';
import { useRouter, useSearchParams } from 'next/navigation';
import { X } from 'lucide-react';
type FieldType = {
	have_child_account?: 'yes' | 'no';
	email?: string;
	password?: string;
};

export function ParentAddChild() {
	const searchParams = useSearchParams();
	const [modal, setModal] = React.useState<{ data: any; status: boolean }>({
		data: null,
		status: false,
	});
	const [form] = Form.useForm();

	const watch = Form.useWatch('voice_mail', form);
	const have_child_account = Form.useWatch('have_child_account', form);
	console.log(have_child_account);

	const router = useRouter();

	const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
		console.log('Success:', values);
		router.push('/auth?in_page=otp&from=' + searchParams.get('from'));
	};

	return (
		<div className="flex min-h-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 ">
			<div className="border p-8 rounded-lg max-w-lg w-full mx-auto relative group">
				<BackNavigation />
				<h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
					Account Invitation
				</h2>
				<div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
					<Form
						initialValues={{ have_child_account: 'yes' }}
						form={form}
						name="parent-auth"
						layout="vertical"
						onFinish={onFinish}
						autoComplete="off"
						className="space-y-3"
					>
						<Form.Item<FieldType>
							name="have_child_account"
							label="Does child already have an account? "
						>
							<Radio.Group>
								<Radio value="yes"> Yes </Radio>
								<Radio value="no"> No </Radio>
							</Radio.Group>
						</Form.Item>
						{have_child_account === 'yes' && (
							<Form.List name="voice_mail">
								{(fields, { add, remove }) => (
									<>
										<p className="db-label-1">Add Your Child here</p>
										{fields.map(({ key, name }) => {
											const user = watch?.[name];

											return (
												<div
													key={key}
													className="flex justify-between items-center gap-2 "
												>
													<span>{user}</span>

													<Button
														size="small"
														danger
														type="dashed"
														icon={<X />}
														onClick={() => {
															remove(name);
														}}
													></Button>
												</div>
											);
										})}

										<div className="text-right">
											<Button
												type="primary"
												size="small"
												className="!w-auto"
												onClick={() => setModal({ data: {}, status: true })}
												block
											>
												Add New
											</Button>

											<AddChild
												modal={modal}
												setModalHandler={setModal}
												add={add}
											/>
										</div>
									</>
								)}
							</Form.List>
						)}

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
				</div>
			</div>
		</div>
	);
}
