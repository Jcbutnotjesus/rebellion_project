export const getLastPartOfUrl = (url) => {
    return parseInt(url.split("/").filter(Boolean).slice(-1)[0]);
  };

  export const getIds = (urls)=>{
    return urls.map((url) => getLastPartOfUrl(url));
  }