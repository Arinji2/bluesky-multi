import CreatePost from "@/post/create";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="w-full h-full py-12 bg-bg gap-12 flex flex-col items-center justify-center">
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
    </div>
  );
}
