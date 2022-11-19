-- Revert flipr:framethrower_public.function.news_by_slug from pg

begin;

  drop function if exists framethrower_public.news_by_slug(text);

commit;
