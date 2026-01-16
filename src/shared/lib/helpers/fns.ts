export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

export const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const getSessionStorage = (key: string) => {
  return sessionStorage.getItem(key);
};

export const setSessionStorage = (key: string, value: string) => {
  sessionStorage.setItem(key, value);
};

export const removeSessionStorage = (key: string) => {
  sessionStorage.removeItem(key);
};

export const clearSessionStorage = () => {
  sessionStorage.clear();
};

export const getCookie = (name: string) => {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'),
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const setCookie = (name: string, value: string, options?: { [key: string]: string }) => {
  options = {
    path: '/',
    ...options,
  };
  if (options.expires) {
    options.expires = new Date(options.expires).toUTCString();
  }
  let updatedCookie = `${name}=${encodeURIComponent(value)}`;
  for (const optionKey in options) {
    updatedCookie += `; ${optionKey}=${options[optionKey]}`;
  }
  document.cookie = updatedCookie;
};

export const deleteCookie = (name: string) => {
  setCookie(name, '', { 'max-age': '-1' });
};

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};
