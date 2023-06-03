export const setLang = (lang: string) => {
    try {
      localStorage.setItem('lang', lang);
      return lang;
    } catch (error) {
      return false;
    }
  };
  
  export const getLang = () => {
    try {
      const value = localStorage.getItem('lang');
      if (value !== null) {
        return value;
      }
    } catch (error) {
      return false;
    }
  };
  
  export const setUserToken = (token: string) => {
    try {
      localStorage.setItem('user_token', token);
      return token;
    } catch (error) {
      return false;
    }
  };
  
  export const getUserToken = () => {
    try {
      const value = localStorage.getItem('user_token');
      if (value !== null) {
        return value;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  };
  
  export const deleteUserToken = () => {
    localStorage.removeItem('user_token');
  };
  