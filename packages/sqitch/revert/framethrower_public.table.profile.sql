-- Revert flipr:framethrower_public.table.profile from pg

begin;

  drop table if exists framethrower_public.profile cascade;

commit
