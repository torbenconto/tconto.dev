function Profile() {
    return (
        <div className="flex flex-col items-center text-center p-4 space-y-4">
            <img
                className="rounded-full"
                src="https://avatars.githubusercontent.com/u/143856272?v=4"
                alt="Profile"
                style={{ height: 150, width: 150 }}
            />
            <h1 className="text-2xl sm:text-3xl font-semibold">Torben Conto</h1>
            <h2 className="text-base sm:text-lg ">Student and open-source developer.</h2>
            <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-6 space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-2">
                    <svg
                        height="25"
                        width="20"
                        className="octicon octicon-mark-github"
                        fill="#c9d1d9"
                        viewBox="0 0 16 16"
                        aria-label="GitHub"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                        ></path>
                    </svg>
                    <a href="https://github.com/torbenconto" className="text-blue-500 hover:underline">
                        @torbenconto
                    </a>
                </div>
                <div className="flex items-center space-x-2">
                    <svg
                        height="25"
                        width="20"
                        className="octicon octicon-mail"
                        fill="#c9d1d9"
                        viewBox="0 0 16 16"
                        aria-label="Email"
                    >
                        <path
                            fillRule="evenodd"
                            d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"
                        ></path>
                    </svg>
                    <a href="mailto:torben@tconto.dev" className="text-blue-500 hover:underline">
                        torben@tconto.dev
                    </a>
                </div>
                <div className="flex items-center space-x-2">
                    <svg
                        height="25"
                        width="20"
                        className="octicon octicon-location"
                        fill="#c9d1d9"
                        viewBox="0 0 16 16"
                        aria-label="Location"
                    >
                        <path
                            fillRule="evenodd"
                            d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                        ></path>
                    </svg>
                    <span>Georgia, United States</span>
                </div>
            </div>
        </div>
    );
}

export default Profile;
