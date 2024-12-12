'use client';

import { Badge } from "@/components/ui/badge";
import { useParams } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PencilIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import boardData from "@/config/board-data";
import { Assignee, Board, Status } from "@/config/types";
import { formatDate } from "@/lib/utils";
import BoardContent from "./components/board-content";

const BoardPage = () => {
    const { id } = useParams<{ id: string }>();
    const board: Board = boardData.find((board) => board?.id === Number(id));
    const tasks = board?.tasks;

    const BoardHeader = () => {
        const title: string = board?.title;
        const status: Status = board?.status;
        const description: string = board?.description;
        const lastUpdated: string = board?.lastModified;

        const AssignedGroup = () => {
            const assignees: Assignee[] = board.assignees;
            return (
                <div className="flex -space-x-2.5 overflow-hidden">
                    {assignees?.map((assignee, index) => (
                        (index < 3) && <Avatar className='h-6 w-6' key={assignee.id}>
                            <AvatarImage src={assignee.avatar} alt={assignee.name} />
                            <AvatarFallback>{assignee.name}</AvatarFallback>
                        </Avatar>
                    ))}
                    {(assignees && assignees.length > 3) &&
                        (<Avatar className='h-6 w-6'>
                            <AvatarFallback className="text-[10px] bg-neutral-200 font-semibold">+{assignees.length - 3}</AvatarFallback>
                        </Avatar>)}
                </div>
            )
        }

        return (
            <div className="flex flex-col gap-y-4 h-auto border-b p-5">
                <div className="flex items-center gap-5">
                    <h1 className="text-2xl font-extrabold">{title}</h1>
                    <Badge variant="destructive" className="rounded-md bg-amber-500 text-black font-light">{status}</Badge>
                </div>
                <p className="font-normal text-neutral-400">{description}</p>
                <div className="flex items-center gap-5">
                    <span className="font-normal text-neutral-400">assigned</span>
                    <AssignedGroup />
                    <Button variant="outline" size="sm" className="h-8 rounded-3xl text-neutral-400 text-xs">Manage <PencilIcon className="w-4 h-4 text-neutral-400" /></Button>
                </div>
                <Separator />
                <span className="text-sm font-light text-neutral-400">Last updated on: {formatDate(lastUpdated)}</span>
            </div>
        );
    }


    return (
        <div>
            <BoardHeader />
            <BoardContent data={tasks} />
        </div>
    );
}

export default BoardPage;