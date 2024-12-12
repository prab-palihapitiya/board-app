import React, { useState, useCallback } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
import { Task, Status } from "@/config/types";
import ColumnHeader from "./column-header";

const columns: Status[] = [
    Status.ToDo,
    Status.InProgress,
    Status.Approved,
    Status.Reject
]

type TaskState = {
    [key in Status]: Task[]
}

const BoardContent = ({ data }: { data: Task[] }) => {
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

    return (
        <DragDropContext onDragEnd={() => { }}>
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
                                                    className="bg-white p-4 rounded-lg mb-4"
                                                >
                                                    <h3 className="text-lg font-semibold">{task.title}</h3>
                                                    <p className="text-sm text-neutral-400">{task.description}</p>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
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