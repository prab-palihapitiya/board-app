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
                due: null,
                links: 3, //TODO: 
                messages: 45, //TODO:
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
                due: null,
                links: 3, //TODO: 
                messages: 5, //TODO:
                reports: 0, //TODO:
                groupCall: false,
                stream: true,
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
                ]
            },
            {
                id: 4,
                title: "Prototype",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
                status: "Approved",
                type: "Research",
                priority: "Low",
                due: "2024-12-14",
                links: 35, //TODO: 
                messages: 52, //TODO:
                reports: 0, //TODO:
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
                id: 5,
                title: "Check Clients Feedback",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
                status: "In Progress",
                type: "Feedback",
                priority: "Medium",
                due: "2024-12-15",
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
                id: 6,
                title: "Group Management",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
                status: "Reject",
                type: "Other",
                priority: "Low",
                due: null,
                links: 3, //TODO: 
                messages: 320, //TODO:
                reports: 0, //TODO:
                groupCall: true,
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
                id: 7,
                title: "Copyright",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
                status: "In Progress",
                type: "Presentation",
                priority: "Low",
                due: "2024-12-13",
                links: 3, //TODO: 
                messages: 5, //TODO:
                reports: 0, //TODO:
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
                id: 8,
                title: "Test",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
                status: "Approved",
                type: "Feedback",
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
                id: 9,
                title: "Test",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
                status: "In Progress",
                type: "UX Research",
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
                id: 10,
                title: "Test",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
                status: "Reject",
                type: "interface",
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