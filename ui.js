class UI{
    constructor(){
        this.profile = document.getElementById('profile');
        
    }

    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3" style="text-align:center;">
            <div class="row>
                <div class="col-md-3">
                    <img class="img-fluid mb-3" src="${user.avatar_url}" alt="img"></img>
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4" style="margin: 0 auto;width: 50%;">View Profile</a>
                </div>
                <div class="col-md-12" style="text-align:center;">
                    <span class="badge badge-primary mb-2 mr-4"><b>Public Repo :</b> ${user.public_repos}</span>
                    <span class="badge badge-danger mb-2 mr-4"><b>Public Gists :</b> ${user.public_gists}</span>
                    <span class="badge badge-success mb-2 mr-4"><b>Followers :</b> ${user.followers}</span>
                    <span class="badge badge-dark mb-2 mr-4"><b>Followings :</b> ${user.following}</span>
                    <br><br>
                    <ul class="list-group" style="text-align:left;">
                        <li class="list-group-item"><b>Company :</b> ${user.company}</li>
                        <li class="list-group-item"><b>Website/ Blog :</b> <a href="${user.blog}">${user.blog}</a></li>
                        <li class="list-group-item"><b>Location :</b> ${user.location}</li>
                        <li class="list-group-item"><b>Member Since :</b> ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }

    clearProfile(){
        this.profile.innerHTML = '';
    }

    showAlert(message, className){
        this.clearAlert();

        const div = document.createElement('div');
        div.classList = `${className}`;
        div.appendChild(document.createTextNode(message));

        const search = document.querySelector('.search');

        const searchContainer = document.querySelector('.searchContainer');

        searchContainer.insertBefore(div, search);

        setTimeout(function(){
        //    this.clearAlert.remove();
        div.remove();
        }, 3000);
    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }
    }

    showRepos(repos){
        console.log(repos);
        let output = '';

        repos.forEach(function(repo){
            output += `
                <div class="card card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary mr-4 mb-3">Stars : ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary mr-4 mb-3">Watchers : ${repo.watchers_count}</span>
                            <span class="badge badge-success mr-4 mb-3">Forks : ${repo.forms_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        document.getElementById('repos').innerHTML = output;

    }
}