-- Revert flipr:framethrower_private from pg

begin;

  drop schema if exists framethrower_private cascade;

commit;