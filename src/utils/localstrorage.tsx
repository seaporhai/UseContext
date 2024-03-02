
export function getLocalStorage(name: string) {
  const items = localStorage.getItem(name);
  return items ? JSON.parse(items) : null;
}

export function setLocalStorage(name: string, data: any) {
  localStorage.setItem(name, JSON.stringify(data));
}
