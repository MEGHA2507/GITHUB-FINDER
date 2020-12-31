class GitHub{
    constructor(){
        this.client_id ="b8145eb0ed4a8a378be8";
        this.client_secret="b1de8fd01eb7a3e7ccc01ae5ddd642e20706e20d ";
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