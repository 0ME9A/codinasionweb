import { RiGitRepositoryLine } from "react-icons/ri";
import { random } from "app/_functions/functions";
import { issueType } from "app/_types/Issue";
import { HiUsers } from "react-icons/hi";
import Tag from "../CommonComp/Tag";
import Link from "next/link";


export default function IssueCard({ issue }: { issue: issueType }): JSX.Element {
    return (
        <Link href={issue.issue_url} target={"_blank"}>
            <article title={issue.issue_title} className={`w-full space-y-4 text-black dark:text-white p-3 sm:p-5 !py-10 hover:bg-very-light dark:hover:bg-very-dark border-b-[1px] border-gray-500/20 mx-auto`}>
                <h2 title={issue.issue_title} className="text-2xl font-semibold tracking-tight ">
                    {issue.issue_title}
                </h2>
                <ul className="flex flex-wrap gap-2">
                    {issue.issue_labels.map((tag) => (<Tag key={random()} tag={tag} />))}
                </ul>
                <div className="md:flex md:space-x-10 text-md">
                    <div title={`Repository ${issue.issue_short_url}`} className={`flex items-center gap-2`}>
                        <RiGitRepositoryLine className="inline-block text-gray-500 dark:text-gray-300" />{" "}
                        <span className="font-light text-md">Repository :{" "}<b>{issue.issue_short_url}</b></span>
                    </div>
                    <div title={`Author ${issue.issue_author}`} className={`flex items-center gap-2`}>
                        <HiUsers className="inline-block text-gray-500 dark:text-gray-300" />{" "}
                        <span className="font-light text-md">Author :{" "}<b>{issue.issue_author}</b></span>
                    </div>
                </div>
            </article>
        </Link>
    );
}
