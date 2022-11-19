-- Revert flipr:framethrower_public.table.submission from pg

begin;

  drop table if exists framethrower_public.submission cascade;

commit;
