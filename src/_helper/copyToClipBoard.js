// function that handles the copy oasr
export const copyToClipBoard = (copyText) => {
  var TempText = document.createElement("input");
  TempText.value = copyText;
  document.body.appendChild(TempText);
  TempText.select();

  document.execCommand("copy");
  document.body.removeChild(TempText);

  console.log(TempText);

  //   alert("Copied the text: " + TempText);
};
