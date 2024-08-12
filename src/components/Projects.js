import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function getRepos() {
      const res = await fetch("https://api.github.com/users/farkhunda20/repos");
      const data = await res.json();

      setRepos(data);
    }
    getRepos();
  }, []);

  console.log("this is all the projects" + repos);

  return (
    <section className="project--section">
      <h1>My Projects</h1>
      <div className="projects--container">
        {repos
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          // .slice(0, 9)
          .map((repo) => (
            <div className="project" key={repo.id}>
              <strong>{repo.name}</strong> {repo.description} <br />
              <small>Language: {repo.language}</small> <br />
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Projects;
