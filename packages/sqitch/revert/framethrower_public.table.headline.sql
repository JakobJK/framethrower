-- Revert flipr:framethrower_public.table.headline from pg

begin;

  drop table if exists framethrower_public.headline;

commit;
