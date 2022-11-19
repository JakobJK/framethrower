-- Revert flipr:framethrower_public.function.register_user from pg

begin;

  drop function if exists framethrower_public.register_profile(text, text, text);

commit;
