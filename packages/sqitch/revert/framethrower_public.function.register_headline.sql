-- Revert flipr:framethrower_public.function.register_headline from pg

begin;

  drop function if exists framethrower_public.register_headline(text, text, text);

commit;
