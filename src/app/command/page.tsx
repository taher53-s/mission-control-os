import type { Metadata } from 'next';
import styles from './command.module.css';
import { CommandPalette } from '@/features/command/components/CommandPalette';

export const metadata: Metadata = {
    title: 'Command — Mission Control OS',
    description: 'AI command interface for Mission Control OS',
};

export default function CommandPage() {
    return (
        <main className={styles.container}>
            <CommandPalette />
        </main>
    );
}
