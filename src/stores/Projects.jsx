const ProjectList = [
    {
        projectName: "React Deployment Service",
        projectInfo: "Upload Service - Clone a user’s react project from github to an R2 cloudflare bucket using aws-sdk, and push the\n" +
            "upload-id into a redis-queue." +
            "Build Service - Retrieves an ID from queue, fetches files from R2, builds the project, and then uploads it back to R2.",
        projectDetailedInfo: "Request Handler Service - Utilizing Node.js with Express and React, to efficiently serve build files.\n" +
            "• Deployed backend web service in AWS EC2 and render for serverless Fnc. Used render cloud Redis-queue to handle\n" +
            "uploadID.",
        github: "https://github.com/barat-sh/rds",
        liveLink: "https://github.com/barat-sh/rds",
        liveStatus: true
    },
    {
        projectName: "Vim-setup",
        projectInfo: "Designed an effective Vim setup for Full-Stack Web Development with typescript, git(lazygit) support.",
        projectDetailedInfo: "Implemented LSP. It powers our editor’s features, (code completion, syntax highlighting, and refactoring support). I have\n" +
            "used Mason.nvim to manage installed LSP’s.Mason is a package manager for LSP’s, manage LSP servers, DAP servers,\n" +
            "linters, and formatters.",
        github: "https://github.com/barat-sh/Vim-Setup",
        liveLink: "https://github.com/barat-sh/Vim-Setup",
        liveStatus: true
    }
]

export default ProjectList