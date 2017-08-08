class Sharer {
  static openWindow(url) {
    const left = (screen.availWidth - 600) >> 1;
    const top = (screen.availHeight - 300) >> 1;

    window.open(
      url,
      "",
      `top=${top},left=${left},width=600,height=300,location=no,menubar=no`
    );
  }

  static share(type, url, text) {
    let shareURL = "";
    const shareText = encodeURIComponent(text);

    switch (type) {
      case "facebook":
        shareURL = `http://www.facebook.com/sharer.php?u=${url}&t=${shareText}`;
        break;
      case "twitter":
        shareURL = `https://twitter.com/intent/tweet/?text=${shareText}&url=${url}`;
        break;
      default:
        break;
    }

    Sharer.openWindow(shareURL);
  }
}

export default Sharer;
