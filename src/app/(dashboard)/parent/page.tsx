import { StudyGuideForm } from '@/store/features/study-guide';
import React from 'react';

export default function Page() {
	return (
		<div className="flex max-w-7xl min-h-screen justify-center items-center mx-auto">
			<div className="flex w-full items-stretch">
				<div className="flex-1 ">
					<StudyGuideForm />
				</div>
				<div className="flex-1 ">
					<div>sdf</div>
				</div>
			</div>
		</div>
	);
}
