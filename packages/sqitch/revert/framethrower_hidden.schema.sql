-- Revert flipr:framethrower_hidden from pg

begin;

  drop schema if exists framethrower_hidden cascade;

commit;
