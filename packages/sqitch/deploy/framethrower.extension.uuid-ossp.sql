-- Deploy flipr:framethrower.extension.uuid-ossp to pg

begin;

  create extension if not exists "uuid-ossp";

commit;
