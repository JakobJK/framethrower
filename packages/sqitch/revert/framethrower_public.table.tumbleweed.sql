-- Revert flipr:framethrower_public.table.tumbleweed from pg

begin;

  drop table if exists framethrower_public.tumbleweed;

commit;
