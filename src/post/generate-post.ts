const CHUNK_SIZE = 300;
type GeneratePostType =
  | {
      success: true;
      message: string;
      data: string[];
    }
  | {
      success: false;
      message: string;
    };
export default function GeneratePost(
  post: string,
  addPageNo: boolean,
): GeneratePostType {
  if (post.length === 0)
    return {
      success: false,
      message: "Post cannot be empty",
    };
  const chunks: string[] = [];
  let lastChunkEnd = 0;
  const effectiveChunkSize = addPageNo ? CHUNK_SIZE - 10 : CHUNK_SIZE;

  const findLastSentenceBoundary = (
    text: string,
    startPos: number,
    endPos: number,
  ): number => {
    for (let i = endPos; i >= startPos; i--) {
      if (text[i]?.match(/[.!?]/)) {
        return i + 1;
      }
    }
    return startPos; // If no sentence boundary found, return start position
  };

  for (let i = 0; i <= post.length; i++) {
    // Check for double newline (new topic)
    if (i < post.length - 1 && post[i] === "\n" && post[i + 1] === "\n") {
      if (i > lastChunkEnd) {
        chunks.push(post.slice(lastChunkEnd, i));
      }
      lastChunkEnd = i + 2;
      continue;
    }

    // Check if we've reached the chunk size limit
    if (i - lastChunkEnd >= effectiveChunkSize) {
      // Look for a sentence boundary within the current chunk
      const sentenceBoundary = findLastSentenceBoundary(post, lastChunkEnd, i);

      if (sentenceBoundary > lastChunkEnd) {
        // Split at sentence boundary
        chunks.push(post.slice(lastChunkEnd, sentenceBoundary));
        lastChunkEnd = sentenceBoundary;
        i = sentenceBoundary - 1;
      } else {
        // No sentence boundary found, split at chunk size
        chunks.push(post.slice(lastChunkEnd, i));
        lastChunkEnd = i;
      }
    }
  }

  // Add remaining text as the final chunk
  if (lastChunkEnd < post.length) {
    chunks.push(post.slice(lastChunkEnd));
  }

  if (addPageNo) {
    chunks.forEach((chunk, index) => {
      chunk = `${chunk} \n${index + 1}/${chunks.length}`;
      chunks[index] = chunk;
    });
  }
  return {
    success: true,
    message: `Generated ${chunks.length} Posts`,
    data: chunks,
  };
}
