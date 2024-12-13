import { Assignee } from "@/config/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AssignedGroup = ({ assignees, size = 6 }: { assignees: Assignee[], size?: number }) => {
    return (
        <div className="flex -space-x-2.5 overflow-hidden">
            {assignees?.map((assignee, index) => (
                (index < 3) && <Avatar className={`size-${size}`} key={assignee.id}>
                    <AvatarImage src={assignee.avatar} alt={assignee.name} />
                    <AvatarFallback>{assignee.name}</AvatarFallback>
                </Avatar>
            ))}
            {(assignees && assignees.length > 3) &&
                (<Avatar className={`size-${size}`}>
                    <AvatarFallback className="text-[10px] bg-neutral-200 font-semibold">+{assignees.length - 3}</AvatarFallback>
                </Avatar>)}
        </div>
    )
}

export default AssignedGroup;