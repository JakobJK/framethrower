-- Revert flipr:framethrower_public.function.profile_can_submit from pg

begin;

  drop function if exists framethrower_public.profile_can_submit(framethrower_public.profile);

commit;
