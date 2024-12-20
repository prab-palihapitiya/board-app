import { Badge } from "@/components/ui/badge";
import { Status } from "@/config/types";
import { Ellipsis, Plus } from "lucide-react";

const ColumnHeader = ({ column }: { column: Status }) => {
    return (
        <div className="flex items-center bg-white p-2 py-3 lg:p-4 border-b justify-between">
            <Badge variant={column} className="rounded-3xl lg:py-1 lg:px-5 lg:text-sm font-medium shrink-0">{column}</Badge>
            <div className="flex gap-1.5">
                <Plus className="w-4 h-4 text-primary cursor-pointer hidden md:flex" />
                <Ellipsis className="w-4 h-4 text-primary cursor-pointer" />
            </div>
        </div>
    );
};

export default ColumnHeader;