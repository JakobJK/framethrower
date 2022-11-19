-- Revert framethrower:framethrower_public.function.delete_own_news_comment from pg

begin;
  drop function if exists framethrower_public.delete_own_news_comment(uuid);

commit;
