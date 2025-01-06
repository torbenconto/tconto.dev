function Repo(props: {name: string, description: string, language: string, stars: string, forks: string}) {
    var color = ""

    switch (props.language) {
        case "Go":
            color = "#00acd7"
            break;
        case "C++":
            color = "#f34b7d"
    }

    return (
        <a
            href={`https://github.com/torbenonconto/${props.name}`}
            className="flex flex-col h-full thin-border text-[#8b949e] slight-blur p-4 rounded-md shadow-md transition-transform duration-200 hover:scale-105"
        >
            <div className="flex items-center mb-1">
                <svg height="25" className="octicon octicon-repo mr-2 align-middle" fill="#58a6ff" aria-label="repo"
                     viewBox="0 0 16 16" version="1.1" width="25" role="img">
                    <path fill-rule="evenodd"
                          d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                </svg>
                <div className="text-[#58a6ff] font-semibold">{props.name}</div>
            </div>

            <p className="mb-6 text-left flex-grow">{props.description}</p>

            <div className="flex space-x-4 mt-auto">
                <div className="flex items-center space-x-2">
                    <div style={{backgroundColor: color}} className="rounded-full h-3 w-3"></div>
                    <p>{props.language}</p>
                </div>
                <div className="flex items-center space-x-2">
                    <svg className="octicon octicon-star" viewBox="0 0 16 16" version="1.1" width="16" height="16"
                         fill="#8b949e" aria-hidden="true">
                        <path fillRule="evenodd"
                              d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                    </svg>
                    <span>{props.stars}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <svg className="octicon octicon-git-branch" viewBox="0 0 16 16" version="1.1" width="16"
                         height="16" fill="#8b949e" aria-hidden="true">
                        <path fillRule="evenodd"
                              d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                    </svg>
                    <span>{props.forks}</span>
                </div>
            </div>
        </a>
    );
}

export default Repo;
