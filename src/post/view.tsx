import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { StyledCopyIcon } from "@/icons/copy";
import { StyledEditIcon } from "@/icons/edit";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { useEffect, useState } from "react";
export default function ViewPost({
  postData,
  index,
}: {
  postData: string;
  index: number;
}) {
  const [formValue, setFormValue] = useState(postData);
  const [isEditing, setIsEditing] = useState(false);

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
    updateCounters(formValue);
  }, [formValue]);
  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>{index + 1}.</CardTitle>
        <CardDescription>
          <div className="w-full h-fit flex flex-row items-center justify-start">
            <StyledEditIcon
              role="button"
              tabIndex={0}
              aria-label="Edit Post"
              onClick={() => {
                if (charactersCount >= 300) {
                  toast({
                    title: `Post ${index + 1} Too Long`,
                    description:
                      "Please make your post shorter than 300 characters to save it. ",
                    variant: "destructive",
                  });
                  return;
                }
                setIsEditing((prev) => !prev);
                if (!isEditing) {
                  toast({
                    title: `Editing Post ${index + 1}`,
                    description:
                      "Click the edit button again to save your changes",
                  });
                } else {
                  toast({
                    title: `Post ${index + 1} Saved`,
                    description: `Your post has been saved, new length is ${charactersCount} characters`,
                  });
                  const rawData = localStorage.getItem("post-generate")!;
                  const data = JSON.parse(rawData);
                  data[index] = formValue;
                  localStorage.setItem("post-generate", JSON.stringify(data));
                }
              }}
              className={cn(
                "size-8 grayscale transition-all ease-in-out duration-300",
                isEditing && "grayscale-0",
              )}
            />

            <StyledCopyIcon
              tabIndex={0}
              role="button"
              aria-label="Copy Post"
              onClick={() => {
                navigator.clipboard.writeText(formValue);
                toast({
                  title: `Copied to clipboard`,
                  description: `Post ${index + 1} has been copied to clipboard`,
                });
              }}
              className={cn(
                "size-8  transition-all ease-in-out duration-300",
                charactersCount > 300 ||
                  (isEditing && "grayscale cursor-not-allowed"),
              )}
            />
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <form className="flex flex-col space-y-1.5">
          <Label htmlFor="post">Post</Label>
          <Textarea
            id="post"
            className="h-[200px]"
            placeholder="Enter your post here"
            value={formValue}
            readOnly={!isEditing}
            onChange={(e) => {
              const targetValue = e.target.value;
              setFormValue(targetValue);
              updateCounters(targetValue);
              localStorage.setItem("post-create", targetValue);
            }}
          />
        </form>
        <div className="p-2 bg-purple-400 border-border border-2 rounded-base w-full h-fit flex text-sm flex-col items-start justify-start gap-1">
          <p>
            Characters:{" "}
            <span
              className={cn(
                "font-bold",
                charactersCount > 300 && "text-red-800",
              )}
            >
              {charactersCount}
            </span>
          </p>
          <p>
            Words: <span className="font-bold">{wordsCount}</span>
          </p>
          <p>
            New Lines: <span className="font-bold">{newLinesCount}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
