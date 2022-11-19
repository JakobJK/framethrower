-- Revert flipr:framethrower_public.function.register_news_comment from pg

begin;

  drop function if exists framethrower_public.register_news_comment(text, uuid);

commit;
