-- Revert framethrower:framethrower_public.function.update_own_news_comment from pg

begin;

  drop function if exists framethrower_public.update_own_news_comment(text, UUID);

commit;
