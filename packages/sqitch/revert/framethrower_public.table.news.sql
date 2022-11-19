-- Revert flipr:framethrower_public.table.news from pg

begin;

  drop table if exists framethrower_public.news;

commit;
