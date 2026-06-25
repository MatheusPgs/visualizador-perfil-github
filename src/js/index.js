import { inputSearch, btnSearch, profileResults } from './dom.js';
import { fetchGithubUser, fetchGithubUserRepos } from './api.js';
import { renderLoading, renderProfile, clearResults, showAlert } from './ui.js';

async function searchGithubUser() {
    const userName = inputSearch.value.trim();

    if (!userName) {
        showAlert('Por favor, digite um nome de usuário do GitHub.');
        clearResults(profileResults);
        return;
    }

    renderLoading(profileResults);

    try {
        const userData = await fetchGithubUser(userName);
        const userRepos = await fetchGithubUserRepos(userName);
        renderProfile(profileResults, userData, userRepos);
    } catch (error) {
        console.error('Erro ao buscar o perfil do usuário:', error);
        showAlert(error.message || 'Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.');
        clearResults(profileResults);
    }
}

btnSearch.addEventListener('click', searchGithubUser);

inputSearch.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        searchGithubUser();
    }
});

