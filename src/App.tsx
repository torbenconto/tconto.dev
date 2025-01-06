import { useEffect, useState } from "react";
import Profile from "./components/Profile.tsx";
import Repo from "./components/Repo.tsx";

const App = () => {
    const [repos, setRepos] = useState<any[]>([]);

    const repoNames = [
        "bambulabs_api",
        "plutus",
        "tyche",
        "gopwd",
        "cpp-math-expr-eval",
        "open-transaction-notifier"
    ];

    const isCacheValid = (timestamp: number) => {
        const currentTime = new Date().getTime();
        return currentTime - timestamp < 24 * 60 * 60 * 1000; // 24 hours
    };

    const fetchRepos = async () => {
        const repoList = await Promise.all(
            repoNames.map(async (repoName) => {
                const response = await fetch(`https://api.github.com/repos/torbenconto/${repoName}`);
                const data = await response.json();

                return {
                    name: data.name,
                    description: data.description || "No description",
                    language: data.language || "Unknown",
                    stars: data.stargazers_count,
                    forks: data.forks_count,
                };
            })
        );

        localStorage.setItem("repos", JSON.stringify({ timestamp: new Date().getTime(), repos: repoList }));
        setRepos(repoList);
    };

    const loadRepos = () => {
        const cachedData = localStorage.getItem("repos");

        if (cachedData) {
            const { timestamp, repos: cachedRepos } = JSON.parse(cachedData);

            if (isCacheValid(timestamp)) {
                setRepos(cachedRepos);
                return;
            }
        }

        fetchRepos();
    };

    useEffect(() => {
        loadRepos();

        const interval = setInterval(loadRepos, 24 * 60 * 60 * 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div
                className="fixed inset-0 z-[-2] w-screen h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] animate-scroll"

            ></div>
            <div className="py-12 text-center px-4 md:px-6 lg:px-12 mx-auto text-[#c9d1d9] flex flex-col items-center min-h-screen w-full">
                <Profile />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 w-full md:w-2/3">
                    {repos.map((repo, index) => (
                        <Repo
                            key={index}
                            name={repo.name}
                            description={repo.description}
                            language={repo.language}
                            stars={repo.stars.toString()}
                            forks={repo.forks.toString()}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default App;
