class AuthService {
    loginSuccessfully(username, password) {
        sessionStorage.setItem('authUser', username);
    }
    logoutSuccessfully() {
        sessionStorage.removeItem('authUser');
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('authUser');
        if(user===null) return false;
        return true;
    }
}
export default new AuthService();