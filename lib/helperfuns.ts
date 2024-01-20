export function cuttingString(text: string, total: number) {
  const string = text;
  return string?.length > total ? string.slice(0, total) + " ..." : string;
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB");
}
