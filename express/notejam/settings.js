var settings = {
  development: {
    db: "notejam.db",
    dsn: "sqlite://notejam.db"
  },
  test: {
    db: "notejam_test.db",
    dsn: "sqlite://notejam_test.db"
  },
  production: {
    db: "/home/notejam.db",
    dsn: "sqlite:///home/notejam.db"
  }
};

var env = process.env.NODE_ENV
if (!env) {
  env = 'development'
};

module.exports = settings[env];