-- Revert flipr:framethrower_public.function.authenticate from pg

begin;

  drop function if exists framethrower_public.authenticate(text, text);

commit;