-- Deploy flipr:framethrower.extension.unaccent to pg

begin;

  create extension if not exists "unaccent";

commit;
