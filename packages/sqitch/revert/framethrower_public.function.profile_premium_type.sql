-- Revert flipr:framethrower_public.function.profile_premium_type from pg

begin;

  drop function if exists framethrower_public.profile_premium_type(framethrower_public.profile);

commit;
