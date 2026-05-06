export function formatUsd(n: number | null | undefined): string {
  if (n === null || n === undefined) return "—";
  return `$${n.toFixed(2)}`;
}

export function highlightMatch(text: string, query: string): Array<{ text: string; match: boolean }> {
  if (!query) return [{ text, match: false }];
  const lower = text.toLowerCase();
  const q = query.toLowerCase();
  const parts: Array<{ text: string; match: boolean }> = [];
  let i = 0;
  while (i < text.length) {
    const idx = lower.indexOf(q, i);
    if (idx === -1) {
      parts.push({ text: text.slice(i), match: false });
      break;
    }
    if (idx > i) parts.push({ text: text.slice(i, idx), match: false });
    parts.push({ text: text.slice(idx, idx + q.length), match: true });
    i = idx + q.length;
  }
  return parts;
}
