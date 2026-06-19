import { inputSearch, btnSearch, profileResults } from './dom.js';
import { fetchUser } from './api.js';
import { renderLoading, renderProfile, clearResults, showAlert } from './ui.js';

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value.trim();

    if (!userName) {
        showAlert('Por favor, digite um nome de usuário do GitHub.');
        clearResults(profileResults);
        return;
    }

    renderLoading(profileResults);

    try {
        const userData = await fetchUser(userName);
        renderProfile(profileResults, userData);
    } catch (error) {
        console.error('Erro ao buscar o perfil do usuário:', error);
        showAlert(error.message || 'Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.');
        clearResults(profileResults);
    }
});
