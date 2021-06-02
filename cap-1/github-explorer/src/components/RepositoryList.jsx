import { useEffect, useState } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repository.scss"

// https://api.github.com/users/vitorpontual/repos

export function RepositoryList() {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/vitorpontual/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []); // When array was empty, change one time


  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>

      <ul>
        {
          repositories.map(repository => {
            return <RepositoryItem key={repository.name} repository={repository} />
          })
        }

      </ul>
    </section>
  )
}