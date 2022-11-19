-- Revert flipr:framethrower_public.function.profile_is_instructor from pg

begin;

  drop function if exists framethrower_public.profile_is_instructor(framethrower_public.profile);

commit;
