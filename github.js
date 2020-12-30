class GitHub{
    constructor(){
        this.client_id ="";
        this.client_secret="71923e04c905e2b346b33e118c4b3b41a4efe024 ";
        this.repos_count = 5; 
        this.repos_sort = "created: asc"

    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}