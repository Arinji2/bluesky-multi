import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import ViewPost from "@/post/view";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Post() {
  const [postData, setPostData] = useState<string[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();
  useEffect(() => {
    if (!localStorage.getItem("post-generate")) {
      toast({
        title: "Post Not Found",
        description: "No posts generated, please generate one first.",
        variant: "destructive",
      });
      navigate("/");
      return;
    }
    const rawData = localStorage.getItem("post-generate")!;
    const parsedData = JSON.parse(rawData);
    setPostData(parsedData);
  }, []);
  return (
    <div className="w-full h-full bg-bg gap-12 flex flex-col items-center justify-center">
      <div className="w-fit h-fit space-y-8 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
          View Generated Posts
        </h2>
      </div>
      <div className="w-fit h-fit flex flex-row items-center justify-center gap-4">
        <Button
          variant="destructive"
          onClick={() => {
            localStorage.removeItem("post-generate");
            toast({
              title: "Posts Deleted",
              description: "Your posts have been deleted",
            });
            navigate("/");
          }}
        >
          Delete Generated Posts
        </Button>
        <Button asChild>
          <a href="/">Back to Generator</a>
        </Button>
      </div>
      <div className="w-fit h-fit grid md:grid-cols-2 grid-cols-1 gap-6">
        {postData.map((post, index) => {
          return (
            <div className="w-full h-full flex flex-col items-center justify-center">
              <ViewPost postData={post} index={index} key={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
