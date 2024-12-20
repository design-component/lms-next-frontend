import { Counter } from '@/store/features/counter';

export default function Home() {
	return (
		<div className="flex justify-center items-center h-screen">
			<Counter />
		</div>
	);
}
