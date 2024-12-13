export enum Status {
    ToDo = "To Do",
    InProgress = "In Progress",
    Approved = "Approved",
    Reject = "Reject"
}

export enum TaskType {
    Research = "Research",
    Design = "Design",
    Feedback = "Feedback",
    Interface = "interface",
    UXResearch = "UX Research",
    Other = "Other"
}

export enum PriorityLevel {
    Low = "Low",
    Medium = "Medium",
    High = "High"
}

export interface Assignee {
    id: number;
    name?: string;
    avatar?: string;
}

export interface Task {
    id: number;
    title: string;
    description?: string;
    status: Status;
    type: TaskType;
    priority: PriorityLevel;
    due: string;
    links: number;
    messages: number;
    reports: number;
    groupCall: boolean;
    stream: boolean;
    imageSrc: string;
    assignees: Assignee[];
}

export interface Board {
    id: number;
    title: string;
    description: string;
    status: Status;
    assignees: Assignee[];
    lastModified: string;
    tasks: Task[];
}