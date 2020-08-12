export const getStoredUser = () => localStorage.getItem('user');

export const getAuthToken = () => localStorage.getItem('token');


export const storeUser = (user) => { 
    localStorage.setItem('user', JSON.stringify(user)); 
}

export const storeToken = (token) => {
    localStorage.setItem('token', token);
}