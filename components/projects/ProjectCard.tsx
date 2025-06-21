import React from "react";
import Image from "next/image";
import { kebabCase } from "@/utils/utils";
import Link from "next/link";

function ProjectCard({ project }) {
  return (
    <div
      className="flex flex-col justify-between border border-fun-gray rounded-xl p-4 w-full h-[500px] max-w-sm mx-auto transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink"
      key={project.id}
    >
      <a
        href={project.link || project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full block h-48 relative rounded-md overflow-hidden mb-4"
      >
        <Image
          src={project.img}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </a>

      <div className="flex flex-col justify-between flex-grow">
        <div className="mb-2">
          <h3 className="text-lg font-bold mb-1">{project.title}</h3>
          <p className="text-sm text-fun-gray line-clamp-3">{project.desc}</p>
        </div>

        <div className="mt-auto">
          <ul className="flex flex-wrap items-center mt-3 -ml-2 list-none">
            {project.tags.map((tag, index) => (
              <li key={index}>
                <Link href={`/projects/tag/${kebabCase(tag)}`}>
                  <div className="m-1 rounded-lg text-sm bg-fun-pink-dark py-1 px-2 cursor-pointer hover:opacity-75">
                    {tag}
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex justify-end mt-2 space-x-2">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                <Image
                  src="/static/icons/external-link.svg"
                  width={16}
                  height={16}
                  alt="Link Icon"
                />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <Image
                  src="/static/icons/github.svg"
                  width={16}
                  height={16}
                  alt="Github Icon"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
