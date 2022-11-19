-- Revert flipr:framethrower_public.table.news_comment from pg

begin;

  drop table framethrower_public.news_comment;

commit;
