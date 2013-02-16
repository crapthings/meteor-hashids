Package.describe({
  summary: "A small JavaScript class to generate YouTube-like hashes from one or many numbers. This is a client-side version of Node.js hashids"
});

Package.on_use(function (api, where) {
  where = where || ['client', 'server'];

  api.add_files('lib/hashids/hashids.js', where);
  api.add_files('common.js', where);
});
