export async function jsonReader(file: File | null | undefined): Promise<object> {
  const uploadEvent = new Promise<ProgressEvent<FileReader>>((resolve, reject) => {
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = resolve;
      fileReader.onerror = reject;
      fileReader.readAsText(file);
    } else {
      reject(Error('No file provided'));
    }
  });
  const loadedFile = (await uploadEvent).target?.result;
  if (typeof loadedFile !== 'string') {
    throw Error('Bad file format');
  }
  return JSON.parse(loadedFile) as object;
}
