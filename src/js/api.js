const BASE_URL = 'https://api.github.com';

async function fetchFromGitHub(endpoint, errorMessage) {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error(errorMessage);
  }
  return response.json();
}

export function fetchGithubUser(userName) {
  return fetchFromGitHub(
    `/users/${userName}`,
    'Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.'
  );
}

export function fetchGithubUserRepos(userName) {
  return fetchFromGitHub(
    `/users/${userName}/repos?per_page=10&sort=created`,
    'Repositórios não encontrados.'
  );
}
