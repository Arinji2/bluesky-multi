import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { StyledBookmarkIcon } from "@/icons/bookmark";
import GeneratePost from "@/post/generate-post";
import { useEffect, useState } from "react";
export default function CreatePost() {
  const [formValue, setFormValue] = useState("");
  const [addPageNo, setAddPageNo] = useState(false);
  const [charactersCount, setCharactersCount] = useState(0);
  const [wordsCount, setWordsCount] = useState(0);
  const [newLinesCount, setNewLinesCount] = useState(0);
  const { toast } = useToast();
  const updateCounters = (targetValue: string) => {
    setCharactersCount(targetValue.length);
    setWordsCount(targetValue.trim().split(/\s+/).filter(Boolean).length);
    setNewLinesCount(targetValue.match(/\n/g)?.length || 0);
  };
  useEffect(() => {
    if (!localStorage.getItem("post-create")) return;
    const value = localStorage.getItem("post-create")!;
    setFormValue(value);
    updateCounters(value);
    toast({
      title: "Restored Past Data",
      description: "We restored your previous post data",
      action: (
        <ToastAction
          altText="Undo Restore"
          onClick={() => {
            setFormValue("");
            updateCounters("");
            localStorage.removeItem("post-create");
          }}
        >
          Undo
        </ToastAction>
      ),
    });
  }, []);
  return (
    <Card className="w-full max-w-[600px]">
      <CardHeader>
        <CardTitle>Create New Post</CardTitle>
        <CardDescription>
          Start typing inside the input field.
          <div className="flex flex-row items-center justify-start gap-1 font-bold">
            <StyledBookmarkIcon className="inline" />
            Pro Tip: We save your data locally, so don't worry about losing it.
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Post</Label>
              <Textarea
                id="post"
                className="h-[200px]"
                placeholder="Enter your post here"
                value={formValue}
                onChange={(e) => {
                  const targetValue = e.target.value;
                  setFormValue(targetValue);
                  updateCounters(targetValue);
                  localStorage.setItem("post-create", targetValue);
                }}
              />
            </div>
          </div>
        </form>
        <div className="flex items-center space-x-2">
          <Switch
            id="post-no"
            checked={addPageNo}
            onCheckedChange={(e) => {
              setAddPageNo(e);
            }}
          />
          <Label htmlFor="post-no">Add Post Number</Label>
        </div>
        <div className="p-2 bg-purple-400 border-border border-2 rounded-base w-full h-fit flex text-sm flex-col items-start justify-start gap-1">
          <p>
            Characters: <span className="font-bold">{charactersCount}</span>
          </p>
          <p>
            Words: <span className="font-bold">{wordsCount}</span>
          </p>
          <p>
            New Lines: <span className="font-bold">{newLinesCount}</span>
          </p>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button className="bg-red-500">Clear</Button>
        <Button
          variant="neutral"
          onClick={() => {
            const loadingToast = toast({
              title: "Generating Posts",
              duration: 60000 * 30, //30 mins max
            });
            const chunks = GeneratePost(formValue, addPageNo);

            if (!chunks.success) {
              loadingToast.dismiss();
              toast({
                title: "Error in Generating Post",
                description: chunks.message,
                variant: "destructive",
              });
              return;
            }
            localStorage.setItem("post-generate", JSON.stringify(chunks.data));
            setTimeout(() => {
              loadingToast.update({
                id: loadingToast.id,
                title: "Finished Generating Post",
                description: chunks.message,
                duration: 1000,
              });
            }, 1000);
          }}
        >
          Generate
        </Button>
      </CardFooter>
    </Card>
  );
}
