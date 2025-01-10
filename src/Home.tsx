import CreatePost from "@/post/create";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StyledEditIcon } from "@/icons/edit";
import { StyledBlueskyIcon } from "@/icons/bluesky";
import { StyledGithubIcon } from "@/icons/github";
import { StyledInfoIcon } from "@/icons/info";
export default function Home() {
  return (
    <div className="w-full h-full bg-bg gap-12 flex flex-col items-center justify-center">
      <div className="w-fit h-fit space-y-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Bluesky Multi Poster
        </h1>
        <p className="text-2xl ">
          An app to help you split up a huge post, into multiple bluesky sized
          posts.
        </p>
      </div>
      <div className="w-fit h-fit flex flex-row items-center justify-center gap-6">
        <Button asChild>
          <a href="#post">Create Post</a>
        </Button>
        <Button asChild variant="neutral">
          <a href="#help">View Help And Tips</a>
        </Button>
      </div>
      <CreatePost />
      <div className="w-full h-fit flex flex-col items-center justify-start gap-6">
        <h2 className="text-3xl tracking-tight font-semibold" id="help">
          Help And Tips
        </h2>
        <ol className="list-decimal text-center max-w-[700px] space-y-3 list-inside">
          <li>
            We divide your post into multiple posts, each with a max size of 300
            characters.
          </li>
          <li>
            At the 300 limit, we split at the nearest punctuation mark, which
            are the following: <strong>"."</strong>, <strong>"!"</strong>,{" "}
            <strong>"?"</strong>.
          </li>
          <li>
            If you are writing a post, with multiple topics, we recommend you to
            use 2 new lines in between each topic, this indicates to us where a
            topic ends and starts so that we can seperate accordingly.
          </li>
          <li>
            The "Add Post Number" slider, will add a number to the end of each
            post, example: <strong>1/3</strong>, this means that this is the{" "}
            <strong>
              1<sup>st</sup>
            </strong>{" "}
            post out of <strong>3</strong> total posts.
          </li>
          <li>
            To make edits, you can click the{" "}
            <StyledEditIcon className="size-5 ml-1 mb-1" /> edit button for each
            specific post.
          </li>
        </ol>
      </div>
      <Card className="w-full max-w-[600px]">
        <CardHeader>
          <CardTitle>Created By Arinji</CardTitle>
          <CardDescription>
            Hiya, I'm Arinji, a UI/UX designer and Developer. I make a lot of
            cool stuff with quirky designs. Like what you saw? Follow me on my
            socials :D
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="flex flex-row items-center justify-start gap-6">
            <Button asChild className="bg-[#00FF75]">
              <a
                href="https://bsky.app/profile/arinji.com"
                target="_blank"
                aria-label="Bluesky"
              >
                <StyledBlueskyIcon className="!size-8 " />
              </a>
            </Button>
            <Button asChild className="bg-[#FFB443]">
              <a
                href="https://github.com/arinji2"
                target="_blank"
                aria-label="Github"
              >
                <StyledGithubIcon className="!size-8 " />
              </a>
            </Button>
            <Button asChild className="bg-[#39DBFF]">
              <a
                href="https://arinji.com"
                target="_blank"
                aria-label="Portfolio"
              >
                <StyledInfoIcon className="!size-8 " />
              </a>
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex flex-col items-start justify-start gap-2">
            This is an OSS project, feel free to contribute to it on GitHub.
            <Button asChild variant="neutral">
              <a
                href="https://github.com/arinji2/bluesky-multi"
                target="_blank"
                aria-label="GitHub"
              >
                GitHub
              </a>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
