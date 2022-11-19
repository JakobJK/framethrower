-- Revert flipr:framethrower_public from pg

begin;

  drop schema if exists framethrower_public cascade;

commit;
