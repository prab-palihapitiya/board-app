import React, { useState, useCallback, useEffect } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
import { Task, Status } from "@/config/types";
import ColumnHeader from "./column-header";
import TaskElement from "./task-element";

const columns: Status[] = [
    Status.ToDo,
    Status.InProgress,
    Status.Approved,
    Status.Reject
]

type TaskState = {
    [key in Status]: Task[]
}

interface BoardContentProps {
    data: Task[];
    onChange: (updates: { id: number, status: Status, position: number }[]) => void;
}

const BoardContent = ({ data, onChange }: BoardContentProps) => {
    const [tasks, setTasks] = useState<TaskState>(() => {
        const initialTasks: TaskState = {
            [Status.ToDo]: [],
            [Status.InProgress]: [],
            [Status.Approved]: [],
            [Status.Reject]: [],
        }

        data.forEach((task) => {
            initialTasks[task.status].push(task);
        });

        Object.keys(initialTasks).forEach((key) => {
            const column = initialTasks[key as Status];
            column.sort((a, b) => a.id - b.id);
        });

        return initialTasks;
    });

    useEffect(() => {
        const newTasks: TaskState = {
            [Status.ToDo]: [],
            [Status.InProgress]: [],
            [Status.Approved]: [],
            [Status.Reject]: [],
        };

        data.forEach((task) => {
            newTasks[task.status].push(task);
        });

        Object.keys(newTasks).forEach((key) => {
            const column = newTasks[key as Status];
            column.sort((a, b) => a.id - b.id);
        });

        setTasks(newTasks);
    }, [data]);

    const onDragEnd = useCallback((result: DropResult) => {
        if (!result.destination) return;

        const { source, destination } = result;
        const sourceStatus = source.droppableId as Status;
        const destinationStatus = destination.droppableId as Status;

        let updatesPayload: { id: number, status: Status, position: number }[] = [];

        setTasks((prev) => {
            const updatedTasks = { ...prev };

            const sourceColumn = [...updatedTasks[sourceStatus]];
            const [moved] = sourceColumn.splice(source.index, 1);

            if (!moved) {
                console.error("Task not found");
                return prev;
            }

            const updatedTask = sourceStatus === destinationStatus
                ? moved : { ...moved, status: destinationStatus };

            updatedTasks[sourceStatus] = sourceColumn;

            const destinationColumn = [...updatedTasks[destinationStatus]];
            destinationColumn.splice(destination.index, 0, updatedTask);

            updatedTasks[destinationStatus] = destinationColumn;

            updatesPayload = [];
            updatesPayload.push({
                id: updatedTask.id,
                status: updatedTask.status,
                position: destination.index
            });

            updatedTasks[destinationStatus].forEach((task, index) => {
                if (task.id === updatedTask.id) return;

                updatesPayload.push({
                    id: task.id,
                    status: task.status,
                    position: index
                });
            });

            if (sourceStatus === destinationStatus) {
                updatedTasks[destinationStatus].forEach((task, index) => {
                    updatesPayload.push({
                        id: task.id,
                        status: task.status,
                        position: index
                    });
                });
            }

            return updatedTasks;
        });

        onChange(updatesPayload);
    }, [onChange]);

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="flex overflow-x-auto border-b">
                {columns.map((column) => (
                    <div key={column} className="flex-1 bg-muted min-w-[100px] border-r h-screen">
                        <ColumnHeader column={column} />
                        <Droppable droppableId={column}>
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className="min-h-[200px] p-4"
                                >
                                    {tasks[column].map((task, index) => (
                                        <Draggable
                                            key={task.id}
                                            draggableId={task.id.toString()}
                                            index={index}>

                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className="bg-white p:1 md:p-2.5 rounded-xl mb-4 border"
                                                >
                                                    <TaskElement task={task} />
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                ))}
            </div>
        </DragDropContext>
    );
}

export default BoardContent;