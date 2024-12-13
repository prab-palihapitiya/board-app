'use client';

import { useState, useEffect } from 'react';
import { useParams } from "next/navigation";
import boardData from "@/config/board-data";
import { Board, Status, Task } from "@/config/types";
import BoardContent from "./components/board-content";
import BoardHeader from "./components/board-header";
import { useSearchStore } from '@/lib/state/store';

const BoardPage = () => {
    const { id } = useParams<{ id: string }>();
    const [board, setBoard] = useState<Board>();
    const [tasks, setTasks] = useState<Task[]>([]);
    const searchQuery = useSearchStore((state) => state.searchQuery);

    useEffect(() => {
        const storedBoard = localStorage.getItem(`board-${id}`);
        if (storedBoard) {
            const parsedBoard = JSON.parse(storedBoard);
            setBoard(parsedBoard);
            setTasks(parsedBoard.tasks.filter((task: Task) => filterTask(task, searchQuery)));
        } else {
            const foundBoard = boardData.find((board) => board?.id === Number(id));
            setBoard(foundBoard as Board);
            setTasks(foundBoard?.tasks.map((task) => ({
                ...task,
                status: task.status as Status
            })).filter((task) => filterTask(task as Task, searchQuery)) as Task[]);
        }
    }, [id, searchQuery]);

    const filterTask = (task: Task, query: string) => {
        // This example filters by title including the search query (case-insensitive).
        return task.title.toLowerCase().includes(query.toLowerCase());
    };

    const handleBoardUpdate = (updates: { id: number, status: Status, position: number }[]) => {
        const updatedBoard = { ...board, tasks: [...tasks] };
        updates.forEach(update => {
            const taskIndex = updatedBoard.tasks.findIndex(task => task.id === update.id);
            updatedBoard.tasks[taskIndex] = { ...updatedBoard.tasks[taskIndex], ...update };
        });
        setBoard(updatedBoard as Board);
        setTasks(updatedBoard.tasks);
        localStorage.setItem(`board-${id}`, JSON.stringify(updatedBoard));
    };

    return (
        <div>
            {board && tasks && (
                <>
                    <BoardHeader data={board} />
                    <BoardContent data={tasks} onChange={handleBoardUpdate} />
                </>
            )}
        </div>
    );
}

export default BoardPage;