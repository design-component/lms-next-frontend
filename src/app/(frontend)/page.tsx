'use client';
import { ThemeToggle } from '@/components/basic';
import { toast } from '@/lib';
import { Counter } from '@/store/features/counter';
import Link from 'next/link';

export default function Home() {
	return (
		<div className="flex justify-center items-center h-screen">
			<ThemeToggle />
			<Counter />
			<div>
				<Link href="/auth">Auth</Link>
				<br />
				<button onClick={() => toast({ message: 'Success' })}>
					notification
				</button>
			</div>
		</div>
	);
}
