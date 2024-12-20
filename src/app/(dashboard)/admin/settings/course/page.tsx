'use client';
import React from 'react';
import {
	AdminChapterList,
	AdminDifficultyLevelList,
	AdminGradeList,
	AdminSubjectList,
} from '@/store/features/admin';

const Page = ({ searchParams }: { searchParams: { tab: string } }) => {
	switch (searchParams.tab) {
		case 'grade':
			return <AdminGradeList />;

		case 'subject':
			return <AdminSubjectList />;

		case 'chapter':
			return <AdminChapterList />;

		case 'difficulty_level':
			return <AdminDifficultyLevelList />;

		default:
			return <div>No Data Found</div>;
	}
};

export default Page;
