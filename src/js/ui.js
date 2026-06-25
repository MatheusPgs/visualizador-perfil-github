
export function renderLoading(container) {
    container.innerHTML = `<p class="loading">Carregando...</p>`;
}

export function clearResults(container) {
    container.innerHTML = '';
}

export function showAlert(message) {
    alert(message);
}

function createRepositoriesHTML(userRepos) {
    if (!userRepos || userRepos.length === 0) {
        return `<p>Este usuário não possui repositórios públicos.</p>`;
    }

    return userRepos
        .map(repo => `
        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
            <div class="repository-card">
                <h3>${repo.name}</h3>
                <div class="repository-stats">
                    <span>⭐ Stars: ${repo.stargazers_count}</span>
                    <span>🍴 Forks: ${repo.forks_count}</span>
                    <span>👀 Watchers: ${repo.watchers_count}</span>
                    <span>💻 Language: ${repo.language || 'N/A'}</span>
                </div>
            </div>
        </a>
        `)
        .join('');
}

export function renderProfile(container, userData, userRepos) {
    const displayName = userData.name || userData.login || 'Usuário GitHub';
    const profileUrl = userData.html_url || '#';
    const repositoriesHTML = createRepositoriesHTML(userRepos);

    container.innerHTML = `
  <div class="profile-card">
      <img src="${userData.avatar_url}" alt="Avatar de ${displayName}" class="profile-avatar">
      <div class="profile-info">
          <h2>${displayName}</h2>
          <p class="profile-username">@${userData.login}</p>
          <p>${userData.bio || 'Não possui bio cadastrada 😢.'}</p>
          <a href="${profileUrl}" target="_blank" rel="noopener noreferrer">Ver perfil no GitHub</a>
      </div>
  </div>

  <div class="profile-counters">
      <div class="followers">
          <h4>👥 Seguidores</h4>
          <span>${userData.followers}</span>
      </div>
      <div class="following">
          <h4>👥 Seguindo</h4>
          <span>${userData.following}</span>
      </div>
  </div>

  <div class="profile-repositories">
      <h2>Repositórios</h2>
      <div class="repositories">
            ${repositoriesHTML}
        </div>
  </div>
  `;
}
