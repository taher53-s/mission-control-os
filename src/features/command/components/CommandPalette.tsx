'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CommandPalette.module.css';

interface CommandItem {
    id: string;
    label: string;
    category: string;
    shortcut?: string;
    icon: string;
}

const defaultCommands: CommandItem[] = [
    { id: 'nav-dashboard', label: 'Go to Dashboard', category: 'Navigation', icon: '◈', shortcut: '⌘D' },
    { id: 'nav-tasks', label: 'Go to Tasks', category: 'Navigation', icon: '☐', shortcut: '⌘T' },
    { id: 'nav-projects', label: 'Go to Projects', category: 'Navigation', icon: '◇', shortcut: '⌘P' },
    { id: 'nav-gym', label: 'Go to Performance', category: 'Navigation', icon: '▲' },
    { id: 'nav-graph', label: 'Go to Knowledge Graph', category: 'Navigation', icon: '◎' },
    { id: 'nav-insights', label: 'Go to Insights', category: 'Navigation', icon: '✦' },
    { id: 'action-new-task', label: 'Create New Task', category: 'Actions', icon: '＋', shortcut: '⌘N' },
    { id: 'action-new-project', label: 'Create New Project', category: 'Actions', icon: '＋' },
    { id: 'action-log-workout', label: 'Log Workout', category: 'Actions', icon: '▲' },
    { id: 'action-log-meal', label: 'Log Meal', category: 'Actions', icon: '◉' },
    { id: 'ai-help', label: 'Ask AI Assistant', category: 'AI', icon: '✦', shortcut: '⌘⇧A' },
    { id: 'ai-analyze', label: 'Analyze Patterns', category: 'AI', icon: '◎' },
    { id: 'settings', label: 'Open Settings', category: 'System', icon: '⚙', shortcut: '⌘,' },
];

export function CommandPalette() {
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const filteredCommands = defaultCommands.filter(
        (cmd) =>
            cmd.label.toLowerCase().includes(query.toLowerCase()) ||
            cmd.category.toLowerCase().includes(query.toLowerCase()),
    );

    const categories = Array.from(new Set(filteredCommands.map((cmd) => cmd.category)));

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    setSelectedIndex((prev) => Math.min(prev + 1, filteredCommands.length - 1));
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    setSelectedIndex((prev) => Math.max(prev - 1, 0));
                    break;
                case 'Enter':
                    e.preventDefault();
                    // TODO: Execute command
                    break;
            }
        },
        [filteredCommands.length],
    );

    useEffect(() => {
        setSelectedIndex(0);
    }, [query]);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    let flatIndex = 0;

    return (
        <motion.div
            className={styles.palette}
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className={styles.inputWrapper}>
                <span className={styles.searchIcon}>⌘</span>
                <input
                    ref={inputRef}
                    type="text"
                    className={styles.input}
                    placeholder="Type a command or search…"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    spellCheck={false}
                    autoComplete="off"
                />
                <kbd className={styles.escKey}>esc</kbd>
            </div>

            <div className={styles.results}>
                <AnimatePresence mode="popLayout">
                    {categories.map((category) => (
                        <div key={category} className={styles.category}>
                            <span className={styles.categoryLabel}>{category}</span>
                            {filteredCommands
                                .filter((cmd) => cmd.category === category)
                                .map((cmd) => {
                                    const currentIndex = flatIndex++;
                                    const isSelected = currentIndex === selectedIndex;
                                    return (
                                        <motion.button
                                            key={cmd.id}
                                            className={`${styles.item} ${isSelected ? styles.itemSelected : ''}`}
                                            type="button"
                                            layout
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.15 }}
                                            onMouseEnter={() => setSelectedIndex(currentIndex)}
                                        >
                                            <span className={styles.itemIcon}>{cmd.icon}</span>
                                            <span className={styles.itemLabel}>{cmd.label}</span>
                                            {cmd.shortcut && (
                                                <kbd className={styles.shortcut}>{cmd.shortcut}</kbd>
                                            )}
                                        </motion.button>
                                    );
                                })}
                        </div>
                    ))}
                </AnimatePresence>

                {filteredCommands.length === 0 && (
                    <div className={styles.empty}>
                        <p>No commands found</p>
                    </div>
                )}
            </div>

            <div className={styles.footer}>
                <span className={styles.footerHint}>
                    <kbd>↑↓</kbd> navigate
                </span>
                <span className={styles.footerHint}>
                    <kbd>↵</kbd> select
                </span>
                <span className={styles.footerHint}>
                    <kbd>esc</kbd> close
                </span>
            </div>
        </motion.div>
    );
}
