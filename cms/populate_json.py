import json

import requests  # type: ignore

with open("open_source.json") as f:
    data = json.load(f)

enriched = []
for project in data:
    org, repo = project["url"].split("github.com/")[1].split("/")
    res = requests.get(f"https://api.github.com/repos/{org}/{repo}")
    if res.ok:
        info = res.json()
        project.update(
            {
                "org": org,
                "repo_name": repo,
                "slug": repo.lower(),
                "stars": info.get("stargazers_count"),
                "forks": info.get("forks_count"),
                "tech_stack": info.get("topics", [])
                + ([info["language"]] if info.get("language") else []),
                "collaborators": None,
                "role": "Contributor",
                "learn_more_label": "Learn more →",
            }
        )
        enriched.append(project)

with open("open_source.json", "w") as f:
    json.dump(enriched, f, indent=2)
