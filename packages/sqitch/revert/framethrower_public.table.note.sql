-- Revert flipr:framethrower_public.table.note from pg

begin;

  drop table if exists framethrower_public.note cascade;

commit;
