import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PencilIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Assignee, Board, Status } from "@/config/types";
import { formatDate } from "@/lib/utils";
import AssignedGroup from "./common/assigned-group";

const BoardHeader = ({ data }: { data: Board }) => {
    const title: string = data?.title;
    const status: Status = data?.status;
    const description: string = data?.description;
    const lastUpdated: string = data?.lastModified;
    const assignees: Assignee[] = data.assignees;

    return (
        <div className="flex flex-col gap-y-4 h-auto border-b p-5">
            <div className="flex items-center gap-5">
                <h1 className="text-2xl font-extrabold">{title}</h1>
                <Badge variant="destructive" className="rounded-md bg-amber-500 text-black font-light">{status}</Badge>
            </div>
            <p className="font-normal text-neutral-400">{description}</p>
            <div className="flex items-center gap-5">
                <span className="font-normal text-neutral-400">assigned</span>
                <AssignedGroup assignees={assignees} />
                <Button variant="outline" size="sm" className="h-8 rounded-3xl text-neutral-400 text-xs">Manage <PencilIcon className="w-4 h-4 text-neutral-400" /></Button>
            </div>
            <Separator />
            <span className="text-sm font-light text-neutral-400">Last updated on: {formatDate(lastUpdated)}</span>
        </div>
    );
}

export default BoardHeader;