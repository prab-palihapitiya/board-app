import { Badge } from "@/components/ui/badge";
import { Task } from "@/config/types";
import { Bell, CalendarRange, CircleAlert, Ellipsis, Link, MessageCircleMore, ZapIcon } from "lucide-react";
import AssignedGroup from "./common/assigned-group";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { formatDate } from "@/lib/utils";

const TaskElement = ({ task }: { task: Task }) => {
    return (
        <div className="flex flex-col gap-y-2.5">
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <Badge variant={task.type} className="size-[8px] rounded-[2px] p-0" />
                    <div className="text-xs text-neutral-400 mt-[-2px]">{task.type}</div>
                </div>
                <Ellipsis className="size-3.5 text-neutral-400 cursor-pointer" />
            </div>
            <h3 className="text-sm font-medium">{task.title}</h3>
            <div className="flex gap-2">
                <AssignedGroup assignees={task.assignees} size={6} />
                <Badge className="rounded-sm text-gray-400 font-light text-[10px] bg-neutral-100 gap-1 px-1 cursor-pointer hover:bg-neutral-100"><ZapIcon className="size-3" />{task.priority}</Badge>
            </div>
            {task.imageSrc && <Image src={task.imageSrc} alt={task.title} width={400} height={300} />}
            <Separator className={`mt-${task.imageSrc ? 1 : 4}`} />
            <div className="2xl:flex items-center gap-5">
                {task.links > 0 && <div className="flex text-neutral-500 text-xs font-medium items-center gap-1 cursor-pointer"><Link size={10} strokeWidth={3} />{task.links}</div>}
                {task.messages > 0 && <div className="flex text-neutral-500 text-xs font-medium items-center gap-1 cursor-pointer"><MessageCircleMore size={18} />{task.messages}</div>}
                {task.due && <div className="flex text-xs text-neutral-500 font-medium items-center gap-1"><CalendarRange size={15} />Due: {formatDate(task.due)}</div>}
                {task.reports > 0 && <div className="flex text-xs text-red-500 font-medium items-center gap-1 cursor-pointer"><CircleAlert size={15} />{task.reports} Reports</div>}
                {task.groupCall && <div className="flex text-xs text-blue-500 font-medium items-center gap-1"><Bell size={15} /> Group Call</div>}
                {task.stream && <div className="flex text-xs text-blue-500 font-medium items-center gap-1"><Bell size={15} /> Stream</div>}
            </div>
        </div>
    );
}

export default TaskElement;