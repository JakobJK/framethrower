-- Revert flipr:framethrower_public.function.get_profile_by_username from pg

begin;

  drop function if exists framethrower_public.get_profile_by_username(text);

commit;
