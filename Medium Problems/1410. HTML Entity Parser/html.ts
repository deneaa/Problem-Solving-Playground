function entityParser(text: string): string {
  const map = new Map<string, string>([
    ["&quot;", '"'],
    ["&apos;", "'"],
    ["&amp;", "&"],
    ["&gt;", ">"],
    ["&lt;", "<"],
    ["&frasl;", "/"],
  ]);

  return text.replace(/&[a-z]+?;/g, (entity) => map.get(entity) || entity);
}
