export async function fetchFile(linkToFile: string): Promise<object> {
  const url = new URL(`${document.location.origin}/api/file`);
  url.searchParams.append('fileLink', linkToFile);
  const res = await fetch(url.toString());
  return res.json();
}
