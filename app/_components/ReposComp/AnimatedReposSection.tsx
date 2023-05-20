"use client";
import { callImg, dummayArray, random } from "app/_functions/functions";
import { filterUniqueRepos } from "app/_functions/filters";
import { useEffect, useState } from "react";
import { repoType } from "app/_types/Repos";
import SAnimatedReposCard from "app/_components/SkeletonComp/Repo/SAnimatedReposCard";
import AnimatedRepoCard from "./AnimatedRepoCard";


export default function AnimatedReposSection({ api }: { api: { data: repoType[], status: number } }) {
  const i = dummayArray(2);
  const { data, status } = api;
  const [isMount, setMount] = useState(false);
  const filtered = filterUniqueRepos(data, "codinasion");

  useEffect(() => setMount(true), [])

  if (!isMount || !filtered) {
    return (
      <section className="p-2 lg:container mx-auto grid md:grid-cols-2 justify-center items-start gap-4 md:gap-6 lg:gap-10">
        <div className="grid gap-4 md:gap-6 lg:gap-10">
          {i.map((item) => (<SAnimatedReposCard key={random()} />))}
        </div>
        <div className="grid gap-4 md:gap-6 lg:gap-10 md:pt-[50%]">
          {i.map((item) => (<SAnimatedReposCard key={random()} />))}
        </div>
      </section>)
  }

  return (
    <section className="p-2 lg:container mx-auto grid md:grid-cols-2 justify-center items-start gap-4 md:gap-6 lg:gap-10">
      <div className="grid gap-4 md:gap-6 lg:gap-10">
        {filtered.slice(0, 2).map((item: repoType) => (
          <AnimatedRepoCard
            key={random()}
            imgUrl={callImg(item.name)}
            title={item.name}
            desc={item.description}
            repoUrl={item.name}
            status={{
              forks: item.forks,
              stars: item.stargazers_count,
            }}
          />))
        }
      </div>
      <div className="grid gap-4 md:gap-6 lg:gap-10 md:pt-[50%]">
        {filtered.slice(2, 4).map((item: repoType) => (
          <AnimatedRepoCard
            key={random()}
            imgUrl={callImg(item.name)}
            title={item.name}
            desc={item.description}
            repoUrl={item.name}
            status={{
              forks: item.forks,
              stars: item.stargazers_count,
            }}
          />))
        }
      </div>
    </section>
  );
}