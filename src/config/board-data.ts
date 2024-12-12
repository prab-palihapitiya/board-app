const boardData = [
    {
        id: 1,
        title: "Create routes",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        status: "In progress",
        assignees: [
            {
                id: 1,
                name: "John Doe",
                avatar: "/default.svg"
            },
            {
                id: 2,
                name: "Jane Doe",
                avatar: "/default.svg"
            }
        ],
        lastModified: "2021-09-01",
        tasks: []
    },
    {
        id: 2,
        title: "Development React App",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        status: "In progress",
        assignees: [
            {
                id: 1,
                name: "John Doe",
                avatar: "/default.svg"
            },
            {
                id: 2,
                name: "Jane Doe",
                avatar: "/default.svg"
            }
        ],
        lastModified: "2021-09-01",
        tasks: []
    },
    {
        id: 3,
        title: "Sport Xi Project",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        status: "In progress",
        assignees: [
            {
                id: 1,
                name: "John Doe",
                avatar: "/default.svg"
            },
            {
                id: 2,
                name: "Jane Doe",
                avatar: "/default.svg"
            },
            {
                id: 3,
                name: "John Doe",
                avatar: "/default.svg"
            },
            {
                id: 4,
                name: "Jane Doe",
                avatar: "/default.svg"
            },
            {
                id: 5,
                name: "John Doe",
                avatar: "/default.svg"
            },
            {
                id: 6,
                name: "Jane Doe",
                avatar: "/default.svg"
            }
        ],
        lastModified: "2021-09-01",
        tasks: [
            {
                id: 1,
                title: "User interview",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
                status: "To Do",
                type: "Research",
                priority: "Low",
                due: "2024-12-14",
                links: 3, //TODO: 
                messages: 5, //TODO:
                reports: 0, //TODO:
                groupCall: false,
                stream: false,
                imageSrc: "/task.svg",
                assignees: [
                    {
                        id: 1,
                        name: "John Doe",
                        avatar: "/default.svg"
                    },
                    {
                        id: 2,
                        name: "Jane Doe",
                        avatar: "/default.svg"
                    }
                ]
            },
            {
                id: 2,
                title: "Design System",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
                status: "To Do",
                type: "Design",
                priority: "Medium",
                due: "2021-09-01",
                links: 3, //TODO: 
                messages: 5, //TODO:
                reports: 2, //TODO:
                groupCall: false,
                stream: false,
                imageSrc: null,
                assignees: [
                    {
                        id: 1,
                        name: "John Doe",
                        avatar: "/default.svg"
                    },
                    {
                        id: 2,
                        name: "Jane Doe",
                        avatar: "/default.svg"
                    }
                ]
            },
            {
                id: 3,
                title: "UI Design",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
                status: "In Progress",
                type: "Design",
                priority: "High",
                due: "2021-09-01",
                links: 3, //TODO: 
                messages: 5, //TODO:
                reports: 0, //TODO:
                groupCall: false,
                stream: false,
                imageSrc: "/task.svg",
                assignees: [
                    {
                        id: 1,
                        name: "John Doe",
                        avatar: "/default.svg"
                    },
                    {
                        id: 2,
                        name: "Jane Doe",
                        avatar: "/default.svg"
                    }
                ]
            }

        ]
    },
    {
        id: 4,
        title: "Wordpress theme",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        status: "In progress",
        assignees: [],
        lastModified: "2021-09-01",
        tasks: []
    }
]

export default boardData;