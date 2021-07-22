// Converts smiley name to emoji
export const convertSmileyText = (smileyName) => {
  switch (smileyName) {
    case "love":
      return "😍";

    case "cry":
      return "😭";

    case "sad":
      return "😥";

    case "hail":
      return "🙌";

    case "thumb":
      return "👍";

    default:
      break;
  }
};
