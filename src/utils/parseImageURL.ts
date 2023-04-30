function parseImageURL(imageURL: string): string {
  if (!imageURL) return "";
  if (imageURL.startsWith("ipfs://ipfs")) {
    imageURL = "https://ipfs.io/ipfs/" + imageURL.slice(11);
    return imageURL;
  }
  if (imageURL.startsWith("ipfs://")) {
    imageURL = "https://ipfs.io/ipfs/" + imageURL.slice(7);
    return imageURL;
  } else {
    return imageURL;
  }
}

export default parseImageURL;
