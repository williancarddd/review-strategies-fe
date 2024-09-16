const routes_page = ["/pages/calendar", "/pages/dashboard", "/pages/profile", "/pages/settings", "/pages/statistics", "/pages/support"];
export const routes = {
  public: ['/login', '/register', '/' , '/policys/privacy', '/policys/payment', ...routes_page],
  private: ['/home', '/dashboard', '/profile'],
};
