function isLoggedIn() {
    if (!localStorage.getItem('token')) {
      return true;
    }
    return false;
  }