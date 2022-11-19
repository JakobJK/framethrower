-- Revert flipr:framethrower_public.function.profile_get_built_in_feedback from pg

begin;

  drop function if exists framethrower_public.profile_get_built_in_feedback(framethrower_public.profile);

commit;
