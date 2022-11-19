-- revert flipr:framethrower_public.function.register_news from pg

begin;

  drop function if exists framethrower_public.register_news(text, text, text, text);

commit;
