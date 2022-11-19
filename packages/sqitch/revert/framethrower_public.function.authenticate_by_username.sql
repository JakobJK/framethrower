-- Revert flipr:framethrower_public.function.authenticate_by_username from pg

begin;

  drop function if exists framethrower_public.authenticate_by_username(text, text);

commit;
